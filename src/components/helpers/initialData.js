const initialData = {
  location: {
    name: '-',
    region: '-',
    country: '-',
    localtime: '2022-06-12 1:16',
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
