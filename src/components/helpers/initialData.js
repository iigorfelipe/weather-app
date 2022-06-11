const initialData = {
  location: {
    name: '-',
    region: '-',
    country: '-',
  },
  current: {
    temp_c: 0,
    condition: {
      text: '-',
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
    },
  },
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: 0,
          mintemp_c: 0,
          condition: {
            text: '-',
            icon: '//cdn.weatherapi.com/weather/64x64/day/302.png',
          },
        },
      },
      {
        day: {
          maxtemp_c: 0,
          mintemp_c: 0,
          condition: {
            text: '-',
            icon: '//cdn.weatherapi.com/weather/64x64/day/302.png',
          },
        },
      },
    ],
  },
};

export default initialData;
