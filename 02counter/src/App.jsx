import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // creates a variable counter = 15 and a function setCounter [names can be different]
  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    // console.log("Clicked", counter)
    // counter++; 

    setCounter(++counter)   
  }

  const removeValue = () => {

    if (counter>0) setCounter(--counter)
  }

  return (
    <>
      <h1>Amartya aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >
        Add value
      </button>

      <br />

      <button
      onClick={removeValue}
      >
        Remove value
      </button>
    </>
  )
}

export default App
