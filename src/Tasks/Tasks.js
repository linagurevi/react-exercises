import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {

	constructor() {
		super();
		this.inputValue = React.createRef();
		this.state={
			tasks: []
		}
	}

	addTask(e) {
		e.preventDefault();
		this.setState({
			tasks: [...this.state.tasks, this.inputValue.current.value]
		});
		e.target.reset();
}

	render() {
		return (
			<div className="Tasks">
				<h3>Tasks:</h3>
				<p>Make a Todo list (add only):</p>
				<form onSubmit={this.addTask.bind(this)}>
					<input ref={this.inputValue} placeholder="Your task..."/> 
					<button type="submit">Add task</button>
					<ul>
						{this.state.tasks.map((task, index) => {
							return <li key={index}>{task}</li>
						})}
					</ul>
				</form>
			
			</div>
		)
	}
}

export default Tasks;
