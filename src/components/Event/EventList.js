import React from 'react';
import EventListItem from "./EventListItem";

const EventList = (props) =>{
	const { events, onEventOpen, deleteEvent } = props;
	
	const eventItem = events.map(event =>{
		return <EventListItem key={event.id} event={event} onEventOpen={onEventOpen} deleteEvent={deleteEvent} />
	});

	return (
		<div>
			{ eventItem }
		</div>
	);
}

export default EventList;
