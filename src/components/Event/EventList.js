import React, { Component } from 'react';
import EventListItem from "./EventListItem";

class EventList extends Component{
	render() {
		const { events } = this.props;
		
		const eventItem = events.map(event =>{
			return <EventListItem key={event.id} event={event}/>
		});

		return (
			<div>
				<h1 className="page-header">Event List</h1>
				{ eventItem }
			</div>
		);
	}
}

export default EventList;
