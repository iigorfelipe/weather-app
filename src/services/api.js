const KEY = 'e5f6c6ac3f2948eca0410552220606';

const fetchData = async (city) => {
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=2&aqi=no&alerts=no`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export default fetchData;
