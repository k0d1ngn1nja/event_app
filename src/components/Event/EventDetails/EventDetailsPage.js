import React from 'react';
import { connect } from "react-redux";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailChat from "./EventDetailChat";
import EventDetailSidebar from "./EventDetailSidebar";

const EventDetailsPage = (props) => {
	const {event} = props;

  return (
		<div className="row">
			<div className="col-md-8 col-offset-md-1">
				<EventDetailHeader event={event} />
				<EventDetailInfo event={event} />
				<EventDetailChat />
			</div>

			<div className="col-md-3">
				<EventDetailSidebar attendees={event.attendees} />
			</div>
		</div>      
  );
};

const mapStateToProps = (state, myProps) =>{
	const eventId = myProps.match.params.id;
	let event = {};

	if(eventId && state.events.length > 0){
		event = state.events.filter((event) => event.id === eventId)[0];
	}

	return {
		event
	}
}

export default connect(mapStateToProps)(EventDetailsPage);