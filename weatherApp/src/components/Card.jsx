import React from 'react';
import { useWeather } from '../context/Weather';

const Card = () => {

  const weather = useWeather();
  console.log(weather.data)

  return (
    <div className='flex flex-col items-center w-72 justify-center border-2 border-gray-300 p-4 rounded-lg space-y-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <img src={weather.data?.current.condition.icon} />
      <h2>{weather.data?.current.temp_c}</h2>
      <h5>{weather.data?.location.name}, {weather.data?.location.region}, {weather.data?.location.country}</h5>
    </div>
  );
};

export default Card;