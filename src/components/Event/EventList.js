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
				{ eventItem }
			</div>
		);
	}
}

export default EventList;
