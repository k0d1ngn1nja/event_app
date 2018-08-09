import React, { Component } from 'react';

class EventDashboard extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<h1>Left Side</h1>
				</div>

				<div className="col-md-3">
					<h1>Right Side</h1>
				</div>
			</div>
		);
	}
}

export default EventDashboard;