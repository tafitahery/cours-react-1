import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
  const [data, setData] = useState([]);

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(({ data }) => setData(data));
  }, []);

  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
