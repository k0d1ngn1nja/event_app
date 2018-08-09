import React, { Component } from 'react';
import EventList from "./EventList";

class EventDashboard extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<EventList />
				</div>

				<div className="col-md-3">
					<h1>Right Side</h1>
				</div>
			</div>
		);
	}
}

export default EventDashboard;