import React, { Component } from 'react';
import NavBar from "./Layout/Navigation/Navbar";
import EventDashboard from "./Event/EventsDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    	<div>
    		<NavBar />
	      <div className="container">
          <main> 
	         <EventDashboard />
          </main>
	      </div>
	    </div>
    );
  }
}

export default App;
