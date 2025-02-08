import { use, useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocation();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl text-center mb-10'>Weather app</h1>
      <div className='mb-5'>
        <Input />
        <Button onClick={weather.fetchData} value='Search'/>
      </div>
      <Card />
      <Button value='Refresh'/>
    </div>
  )
}

export default App
