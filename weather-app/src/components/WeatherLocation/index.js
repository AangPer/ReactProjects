// Transforming the WeatherLocation functional component to class component
// import React from 'react';
import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from 'material-ui/CircularProgress';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const location = 'Villahermosa,mx';
const apiKey = '84b353d0a9367047b3ee3fc18e4afa07';
const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;

// This is our functional component as we can see it is a function that returned the rendering of our component
//
// const WeatherLocation = () => (
//     <div className="weatherLocationCont">
//         <Location city={"Villahermosa"}></Location>
//         <WeatherData data={data}></WeatherData>
//     </div>
// );

// This extend from the 3th line we are extracting just one component
class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Villahermosa',
      data: null
    };
    console.log("constructor");
  }

  handleUpdateClick = () => {
    fetch(apiWeather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({data});
    });
    // console.log("Actualizado");
  }

  componentWillMount() {
    this.handleUpdateClick();
  }

  render = () => {
    console.log("render");
    const {city, data} = this.state;
    return (
    <div className='weatherLocationCont'>
      <Location city={city}/>
      {data ? <WeatherData data={data}/> :
      <CircularProgress size={60} thickness={7} />}
      <br/>
    </div>);
  };
};
export default WeatherLocation;
