import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {

	constructor() {
		super();
		this.state = {
			containsYay: false
		};
	}

	validateYay(e){

		if (e.target.value.indexOf("yay") > -1) {
			this.setState({
				containsYay: true
			});
		};	
	}


	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input onKeyUp={this.validateYay.bind(this)} type="text" className="text-box" style={ this.state.containsYay ? {backgroundColor: "green"} : {}} />
			</div>
		)
	}
}

export default YayValidator;
