import React, { Component } from 'react';
import EventPatrons from "./EventPatronsList";

class EventListItem extends Component {
	render() {
		const { event } = this.props;

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<div className="row">
						<div className="col-sm-2">
							<a href="#">
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
					<span className="pull-right"><a href="#" className="btn btn-primary btn-sm">VIEW</a></span>
				</div>
			</div>
		);
	}
}

export default EventListItem;