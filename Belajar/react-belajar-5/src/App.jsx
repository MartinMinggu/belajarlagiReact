import { useState } from 'react'
import './App.css'
import HelloContainer from './components/HelloContainer';
import CounterDisplay from './components/CounterDisplay';
import ButtonAlert from './components/ButtonAlert';

function App() {
  console.log('app dibuat');

  const [count, setCount] = useState(0);
  const showAlert =()=>{
    alert('This is Alert');
  }

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
    </>
  )
}

export default App
