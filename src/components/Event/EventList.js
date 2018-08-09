import React, { Component } from 'react';
import EventListItem from "./EventListItem";

class EventList extends Component {
	render() {
		return (
			<div>
				<h1 className="page-header">Event List</h1>
				<EventListItem />
				<EventListItem />
				<EventListItem />
			</div>
		);
	}
}

export default EventList;
