import { useForm } from 'react-hook-form';
import BaseTextbox from '../ui-element/BaseTextbox';
import BaseButton from '../ui-element/BaseButton';
import FormWrapper from '../ui-element/FormWrapper';

export default function GenreForm({insertGenre}){
    const {register, handleSubmit, reset} = useForm();

    const submitGenre = ({genre}) => {
        insertGenre(genre);
        reset();
    }

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit(submitGenre)}>
                <BaseTextbox {...register('genre')} type="text"/>
                <BaseButton type="submit">insert new</BaseButton>
            </form>
        </FormWrapper>
    )
}