import React, { Component } from 'react';
import NavBar from "./Layout/Navigation/Navbar";
import EventDashboard from "./Event/events_dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    	<div>
    		<NavBar />
	      <div className="container">
	        <EventDashboard />
	      </div>
	    </div>
    );
  }
}

export default App;
