import React from 'react';
import LoggedIn from "../../Auth/Login";
import LoggedOut from "../../Auth/Logout";
import { NavLink, Link } from "react-router-dom";

const NavList = (props) => {
	const { isAuthenticated, signIn, signOut} = props;

  return (
  	<ul className="nav navbar-nav navbar-right">
			<li><Link to="/">Home <i className="fas fa-home"></i></Link></li>
	    <li><Link to="/events">Events</Link></li>
	    <li><Link to="/users">Users <i className="fas fa-users"></i></Link></li>
	    
	    { isAuthenticated ? <LoggedIn signOut={signOut}/> : <LoggedOut signIn={signIn}/> }
  	</ul>
  );
};

export default NavList;