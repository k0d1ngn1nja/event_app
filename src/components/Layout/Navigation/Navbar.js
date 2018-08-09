import React, { Component } from 'react';

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
			      <a className="navbar-brand" href="/">247Events</a>
			    </div>
			    <div id="navbar" className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
			        <li className="active"><a href="/">Home <i className="fas fa-home"></i></a></li>
			        <li><a href="#">Events</a></li>
			        <li><a href="#">Add Event <i className="fas fa-plus"></i></a></li>
			        <li><a href="#">Login</a></li>
			        <li><a href="#">Signout</a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
  	);
  }
};

export default NavBar;
