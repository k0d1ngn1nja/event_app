import React, { Component } from 'react';
import EventList from "./EventList";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deleteEventAction } from "../../Actions/Events/EventActions";

class EventDashboard extends Component {
	handleDeleteEvent = (id) =>{
		this.props.deleteEventAction(id);
	}

	render() {
		const { events } = this.props;
		
		return (
			<div className="row">
				<div className="col-md-8">
					<EventList deleteEvent={this.handleDeleteEvent} events={events}/>
				</div>
				<div className="col-md-4">					
					<Link to="/event/new" className="newEvent_icon_btn">
						<i className="fas fa-plus"></i>
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state =>({
	events: state.events
});

const actions = { deleteEventAction };

export default connect(mapStateToProps, actions)(EventDashboard);