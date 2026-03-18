import { useEffect, useState } from 'react';
import './App.css'
import EmployeeContainer from './components/EmployeeContainer';
import HelloContainer from './components/HelloContainer';

function App() {
  console.log('App side effect');

  const [angka, setAngka] = useState(1);
  useEffect(
    () => {
      console.log('App use effect angka ada perubahan');

    },
    [angka]
  );

  const [showHello, setShowHello] = useState(true);

  const handleTambahAngka = () => {
    setAngka(prev => prev + 1);
  }

  return (<>
    <h1>App Baru</h1>
    <h2>Emplooyee Container</h2>
    <div>Angka : {angka}</div>
    <div>
      <button onClick={()=> setShowHello(prev => !prev)}>Toogle Hello</button>
    </div>

    <EmployeeContainer bilangan={angka} handleTambahAngka={handleTambahAngka} />
    {showHello ? <HelloContainer /> : undefined}
  </>)
}

export default App
