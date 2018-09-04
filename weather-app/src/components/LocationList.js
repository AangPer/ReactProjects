import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = cities => (
    cities.map( city => (<WeatherLocation city={city} />))
    // Como repaso hay que decir que aqui creamos una funcion llamada strToComponent quien  transformara todo el string de el array cities en App.js y los tansformaremos en los componenetes de WeatherLocation, en cities.map donde .map permitira obtener todos los array almacenarlos y convertirlos en weatherlocation components en el funcionamieto la palabra city obtiene solo una cidad de las ciudades mapeadas en cities.map
);
const LocationList = ({cities}) =>(
  <div>
    {strToComponent(cities)}
  </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;
