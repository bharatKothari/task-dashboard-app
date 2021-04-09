import React from 'react';
import { BrowserRouter, Switch, NavLink } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Profile from './components/Profile/userProfile';
import CreateTask from './components/Tasks/createTask';
import ViewTask from './components/Tasks/viewTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/signup">Signup</NavLink>
            <NavLink activeClassName="active" to="/profile">Profile</NavLink>
            <NavLink exact activeClassName="active" to="/tasks/new">New Task</NavLink>
            <NavLink exact activeClassName="active" to="/tasks/:id">Tasks</NavLink>
          </div>
          <div className="content">
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/signup" component={Signup} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute exact path="/tasks/new" component={CreateTask} />
              <PrivateRoute exact path="/tasks/:id" component={ViewTask} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;