import React, { Component } from 'react';
import EventList from "./EventList";
import EventForm from "./EventForm";

class EventDashboard extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<EventList />
				</div>

				<div className="col-md-4">
					<a href="#" className="btn btn-success">Create Event</a>
					<EventForm />
				</div>
			</div>
		);
	}
}

export default EventDashboard;