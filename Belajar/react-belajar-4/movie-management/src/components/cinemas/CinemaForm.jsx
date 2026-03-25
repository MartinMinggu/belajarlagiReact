import { useForm } from 'react-hook-form';
import SimpleCard from '../ui-element/SimpleCard';
import BaseTextbox from '../ui-element/BaseTextbox';
import BaseButton from '../ui-element/BaseButton';
import FormRow from '../ui-element/FormRow';
import { CinemaContext } from '../../providers/CinemaContext'
import { useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Validation from '../ui-element/Validation';

export default function CinemaForm() {
    const { cinemaId } = useParams();
    const { upsertCinema, getSelectedCinema } = useContext(CinemaContext);
    const { register, handleSubmit, setValue, formState: {errors} } = useForm();
    const navigate = useNavigate();
    const saveCinema = input => {
        navigate(`/cinemas`)
        upsertCinema({ ...input });
    }
    useEffect(() => {
        const selectedCinema = getSelectedCinema(cinemaId);
        if (selectedCinema) {
            const { id, name, location } = selectedCinema;
            setValue('id', id);
            setValue('name', name);
            setValue('location', location);
        }
    }, [])

    return (
        <SimpleCard>
           <form onSubmit={handleSubmit(saveCinema)}>
                    <FormRow>
                        <span>Name*:</span>
                        <BaseTextbox {...register('name', {required:'name is required'})} type='text'/>
                        <Validation>{errors.name?.message}</Validation>
                    </FormRow>
                    <FormRow>
                        <span>Location:</span>
                        <BaseTextbox {...register('location')} type='text'/>
                    </FormRow>
                    <div className='button-container'>
                        <BaseButton as={Link} to={`/cinemas`}>Cancel</BaseButton>
                        <BaseButton type="submit">Save Cinema</BaseButton>
                    </div>
                </form>
        </SimpleCard>
    )
}