import React from 'react';


export default class Application extends React.Component {

	constructor(props) {
		super(props);
		var name = props.name;
		var app = props.app;
        var description = props.description;
        var deadline = props.deadline;
		this.state = {app: app, description: description, deadline: deadline, name: name,};
		
		this.onAppChange = this.onAppChange.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		this.onDeadlineChange = this.onDeadlineChange.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	onDescriptionChange(e) {
        var val = e.target.value;
        this.setState({description: val});
    }
	onNameChange(e) {
        var val = e.target.value;
        this.setState({name: val});
    }
	onAppChange(e) {
        var val = e.target.value;
        this.setState({app: val});
    }
	onDeadlineChange(e) {
        var val = e.target.value;
        this.setState({Deadline: val});
    }
	handleSubmit(e) {
        e.preventDefault();
		alert("Заявка:" + this.state.app + " Сотрудник: " + this.state.name + " Описание: " + this.state.description + " Deadline:" + this.state.deadline);
    }
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>Заявка:</label><br />
						<input type="text" value={this.state.app} onChange={this.onAppChange}/>
					</p>
					<p>
						<label>Описание:</label><br />
						<input type="text" value={this.state.description} onChange={this.onDescriptionChange}/>
					</p>
					<p>
						<label>Deadline</label><br />
						<input type="number" value={this.state.deadline} onChange={this.onDeadlineChange}/>
					</p>
					<p>
						<label>Сотрудник:</label><br />
						<input type="text" value={this.state.name} onChange={this.onNameChange}/>
					</p>
					<input type="submit" value="Отправить" />
				</form>
			</div>
		)
	}
}
