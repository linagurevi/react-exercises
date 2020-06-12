import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
	
	constructor() {
		super();
		this.state ={
			hottestDay: null,
			coldestDay: null
			// forecast: []
		};
	}

	componentDidMount() {
		fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
		.then(data => data.json())
		.then(forecast => this.setState({
			hottestDay: this.findHottestDay(forecast),
			coldestDay: this.findColdestDay(forecast)
			// forecast: forecast)
		}));
	}

	findHottestDay(forecast) {
		let highestTemp = forecast[0];
		forecast.forEach((dayofWeek, index) => {
			if(dayofWeek.temperature > highestTemp.temperature) {
				highestTemp = dayofWeek;
				console.log(highestTemp);
			}
		});
		return highestTemp.day;
	}

	findColdestDay(forecast) {
		let lowestTemp = forecast[0];
		forecast.forEach(dayOfWeek =>  {
			if(dayOfWeek.temperature < lowestTemp.temperature) {
				lowestTemp = dayOfWeek;
			}
		});
		return lowestTemp.day;
	}
	

	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://my-json-server.typicode.com/evyros/react-weather-app/forecast</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is: </strong>
					{this.state.hottestDay}
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is: </strong>
					{this.state.coldestDay}
				</div>
			</div>
		)
	}
}

export default Weather;
