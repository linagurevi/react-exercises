import React, { Component } from 'react';
import './President.scss';

class President extends Component {

	constructor(props) {
		super(props);
		this.state = {
			presidentClicked: undefined,
			presidents: [
				{
					firstName: 'Bill',
					lastName: 'Clinton',
					image: 'bill.jpeg'
				},
				{
					firstName: 'George',
					lastName: 'Bush',
					image: 'george.jpeg'
				},
				{
					firstName: 'Barack',
					lastName: 'Obama',
					image: 'barack.jpeg'
				}
			]
		};
	}

	showName(president) {
		// console.log(president);
		this.setState({
			presidentClicked: `${president.firstName} ${president.lastName}`
		});
		
	}

	render() {
		return (
			<div className="President">
				<p>When clicking on a president, display his <strong>full</strong> name below.</p>
				<div className="president-list">
					{this.state.presidents.map((president, index) => {
						return <img key={index} src={require('./images/' + president.image)} alt="" onClick={this.showName.bind(this, president)} role="button" />
					})}
				</div>
				<div>
				<strong>You selected: </strong> {this.state.presidentClicked !== undefined ? this.state.presidentClicked : "Full name here"} 
				</div>
			</div>
		)
	}
}

export default President;
