import React, { Component } from 'react';

class EventForm extends Component {
	render() {

		return (
			<div>
				<h3 className="page-header">Create Event</h3>
				<form>
				  <div className="form-group">
				    <label htmlFor="event_title">Event Title</label>
				    <input type="text" className="form-control" id="event_title" placeholder="Name of Event" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="event_date">Event Date</label>
				    <input type="date" className="form-control" id="event_date" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="event_city">City</label>
				    <input type="text" className="form-control" id="event_city" placeholder="City event is taking place" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="event_location">Venue</label>
				    <input type="text" className="form-control" id="event_location" placeholder="Venue of the event" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="event_host">Hosted By</label>
				    <input type="text" className="form-control" id="event_host" placeholder="Event hosted by..." />
				  </div>
				  <button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}

export default EventForm;