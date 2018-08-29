// Transforming the WeatherLocation functional component to class component
// import React from 'react';
import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';
import './styles.css';
const location = 'Villahermosa,mx';
const apiKey = '84b353d0a9367047b3ee3fc18e4afa07';
const apiWeather =  `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;

const data = {
	temperature: 20,
	weatherState: SUN,
	humidity: 10,
	wind:'10 m/s',
};
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
	constructor(){
		super();
		this.state = {
			city: 'Villahermosa',
			data: data
	};
}
	getWeatherState = weather =>{
		return SUN;
	}
	getData = (weather_data) => {

		const{ humidity,temp }= weather_data.main;
		const{ speed } = weather_data.wind;
		const weatherState = this.getWeatherState(this.weather);

		const data = {
			humidity,
			temperature: temp,
			weatherState,
			wind: `${ speed } m/s`,
		}
		return data;
	}

	handleUpdateClick = () => {
	fetch(apiWeather).then(data => {
		console.log(data);
		return data.json();
		debugger;
	}).then(weather_data => {
		const data = this.getData(weather_data);
		this.setState({data});

		console.log(weather_data);
	});
		console.log("actualizado");
		}
	render = () => {
		const {city,data}=this.state;
		return(
	    <div className="weatherLocationCont">
	        <Location city={city}></Location>
	        <WeatherData data={data}></WeatherData>
	        <br/>
	        <button onClick={this.handleUpdateClick}>Actualizar</button>
	    </div>);
	};
};
export default WeatherLocation;