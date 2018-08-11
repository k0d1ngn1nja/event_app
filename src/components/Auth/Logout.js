import React from "react";
import { Link } from "react-router-dom";

const Logout = (props) =>{
	return(
		<React.Fragment>
			<li><a onClick={props.signIn}>Login <i className="fas fa-keys"></i></a></li>
	    <li><Link to="/">Register <i className="fas fa-pencil"></i></Link></li>
	  </React.Fragment>
	);
};

export default Logout;