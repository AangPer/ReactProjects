import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = cities => (
    cities.map( city => (<WeatherLocation key={city} city={city} />))
    //Well in this video named 6. Key use in component lists key is one of the advantage of react, key identify one object of the array like a unique object and this is a great tool because if an object change react not rendering all the elements just update the element tha has changed and oviously at the moment of rendering this process is faster. Mor einfo here http://bit.ly/2Cge4lu
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
