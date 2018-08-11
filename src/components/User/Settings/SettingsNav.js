import React from 'react';
import { NavLink, Link } from "react-router-dom";

const SettingsNav = (props) => {
  return (
  	<div>
	  	<div className="list-group">
	  		<a className="list-group-item h4"> <i className="fas fa-user"></i> Profile</a>
				<NavLink to="/settings/basic" className="list-group-item">Basic</NavLink>
				<NavLink to="/settings/about" className="list-group-item">About Me</NavLink>
				<NavLink to="/settings/photos" className="list-group-item">My Photos</NavLink>
	  	</div>

	  	<div className="list-group">
	  		<a className="list-group-item h4"> <i className="fas fa-cogs"></i> Account</a>
				<Link to="#" className="list-group-item">My Account</Link>
	  	</div>
  	</div>
  );
};

export default SettingsNav;
