import React, { Component } from 'react';
import EventList from "./EventList";
import EventForm from "./EventForm/EventForm";
import cuid from "cuid";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { createEventAction, updateEventAction, deleteEventAction } from "../../Actions/Events/EventActions";

class EventDashboard extends Component {
	state = {
		isOpen: false,
		selectedEvent: null
	}

	handleFormOpen = () =>{
		this.setState({isOpen: !this.state.isOpen, selectedEvent: null})
	}

	handleCreateEvent = (newevent) =>{
		newevent.id = cuid();
		newevent.hostPhotoURL = "/assets/images/user.png";
		this.props.createEventAction(newevent);
		this.setState({isOpen: false});
	}

	handleOpenEvent = (event) =>{
		this.setState({
			selectedEvent: event,
			isOpen: true
		})
	}

	handleUpdateEvent = (updatedEvent) =>{
		this.props.updateEventAction(updatedEvent);

		this.setState({
			isOpen: false,
			selectedEvent: null
		});
	}

	handleDeleteEvent = (id) =>{
		this.props.deleteEventAction(id);
	}

	render() {
		const { selectedEvent } = this.state;
		const { events } = this.props;
		
		return (
			<div className="row">
				<div className="col-md-8">
					<EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={events}/>
				</div>
				<div className="col-md-4">
					<div>
						<Link
							to="/event/new"
							className="newEvent_icon_btn">
							<i className="fas fa-plus"></i>
						</Link>

						{ this.state.isOpen &&
							<div className="well">
								<EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} />
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state =>({
	events: state.events
});

const actions = { createEventAction, updateEventAction, deleteEventAction };

export default connect(mapStateToProps, actions)(EventDashboard);