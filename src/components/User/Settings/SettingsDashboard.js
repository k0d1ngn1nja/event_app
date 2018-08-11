import React from 'react';
import SettingsNav from "./SettingsNav";
import {Switch, Route, Redirect} from "react-router-dom";
import AboutPage from "../Account/About";
import PhotoPage from "../Account/Photos";
import AccountPage from "../Account/Account";
import BasicPage from "../Account/UserProfile";

const SettingsDashboard = (props) => {
  return (
  	<div className="row">
			<div className="col-md-9">
				<Switch>
					<Redirect exact from="/settings" to="/settings/basic" />
					<Route path="/settings/basic" component={BasicPage}/>
					<Route path="/settings/about" component={AboutPage}/>
					<Route path="/settings/photos" component={PhotoPage}/>
					<Route path="/settings/account" component={AccountPage}/>
				</Switch>
			</div>

			<div className="col-md-3">
				<SettingsNav />
			</div>
  	</div>   
  );
};

export default SettingsDashboard;
