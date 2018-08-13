import React, { Component } from 'react';
import EventList from "./EventList";
import EventForm from "./EventForm/EventForm";
import cuid from "cuid";
import { connect } from "react-redux";

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
		const updatedEvents = [...this.state.events, newevent];
		this.setState({
			events: updatedEvents,
			isOpen: false
		})
	}

	handleOpenEvent = (event) => () =>{
		this.setState({
			selectedEvent: event,
			isOpen: true
		})
	}

	handleUpdateEvent = (updatedEvent) =>{
		const _updatedevent = this.state.events.map((event) =>{
			if(event.id === updatedEvent.id){
				return Object.assign({}, updatedEvent)
			} else{
				return event;
			}
		});

		this.setState({
			events: _updatedevent,
			isOpen: false,
			selectedEvent: null
		})
	}

	handleDeleteEvent = (id) => () =>{
		const updatedEvents = this.state.events.filter(event => event.id !== id);
		this.setState({events: updatedEvents});
	}

	render() {
		const { selectedEvent } = this.state;
		const { events } = this.props;

		return (
			<div className="row">
				<div className="col-md-8">
					<EventList updateEvent={this.handleUpdateEvent} deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={events}/>
				</div>

				<div className="col-md-4">
					<div>
						<span
							onClick={this.handleFormOpen}
							className="newEvent_icon_btn">
							<i className={this.state.isOpen ? "fas fa-minus" : "fas fa-plus"}></i>
						</span>

						{ this.state.isOpen &&
							<div className="well">
								<EventForm selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} />
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>({
	events: state.events
});



export defaultconnect(mapStateToProps)(EventDashboard);