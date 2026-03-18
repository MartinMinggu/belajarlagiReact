import { useEffect, useState } from 'react';
import './App.css'
import EmployeeContainer from './components/EmployeeContainer';

function App() {
  console.log('App side effect');


  useEffect(
    () => {
      console.log('App use effect');

    },
    []
  );

  useEffect(
    () => {
      console.log('App use effect angka ada perubahan');

    },
    [angka]
  );

  useEffect(
    () => {
      console.log('App use effect jawaban ada perubahan');

    },
    [jawaban]
  );
  const [angka, setAngka] = useState(1);

  const handleTambahAngka = () => {
    setAngka(prev => prev + 1);
  }
  const [jawaban, setJawaban] = useState('YES');
  const handleJawaban = () =>{
    setJawaban (prev => {
      if(prev === 'YES'){
        return 'NO';
      }
      else{
        return 'YES';
      }
    })
  }

  return (<>
    <h1>App Baru</h1>
    <h2>Emplooyee Container</h2>
    <div>Angka : {angka}</div>
      <div>
        <button type='button' onClick={handleTambahAngka}> Tambah Angka</button>
      </div>
    
    <EmployeeContainer handleTambahAngka={handleTambahAngka} />
    <div>jawaban :{jawaban}</div>
    <div>
      <button onClick={handleJawaban}>Ubah Jawaban </button>
    </div>

  </>)
}

export default App
