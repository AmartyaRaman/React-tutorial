import React, { createContext, useContext, useState } from 'react';
import { getWeatherDataForCity, getWeatherDataForLocation } from '../api';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async() => {
    const response = await getWeatherDataForCity(searchCity)
    setData(response);
  }

  const fetchCurrentUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherDataForLocation(latitude, longitude).then((response) => {
        setData(response);
      });
    })
  }

  return (
    <WeatherContext.Provider value={{ data, searchCity, fetchData, setSearchCity, fetchCurrentUserLocation }}>
      {children}
    </WeatherContext.Provider>
  );

}

export const useWeather = () => {
  return useContext(WeatherContext);
};