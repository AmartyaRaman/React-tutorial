import React from 'react';
import { useWeather } from '../context/Weather.jsx';

const Input = () => {
    
  const weather = useWeather();

  return (
    <input 
    type="text" placeholder='Search Here'
    value={weather.searchCity} 
    onChange={(e) => weather.setSearchCity(e.target.value)} 
    
    className='border-2 border-gray-300 p-2 rounded-lg'
    />

  );
};

export default Input;