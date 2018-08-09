import React, { Component } from 'react';

class EventPatronsList extends Component {
	render() {
		const guest = this.props;

		return (
			<li>
				<a href="#">
					<img src={guest.guest.photoURL} alt="Avatar" className="img-circle" style={{width: "40px", height: "40px"}}/>
				</a>
			</li>
		);
	}
};

export default EventPatronsList;