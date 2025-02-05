import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import { CountContext } from './context/CountContext'

function App() {
  
  let {count, setCount} = useContext(CountContext);
  console.log(count);

  return (
    <>
      <h1>The count is: {count}</h1>
      <Button />
      <Button />
      <Button />
      <Button />
    </>
  )
}

export default App
