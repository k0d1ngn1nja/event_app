import React, { Component } from 'react';
import InputField from "./InputField";

const initialize_data = { title: "", date: "", venue: "", city: "", hostedBy: ""};

class EventForm extends Component {
	state = {
		event: initialize_data
	};
	
	componentDidMount(){
		if(this.props.selectedEvent !== null){
			this.setState({event: this.props.selectedEvent})
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.selectedEvent !== this.props.selectedEvent){
			this.setState({
				event: nextProps.selectedEvent || initialize_data
			})
		}
	}

	onInputChange = (e) =>{
		this.setState({
			event:{...this.state.event, [e.target.name]: e.target.value}
		});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		if(this.state.event.id){
			this.props.updateEvent(this.state.event);
		} else{
			this.props.createEvent(this.state.event);
		}
	}

	render() {
		return (
			<div>
				<h3 className="page-header">Create Event</h3>

				<form onSubmit={this.onFormSubmit}>
					<InputField
						label="Event Title"
						onChange={this.onInputChange}
						placeholder="Enter Event Name"
						name="title"
						value={this.state.event.title}
					/>

					<InputField
						type="date"
						label="Event Date"
						onChange={this.onInputChange}
						placeholder="Select Event Date"
						name="date"
						value={this.state.event.date}
					/>
				  
				  <InputField
				  	label="City"
						onChange={this.onInputChange}
						placeholder="Enter event city name..."
						name="city"
						value={this.state.event.city}
					/>
					
					<InputField
						label="Venue"
						onChange={this.onInputChange}
						placeholder="Enter Event Venue"
						name="venue"
						value={this.state.event.venue}
					/>

				  <InputField
				  	label="Hosted By"
						onChange={this.onInputChange}
						placeholder="Enter Event Host Name"
						name="hostedBy"
						value={this.state.event.hostedBy}
					/>

				  <button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}

export default EventForm;