import React from 'react';
import EventListItem from "./EventListItem";

const EventList = (props) =>{
	const { events, deleteEvent } = props;
	
	const eventItem = events.map(event =>{
		return <EventListItem key={event.id} event={event} deleteEvent={deleteEvent} />
	});

	return (
		<div>
			{ eventItem }
		</div>
	);
}

export default EventList;
