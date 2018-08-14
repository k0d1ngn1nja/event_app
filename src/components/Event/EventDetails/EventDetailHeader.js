import React from 'react';

const EventDetailHeader = (props) => {
	const { event } = props;

  return (
  	<div class="panel panel-default" id="event_details">
		  <div class="panel-body">
		    <img src={`/assets/images/${event.category}.jpg`} alt="Drinks" />
		    <div className="event-meta-box">
					<h3>{event.title}</h3>
					<p>Event Date: {event.date}</p>
					<p>Hosted By: <b>{event.hostedBy}</b></p>
		    </div>
		  </div>
		  <div class="panel-footer clearfix">
				<span className="btn btn-primary btn-md">Join This Event</span>
				<span className="btn btn-default btn-md">Cancel My Place</span>
				<span className="pull-right btn btn-warning btn-md">Manage Event</span>
		  </div>
		</div>
  );
};

export default EventDetailHeader;
