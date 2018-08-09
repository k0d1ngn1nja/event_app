import React, { Component } from 'react';

class NavBar extends Component{
  render(){
  	return(
			<nav class="navbar navbar-inverse navbar-fixed-top">
			  <div class="container">
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" href="/">247Events</a>
			    </div>
			    <div id="navbar" class="collapse navbar-collapse">
			      <ul class="nav navbar-nav navbar-right">
			        <li class="active"><a href="/">Home <i className="fas fa-home"></i></a></li>
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
