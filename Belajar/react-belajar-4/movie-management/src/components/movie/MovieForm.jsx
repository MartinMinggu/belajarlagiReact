import { useForm } from 'react-hook-form';
import SimpleCard from '../ui-element/SimpleCard';
import BaseTextbox from '../ui-element/BaseTextbox';
import BaseButton from '../ui-element/BaseButton';
import BaseRadioButton from '../ui-element/BaseRadioButton';
import BaseDropdown from '../ui-element/BaseDropdown';
import BaseTextarea from '../ui-element/BaseTextarea';
import ratingData from '../data/rating';
import FormRow from '../ui-element/FormRow';
import { CinemaContext } from '../../providers/CinemaContext'
import { useContext, useEffect } from 'react';

export default function MovieForm() {
    const { selectMovie, upsertMovie, selectedMovieId, getSelectedMovie } = useContext(CinemaContext);
    const { register, handleSubmit, setValue, reset } = useForm();
    const saveMovie = input => upsertMovie({ ...input });
    useEffect(() => {
        console.log('use effect dijalankan');
        const selectedMovie = getSelectedMovie();
        if (selectedMovie) {
            const { id, title, production, duration, status, rating, summary } = getSelectedMovie();
            const selectedMovie = getSelectedMovie();
            setValue('id', id);
            setValue('title', title);
            setValue('production', production);
            setValue('duration', duration);
            setValue('status', status);
            setValue('rating', rating);
            setValue('summary', summary);
        }
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
                    <BaseButton type="button" onClick={() => selectMovie(null)}>Cancel</BaseButton>
                    <BaseButton type="submit">Save Movie</BaseButton>
                </div>
            </form>
        </SimpleCard>
    )
}