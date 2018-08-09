import React, { Component } from 'react';
import EventDashboard from "./Event/events_dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <EventDashboard />
      </div>
    );
  }
}

export default App;
