import React, { Component } from 'react';
import './LastClick.scss';

class LastClick extends Component {

	constructor() {
		super();
		this.state = {
			lastClicked: null
		}
	}
	
	changeButton(num) {
		this.setState({
			lastClicked: num
		})
	}

	render() {
		return (
			<div className="LastClick">
				<p>
					There are <b>3</b> buttons.<br />
					Make the box show the number of the last clicked button.
				</p>
				<div className="LastClick__buttons">
					<button onClick={this.changeButton.bind(this, 1)}>1</button>
					<button onClick={this.changeButton.bind(this, 2)}>2</button>
					<button onClick={this.changeButton.bind(this, 3)}>3</button>
				</div>
				<div className="LastClick__box">
					{this.state.lastClicked}
				</div>
			</div>
		)
	}
}

export default LastClick;
