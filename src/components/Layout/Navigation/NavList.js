import React from 'react';
import LoggedIn from "../../Auth/Login";
import LoggedOut from "../../Auth/Logout";
import { NavLink } from "react-router-dom";

const NavList = (props) => {
	const { isAuthenticated, signIn, signOut} = props;

  return (
  	<ul className="nav navbar-nav navbar-right">
			<li><NavLink to="/">Home <i className="fas fa-home"></i></NavLink></li>
	    <li><NavLink to="/events">Events</NavLink></li>
	    { isAuthenticated ? <LoggedIn signOut={signOut}/> : <LoggedOut signIn={signIn}/> }
  	</ul>
  );
};

export default NavList;