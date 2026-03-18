import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css'
// useRef
function App() {

  const [person, setPerson] = useState({
    name: 'rudy',
    job: 'Developer'
  });

  const handleUpdate = (input) => setPerson(input);

  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    defaultValues :{
      name : person?.name,
      job: person?.job
    }
  });
  return (
    <>
      <div>
        <p>Name : {person?.name}</p>
        <p>Pekerjaan : {person?.job}</p>
      </div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <label>Name*</label> <input {...register('name', { required: 'name harus diinput' })} type="text" placeholder='Masukan Name' name='name'/>
          <span className='validation'>{errors?.name?.message}</span>
        </div>
        <div>
          <label>Pekerjaan</label> <input {...register('job', { maxLength: { value: 10, message: 'tidak boleh lebih dari 10' } })} type="text" placeholder='Masukan Pekerjaan' name='job' />
          <span className='validation'>{errors?.job?.message}</span>
        </div>
        <button type='submit'>Update Data</button>
        <button onClick={() => reset()} type='reset'>Update Data</button>
      </form>
    </>
  )
}

export default App
