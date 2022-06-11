import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const { location, current, forecast } = data;

  const tomorrow = forecast.forecastday[1].day;

  return (

    <div className="flex justify-between">

      <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px] mr-3">

        <div className="text-center">
          <h1 className="block text-2xl font-bold text-blue-600">Agora</h1>

          <span className="block text-xg font-bold text-slate-700">{ location.name }</span>
          <span className="text-slate-400 text-sm font-medium">{ `${location.region}, ${location.country}` }</span>
        </div>

        <div className="font-bold text-slate-700 justify-center flex mt-4 mb-2">
          <span className="text-8xl">{ current.temp_c }</span>
          <span className="text-2xl mt-2">°C</span>
        </div>

        <div className="flex justify-center flex-col items-center">
          <img src={current.condition.icon} alt="weather icon" />
          <span className="text-slate-700 font-medium">{ current.condition.text }</span>
        </div>

      </div>

      <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px] ml-3">

        <div className="text-center">
          <h1 className="block text-2xl font-bold text-blue-600">Amanhã</h1>
        </div>

        <div className="font-bold text-slate-700 justify-center flex mt-4 mb-2">
          max
          <span className="text-6xl">{ tomorrow.maxtemp_c }</span>
          <span className="text-2xl mt-2">°C</span>
        </div>
        <div className="font-bold text-slate-700 justify-center flex mt-4 mb-2">
          min
          <span className="text-6xl">{ tomorrow.mintemp_c }</span>
          <span className="text-2xl mt-2">°C</span>
        </div>

        <div className="flex justify-center flex-col items-center">
          <img src={tomorrow.condition.icon} alt="weather icon" />
          <span className="text-slate-700 font-medium">{ tomorrow.condition.text }</span>
        </div>

      </div>
    </div>
  );
}

Card.propTypes = {
  data: propTypes.object,
}.isRequired;

export default Card;
