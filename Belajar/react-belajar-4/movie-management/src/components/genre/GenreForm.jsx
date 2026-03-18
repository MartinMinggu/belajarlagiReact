import { useForm } from 'react-hook-form';
import BaseTextbox from '../ui-element/BaseTextbox';
import BaseButton from '../ui-element/BaseButton';
import FormWrapper from '../ui-element/FormWrapper';
import { CinemaContext } from '../../providers/CinemaContext'
import { useContext } from 'react';

export default function GenreForm() {
    const { insertGenre } = useContext(CinemaContext);

    const { register, handleSubmit, reset } = useForm();

    const submitGenre = ({ genre }) => {
        insertGenre(genre);
        reset();
    }

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit(submitGenre)}>
                <BaseTextbox {...register('genre')} type="text" />
                <BaseButton type="submit">insert new</BaseButton>
            </form>
        </FormWrapper>
    )
}