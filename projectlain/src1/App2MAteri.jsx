import { useRef, useState } from 'react'
import './App.css'
// useRef
function App() {
  const jobRef = useRef();
  const [person, setPerson] = useState({ name: 'Rudy Gunaawan', job: 'Programmer' });
  // const cityRef = useRef();
  // const convertToBandung = () => {
  //   let namaKota = cityRef.current.textContent;
  //   console.log(namaKota);
  //   console.log(cityRef.current.getAttribute('class'));
  //   cityRef.current.textContent = 'Bandung';
  // }
  const changeJob = () =>
    // const job = jobRef.current.value;
    setPerson(prevPerson => ({ ...prevPerson, job: jobRef.current.value }))

  const changeName = (name) => setPerson(prevPerson => ({ ...prevPerson, name }))
  
  const hapusInputJob = () => jobRef.current.value = '';

  // const hapusInputNama = () => nameRef.current.value = '';


  return (
    <>
      {/* <div>
        <span>City : </span>
        <span ref={cityRef} className='special'>Jakarta</span>
      </div>
      <div>
        <button onClick={convertToBandung} type='button'>Menjadi Bandung</button>

      </div> */}
      <div>
        <p>Name : {person?.name}</p>
        <p>Pekerjaan : {person?.job}</p>
      </div>
      <div>

        <label>Name</label> <input type="text" placeholder='Masukan Name' onChange={event => changeName(event.target.value)}  />
      </div>
      <div>
        <label>Pekerjaan</label> <input type="text" placeholder='Masukan Pekerjaan' ref={jobRef} onChange={changeJob} onBlur={hapusInputJob} />
        {/* <button></button> */}
        
      </div>
    </>


  )
}

export default App
