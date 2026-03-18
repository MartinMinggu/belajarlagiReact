import CapsuleButton from "../ui-element/CapsuleButton";
import { useForm } from 'react-hook-form';
import CustomInputForm from "../ui-element/CustomInputForm";
import BaseForm from "../ui-element/BaseForm";

export default function AcradeForm({ submitAcrade }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            year: (new Date()).getFullYear(),
            developer: '',
            coins: 1
        }
    });

    const handleSubmitAcrade = input => {
        console.log(input)
        submitAcrade(input);
        reset();
    }
    return (<BaseForm onSubmit={handleSubmit(handleSubmitAcrade)}>

        <h1>Form</h1>
        <CustomInputForm text="Nama" id="nama"
            error={errors?.nama}
            {...register('nama', { required: 'nama harus di input' })}
        />
        <CustomInputForm type="number" text="tahun" placeholder="masukan tahun" min={1990}
            {...register('year', { valueAsNumber: true, min: { value: 1990, message: 'tidak boleh kurang dari 1990' } })}
            error={errors?.year} id="year"
        />
        <CustomInputForm text="developer" placeholder="masukan developer" id="developer"
            error={errors?.developer}
            {...register('developer', { required: 'developer harus di input' })}
        />
        <CustomInputForm type="number" text="coins" min="1" max="5" placeholder="masukan jumlah Coins" id="coins"
            {...register('coins', { valueAsNumber: true, min: { value: 1, message: 'tidak boleh kurang dari 1' } })}
            error={errors?.coins}
        />
        <div className="submit-button-container">
            <CapsuleButton type="submit"> <i className="fas fa-save"></i> <span> Save Acrade</span></CapsuleButton>
        </div>
    </BaseForm>);
}
{/* <div className="mb-5">
    <label htmlFor="">Nama</label>
    <input type="text" placeholder="masukan nama" {...register('name')} />
</div> 
<div className="mb-5">
    <label htmlFor="">Year</label>
    <input type="number" placeholder="masukan tahun" min={1990}   {...register('year', {valueAsNumber:true})} />
</div> 
<div className="mb-5">
    <label htmlFor="">Developer</label>
    <input type="text" placeholder="masukan developer"  {...register('developer')} />
</div>
<div className="mb-5">
    <label htmlFor="">Coins</label>
    <input type="number" min="1" max="5" placeholder="masukan jumlah Coins"  {...register('coin', {valueAsNumber:true})} />
</div> */}

