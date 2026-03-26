import { useForm } from 'react-hook-form';
import BaseTextbox from '../ui-element/BaseTextbox';
import BaseButton from '../ui-element/BaseButton';
import FormWrapper from '../ui-element/FormWrapper';
import { useDispatch } from 'react-redux';
import { genreAction } from '../../stores/genre-slice';


export default function GenreForm() {
    const dispatch = useDispatch();
    const insertGenre = genre => {
        dispatch(genreAction.insert(genre));
    }

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