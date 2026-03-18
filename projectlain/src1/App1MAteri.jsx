import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Martin Minggu');
  const [person, setPerson] = useState({
    name: 'Martin Minggu',
    age: 25,
    city: 'Jakarta'
  });

  const sayHello = () => {
    alert('Hello, Martin Minggu!');
  }
  function handleChangeName() {
    if (name === 'John Doe') {
      setName('Martin Minggu');
    } else {
      setName('John Doe');
    }
  }
  function updatePerson() {
    // versi pendek
    // setPerson(prevPerson => ({
    //   ...prevPerson, 
    //   job: 'Developer'
    // })
    // );
    // versi panjang
    setPerson((prevPerson) => {
      return {
        ...prevPerson,
        job: 'Developer'
      }
    }
    );

  }
  const updatePerson1 = age => {
    setPerson(prevPerson => ({ ...prevPerson, age }));
  }
  // let name = 'Martin Minggu';

  const [deretAngka, setDeretAngka] = useState([34, 57, 'lima puluh enam']);
  const loopingAngka = (numbers) => {
    let elements = [];
    for (let number of numbers) {
      elements.push(<p key={number}>{number}</p>);
    }
    return (<>{elements}</>);
  }
  const AddToList = () => {
    const input = document.querySelector('input');
    setDeretAngka([...deretAngka, input.value]);
    input.value = '';
  }
  const AddToFive = () => setDeretAngka([...deretAngka, 5]);


  return (
    <>
      <div>
        <p>person info </p>
        <p>{person.name}, {person.age}, {person.city}, {person.job}</p>
        <button onClick={updatePerson}>Update Person</button>
      </div>


      <h1>Welcome, {name}</h1>
      <button onClick={handleChangeName}>Change Name</button>
      <p>You clicked {count} times</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <button onClick={sayHello}>Say Hello</button>
      <div className='container'>
        <h2>Deret Angka</h2>
        {deretAngka.map((angka, index) => <p key={index}>{angka}</p>
        )}
        <p>Manual</p>
        <div>
          <input type="text" />
          <button onClick={() => AddToList()}>Add</button>
          <button onClick={() => AddToFive()}>Add</button>
        </div>
        <div>
          {loopingAngka(deretAngka)}
        </div>


      </div>
    </>
  )
}

export default App
