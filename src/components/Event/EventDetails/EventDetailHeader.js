import React from 'react';

const EventDetailHeader = (props) => {
  return (
  	<div class="panel panel-default" id="event_details">
		  <div class="panel-body">
		    <img src="/assets/images/drinks.jpg" alt="Drinks" />
		    <div className="event-meta-box">
					<h3>Event Title</h3>
					<p>Event Date: </p>
					<p>Hosted By: <b>Janice Dickinson</b></p>
		    </div>
		  </div>
		  <div class="panel-footer clearfix">
				<span className="btn btn-info btn-md">Join This Event</span>
				<span className="btn btn-default btn-md">Cancel My Place</span>
				<span className="pull-right btn btn-warning btn-md">Manage Event</span>
		  </div>
		</div>
  );
};

export default EventDetailHeader;
