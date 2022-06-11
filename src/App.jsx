import React, { useState } from 'react';
import Card from './components/Card';
import fetchData from './services/api';
import initialData from './components/helpers/initialData';
import changeBackground from './components/helpers/changeBackground';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);
  const [bg, setBg] = useState('weatherApp');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (city.length === 0) {
      alert('Campo vazio');
    } else {
      const response = await fetchData(city);

      setData(response);
      setBg(changeBackground());
      setCity('');
    }
  };

  return (
    <div className={`${bg} flex flex-col w-full h-screen items-center sm:justify-center p-4`}>

      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          type="text"
          placeholder="Digite uma cidade"
          className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
          onChange={({ target: { value } }) => setCity(value)}
          value={city}
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />

    </div>
  );
}

export default App;
