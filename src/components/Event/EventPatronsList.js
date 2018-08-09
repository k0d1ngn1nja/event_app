import React, { Component } from 'react';

class EventPatronsList extends Component {
	render() {
		return (
			<li>
				<a href="#">
					<img src="https://randomuser.me/api/portraits/men/84.jpg" alt="Avatar" className="img-circle" style={{width: "40px", height: "40px"}}/>
				</a>
			</li>
		);
	}
};

export default EventPatronsList;