import { useForm } from 'react-hook-form';
import SimpleCard from '../ui-element/SimpleCard';
import BaseTextbox from '../ui-element/BaseTextbox';
import BaseButton from '../ui-element/BaseButton';
import BaseRadioButton from '../ui-element/BaseRadioButton';
import BaseDropdown from '../ui-element/BaseDropdown';
import BaseTextarea from '../ui-element/BaseTextarea';
import ratingData from '../../data/rating';
import FormRow from '../ui-element/FormRow';
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../../stores/movies-slice';

export default function MovieForm() {
    const { movieId, genre } = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movie.movies);
    const getSelectedMovie = id => {
        return movies.filter(mov => mov.id == id)[0];
    }
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const saveMovie = input => {
        navigate(`/movie/${genre}`)
        dispatch(movieAction.upsert({ ...input }));
    }
    useEffect(() => {
        const selectedMovie = getSelectedMovie(movieId);
        if (selectedMovie) {
            const { id, title, production, duration, status, rating, summary } = selectedMovie;
            setValue('id', id);
            setValue('title', title);
            setValue('production', production);
            setValue('duration', duration);
            setValue('status', status);
            setValue('rating', rating);
            setValue('summary', summary);
        }
        setValue('genre', genre);
    }, [])

    return (
        <SimpleCard>
            <form onSubmit={handleSubmit(saveMovie)}>
                <FormRow>
                    <span>Title*:</span>
                    <BaseTextbox {...register('title')} type='text' />
                </FormRow>
                <FormRow>
                    <span>Production:</span>
                    <BaseTextbox {...register('production')} type='text' />
                </FormRow>
                <FormRow>
                    <span>Duration:</span>
                    <BaseTextbox {...register('duration')} min='0' max='300' type="number" />
                    <span className='post-fix'>minutes</span>
                </FormRow>
                <FormRow>
                    <span>Status:</span>
                    <BaseRadioButton {...register('status')} name='status' value='CS' label={'Coming Soon'} />
                    <BaseRadioButton {...register('status')} name='status' value='NP' label={'Now Playing'} />
                    <BaseRadioButton {...register('status')} name='status' value='NS' label={'No Showing'} />
                </FormRow>
                <FormRow>
                    <span>Rating:</span>
                    <BaseDropdown {...register('rating')} options={ratingData} />
                </FormRow>
                <FormRow>
                    <div>
                        <span>Summary:</span>
                    </div>
                    <BaseTextarea {...register('summary')}></BaseTextarea>
                </FormRow>
                <div className='button-container'>
                    <BaseButton as={Link} to={`/movie/${genre}`}>Cancel</BaseButton>
                    <BaseButton type="submit">Save Movie</BaseButton>
                </div>
            </form>
        </SimpleCard>
    )
}