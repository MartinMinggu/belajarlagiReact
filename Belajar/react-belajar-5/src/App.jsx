import { useState } from 'react'
import './App.css'
import HelloContainer from './components/HelloContainer';
import CounterDisplay from './components/CounterDisplay';
import ButtonAlert from './components/ButtonAlert';
import { useCallback } from 'react';
import CashbackCalculator from './components/CashbackCalculator';

function App() {
  console.log('app dibuat');

  const [count, setCount] = useState(0);
  const showAlert = useCallback(() =>{
    alert(`This is Alert ${count}`);
  },[count]);

  return (
    <>
      <div>
        <button onClick={() => setCount(prev => prev - 1)}>Kurang</button>
        <p>count : {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Tambah</button>
      </div>
      <HelloContainer />
      <CounterDisplay count={count} />
      <ButtonAlert onClick={showAlert} />
      <CashbackCalculator/>
    </>
  )
}

export default App
