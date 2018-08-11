import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import NavList from "./NavList";

class NavBar extends Component{
	state = {
		authenticated: false
	}

	handleSignIn = () =>{
		this.setState({
			authenticated: true
		});
	}

	handleSignOut = () =>{
		this.setState({
			authenticated: false
		});
		this.props.history.push("/")
	}

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
			      <NavList isAuthenticated={this.state.authenticated} signIn={this.handleSignIn} signOut={this.handleSignOut}/>
			    </div>
			  </div>
			</nav>
  	);
  }
};

export default NavBar;
