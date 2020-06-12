import React, { Component } from 'react';
import './RandomNumber.scss';

class RandomNumber extends Component {

	constructor() {
		super();
		this.state = {
			num: 0,
			showNum: false
		};
	}



	generateNum() {
		this.setState({
			num: Math.floor(Math.random() * 1001),
			showNum: true
		});
	}

	render() {
		return (
			<div className="RandomNumber">
				<p className="RandomNumber__explanation">
					When clicking on the button, make a random number (between 1-100) to appear in the box.
				</p>

				<button onClick={this.generateNum.bind(this)}>Generate number!</button>
				<div className="box">
				{this.state.showNum ? <p>{this.state.num}</p> : null}

				</div>
			</div>
		)
	}
}

export default RandomNumber;
