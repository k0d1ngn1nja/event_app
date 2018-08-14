import React from 'react';

const EventDetailInfo = (props) => {
	const { event } = props;

  return (
  	<div className="panel-panel-default mtb-5">
	  	<ul class="list-group">
			  <li class="list-group-item">
			  	<div className="row">
			  		<div className="col-sm-1">
							<span className="fas fa-info-circle fa-2x"></span>
			  		</div>
						<div className="col-sm-11">
							<p>{event.description}</p>
						</div>
			  	</div>
			  </li>

			  <li class="list-group-item">
			  	<div className="row">
			  		<div className="col-sm-1">
							<span className="fas fa-calendar fa-2x"></span>
			  		</div>
						<div className="col-sm-11">
							<p>{event.date}, at <b>6:40pm</b></p>
						</div>
			  	</div>
			  </li>

			  <li class="list-group-item">
			  	<div className="row">
			  		<div className="col-sm-1">
							<span className="fas fa-map-pin fa-2x"></span>
			  		</div>
						<div className="col-sm-11">
							<p>{event.venue}... <span className="pull-right btn btn-primary btn-md">Show Map</span></p>
						</div>
			  	</div>
			  </li>
			</ul>
		</div>
  );
};

export default EventDetailInfo;
