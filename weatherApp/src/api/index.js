const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=bdd85eb34a6f4b3b89e144017250802';

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  return response.json();
}

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
  return response.json();
}