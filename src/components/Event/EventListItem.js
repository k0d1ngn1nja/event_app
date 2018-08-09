import React, { Component } from 'react';
import EventPatrons from "./EventPatronsList";

class EventListItem extends Component {
	render() {

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<div className="row">
						<div className="col-sm-2">
							<a href="#">
								<img src="https://randomuser.me/api/portraits/women/84.jpg" alt="Avatar" className="img-circle thumbnailImg"/>
							</a>
						</div>
						<div className="col-sm-10">
							<h3 className="panel-title">Main Event One</h3>
							<p><b>Hosted By:</b> Jennifer Lopez</p><hr/>

							<div className="panel-meta">
								<p>
									<span className="event-time">
										<i className="fas fa-clock"></i>Today, 1:00pm
									</span>
									<span className="event-location">
									 	<i className="fas fa-map"></i> Toronto
									 </span> 
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="panel-body">
					<ul className="list-inline">
						<EventPatrons />
						<EventPatrons />
						<EventPatrons />
						<EventPatrons />
						<EventPatrons />
					</ul>
				</div>

				<div className="panel-footer clearfix">
					<span>Join me for a relaxed lunch in this great pub in Paddington with a delicious menu.</span>
					<span className="pull-right"><a href="#" className="btn btn-primary btn-sm">VIEW</a></span>
				</div>
			</div>
		);
	}
}

export default EventListItem;