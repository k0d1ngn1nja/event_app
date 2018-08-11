import React from "react";
import { NavLink } from "react-router-dom";

const Login = (props) =>{
	return(
		<React.Fragment>
			<li className="dropdown">
	      <NavLink to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span class="caret"></span></NavLink>
	      <ul class="dropdown-menu">
	        <li><NavLink to="/events/new">Create Event <i className="fas fa-plus"></i></NavLink></li>
	        <li><NavLink to="/">My Events <i className="fas fa-calendar"></i></NavLink></li>
	        <li><NavLink to="/">My Network <i className="fas fa-users"></i></NavLink></li>
	        <li><NavLink to="/">My Profile <i className="fas fa-user"></i></NavLink></li>
	        <li><NavLink to="/users">Users <i className="fas fa-users"></i></NavLink></li>
	        <li><NavLink to="/settings">Settings <i className="fas fa-cogs"></i></NavLink></li>
	        <li role="separator" class="divider"></li>
	        <li><a onClick={props.signOut}>Logout <i className="fas fa-power-off"></i></a></li>
	      </ul>
	    </li>
	  </React.Fragment>
	);
};

export default Login;