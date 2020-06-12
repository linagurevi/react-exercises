import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			input: ''
		};
	}
	
	searchString(e){
		this.setState({
			input: e.target.value
		})
	}

	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onKeyUp={this.searchString.bind(this)} />
				<ul>
					{this.state.items.filter(item => item.toLowerCase().includes(this.state.input.toLowerCase()))
					.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Filter;
