import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component {
  render() {
    const {city} = this.props;
    // const city = this.props.city;
    return (
      <div>
      <h1 className='forecastTitle'>Pronostico Extendido para {city} </h1>
      </div>);
  }
}
ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}
export default ForecastExtended;
