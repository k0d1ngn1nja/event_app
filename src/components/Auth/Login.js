import React from "react";
import { NavLink, Link } from "react-router-dom";

const Login = (props) =>{

	return(
		<React.Fragment>
			<li className="dropdown">
	      <Link to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span class="caret"></span></Link>
	      <ul class="dropdown-menu">
	        <li><Link to="/events/new">Create Event <i className="fas fa-plus"></i></Link></li>
	        <li><Link to="/">My Events <i className="fas fa-calendar"></i></Link></li>
	        <li><Link to="/">My Network <i className="fas fa-users"></i></Link></li>
	        <li><Link to="/">My Profile <i className="fas fa-user"></i></Link></li>
	        <li><Link to="/settings">Settings <i className="fas fa-cogs"></i></Link></li>
	        <li role="separator" class="divider"></li>
	        <li><a onClick={props.signOut}>Logout <i className="fas fa-power-off"></i></a></li>
	      </ul>
	    </li>
	  </React.Fragment>
	);
};

export default Login;