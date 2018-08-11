import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./Layout/Navigation/Navbar";
import EventDashboard from "./Event/EventsDashboard";
import EventForm from "./Event/EventForm/EventForm";
import EventDetails from "./Event/EventDetails";
import UsersDashboard from "./User/UsersDashboard";
import UserProfile from "./User/Account/UserProfile";
import Home from "./Home/Homepage";
import SettingsDashboard from "./User/Settings/SettingsDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Route path="/(.+)" render={() =>(
          <div>
            <NavBar />
            <div className="container">
              <main>
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/events/new" component={EventForm} />
                  <Route path="/events/:id" component={EventDetails} />
                  <Route path="/users" component={UsersDashboard} />
                  <Route path="/users/:id" component={UserProfile} />
                  <Route path="/settings" component={SettingsDashboard} />
                </Switch>
              </main>
            </div>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
