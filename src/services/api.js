const KEY = 'e5f6c6ac3f2948eca0410552220606';

const fetchData = async (city) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export default fetchData;
