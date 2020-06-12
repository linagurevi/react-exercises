import React, { Component } from 'react';
import './Remover.scss';

class Remover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Abby Mecoil',
				'Toni Zuck',
				'Peter Hanshfield',
				'Rose Tobernak'
			],
			removeRequest: false
		};
	}

	remove(student) {
		this.setState({
			students: this.state.students.filter(item => item !== student)
		})
	}

	render() {
		return (
			<div className="Remover">
				<h3>Remover:</h3>
				<p>Add a delete button for each student to remove it from the list.</p>
				<ul className="Remover__list">
					{this.state.students.map((student, index) => {
						return <li key={index}>{student}
							<button onClick={this.remove.bind(this, student)}>X</button>
							</li>
							
					})}
				</ul>
			</div>
		)
	}
}

export default Remover;
