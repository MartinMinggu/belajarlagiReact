import { useForm } from "react-hook-form";
import CustomInputForm from "../ui-element/CustomInputForm";
import CapsuleButton from "../ui-element/CapsuleButton";
import BaseForm from "../ui-element/BaseForm";

export default function PlayerForm({ submitPlayer }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            balance: 0,
            scores: 0
        }
    });
    const handleSubmitPlayer = input => {
        submitPlayer(input);
        reset();
    }
    return (<BaseForm onSubmit={handleSubmit(handleSubmitPlayer)}>
        <h1>Form</h1>
        <CustomInputForm text={"username"} id="username"
            error={errors?.username}
            {...register('username', { required: 'username harus di input' })}
        />
        <CustomInputForm type="number" text={"balance"} id="balance"
            error={errors?.balance}
            {...register('balance', { valueAsNumber: true, min: { value: 1, message: 'tidak boleh kurang dari 1' } })}
        />
        <CustomInputForm type="number" text={"scores"} id="scores"
            error={errors?.scores}
            {...register('scores', { valueAsNumber: true, min: { value: 1, message: 'tidak boleh kurang dari 1' } })}
        />
        <div className="submit-button-container">
            <CapsuleButton type="submit"><i className="fas fa-save"></i> <span>Save Player</span></CapsuleButton>
        </div>
    </BaseForm>)
}