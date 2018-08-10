import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component{
  render(){
  	return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <NavLink className="navbar-brand" to="/">247Events</NavLink>
			    </div>

			    <div id="navbar" className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
			        <li><NavLink activeClassName="active" to="/">Home <i className="fas fa-home"></i></NavLink></li>
			        <li><Link to="/events">Events</Link></li>
			        <li><Link to="/events/new">Add Event <i className="fas fa-plus"></i></Link></li>
			        <li><Link to="/users">Users <i className="fas fa-users"></i></Link></li>
			        <li><Link to="/settings">Settings <i className="fas fa-cogs"></i></Link></li>
			      </ul>
			    </div>
			  </div>
			</nav>
  	);
  }
};

export default NavBar;
