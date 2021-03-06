import React from 'react';
import { Link } from "react-router-dom";
import EventPatrons from "./EventPatronsList";

const EventListItem = (props) =>{
	const { event, deleteEvent } = props;
	
	return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<div className="row">
					<div className="col-sm-2">
						<a href="">
							<img src={event.hostPhotoURL} alt="Avatar" className="img-circle thumbnailImg"/>
						</a>
					</div>
					<div className="col-sm-10">
						<h3 className="panel-title">{event.title}</h3>
						<p><b>Hosted By:</b> {event.hostedBy}</p><hr/>

						<div className="panel-meta">
							<p>
								<span className="event-time">
									<i className="fas fa-clock"></i>Today, {event.date}
								</span>
								<span className="event-location">
								 	<i className="fas fa-map"></i> {event.city}
								</span> 
								<span><a onClick={() => deleteEvent(event.id)}><i className="fas fa-trash"></i></a></span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="panel-body">
				<ul className="list-inline">
					{event.attendees && event.attendees.map((guest) =>{
						return <EventPatrons key={guest.id} guest={guest} />
					})}
				</ul>
			</div>

			<div className="panel-footer clearfix">
				<span>{event.description}</span>
				<span className="pull-right">
					<Link to={"/event/"+event.id} className="btn btn-primary btn-sm">VIEW</Link>
				</span>
			</div>
		</div>
	);
}

export default EventListItem;