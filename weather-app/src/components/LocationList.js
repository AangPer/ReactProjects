import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
  <div>
    <WeatherLocation city = {'Buenos Aires,co'}/>
    <WeatherLocation city = {'Trondheim,no'}/>
    <WeatherLocation city = {'Oslo,no'}/>
  </div>
);

export default LocationList;
