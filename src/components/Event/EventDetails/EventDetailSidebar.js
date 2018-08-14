import React from 'react';

const EventDetailSidebar = (props) => {
	const { attendees } = props;
	const isHost = false;
	
  return (
  	<div className="panel panel-info">
			<div className="panel-heading"><h4 className="no-margin">{attendees && attendees.length} {attendees && attendees.length === 1 ? "Person" : "People"} Going</h4></div>
			<ul class="list-group">
				{	
					attendees && attendees.map((guest) =>(
						<li key={guest.id} class="list-group-item">
							<img src={guest.photoURL} alt="user" className="img-responsive sm-avatar"/>
							<a>{guest.name}</a> {isHost && (<i className="fas fa-couch">Host</i>)}
						</li>
					))
				}
			</ul>
  	</div>
  );
};

export default EventDetailSidebar;
