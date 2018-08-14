import cuid from "cuid";
import React, { Component } from 'react';
import InputField from "./InputField";
import { connect } from "react-redux";
import { createEventAction, updateEventAction } from "../../../Actions/Events/EventActions";

const actions = { createEventAction, updateEventAction };

class EventForm extends Component {
	state = {
		event: Object.assign({}, this.props.event)
	};

	onInputChange = (e) =>{
		this.setState({
			event:{...this.state.event, [e.target.name]: e.target.value}
		});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		if(this.state.event.id){
			this.props.updateEventAction(this.state.event);
			this.props.history.goBack();
		} else{
			const newEvent = {...this.state.event, id: cuid(), hostPhotoURL: "/assets/images/user.png"};
			this.props.createEventAction(newEvent);
			this.props.history.push("/events");
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-9 col-md-offset-1">
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
					  <button onClick={this.props.history.goBack} type="button" className="btn btn-danger">Cancel</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, myProps) =>{
	const eventId = myProps.match.params.id;
	let event = { title: "", date: "", venue: "", city: "", hostedBy: ""};

	if(eventId && state.events.length > 0){
		event = state.events.filter((event) => event.id === eventId)[0];
	}

	return{
		event
	}
};

export default connect(mapStateToProps, actions)(EventForm);