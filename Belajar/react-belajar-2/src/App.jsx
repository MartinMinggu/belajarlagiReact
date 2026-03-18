import { useRef, useState } from 'react'
import './App.css'
import PersonSection from './PersonSection';
import InputSection from './InputSection';
import FormSection from './FormSection';

function App() {
  const personRef = useRef(null);
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const [formResult, setFormResult] = useState();
  const accesingDOM = () => {
    const namaUser = personRef.current.textContent;
    console.log("namaUser", namaUser);
    personRef.current.textContent = 'anak baru';
    personRef.current.setAttribute('id', 'customer');

    const input = inputRef.current.value;
    console.log(input);
  }

  const triggerSubmit = () => {
    formRef.current.publicSubmit();
  }
  function getValue(input) {
    setFormResult(input)
  }
  return (
    <>
      <div>
        <button type="button" onClick={accesingDOM}>Akses DOM</button>
      </div>
      <div>
        <PersonSection ref={personRef} label="seorang user" year={1990} />
        <InputSection ref={inputRef} />
      </div>
      <div>
        <FormSection ref={formRef} getValue={getValue} />
        <div>
          <button onClick={triggerSubmit} type='button'>Proses Form</button>
        </div>
      </div>
      <div>
        <p>Judul :{formResult?.judul} </p>
        <p>Bioskop :{formResult?.bioskop}  </p>
      </div>
    </>
  )
}

// function Aku({personRef,inputRef }){
//    const accesingDOM = () => {
//     const namaUser = personRef.current.textContent;
//     console.log("namaUser", namaUser);
//     personRef.current.textContent = 'anak baru';
//     personRef.current.setAttribute('id', 'customer');

//     const input = inputRef.current.value;
//     console.log(input);
//   }
//   return <div>
//     <button onClick={accesingDOM}>aku</button>
//   </div>
// }

export default App
