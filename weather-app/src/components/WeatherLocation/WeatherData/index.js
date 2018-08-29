import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
// import {SNOW} from './../../../constants/weathers';
import './styles.css';

const WeatherData = ({data}) => {
  //proseguimos a hacer un destructuring e spor ese motivo que esto luce asi temperature = {temperature}
  const {temperature, weatherState, humidity, wind} = data;
  return (<div className='weatherDataCont'>
    <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
    <WeatherExtraInfo humidity={humidity} wind={wind}/>
  </div>);
};
WeatherData.propTypes = {
  data: PropTypes.shape({temperature: PropTypes.number.isRequired, weatherState: PropTypes.string.isRequired, humidity: PropTypes.number.isRequired, wind: PropTypes.string.isRequired})
};
export default WeatherData;
// Crea un programa que imprima en consola 3 tipos de autos y sus caracteristicas.
// caracteristicas principales:
// tipos: camioneta, sedan, deportivo
// chasis: grande, mediano, chico
// motor: v4,v6,v8
// ruedas:4
