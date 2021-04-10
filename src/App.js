import React from 'react';
import { BrowserRouter, Switch, NavLink } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Profile from './components/Profile/profile';
import CreateTask from './components/Tasks/createTask';
import ViewTask from './components/Tasks/viewTask';
import SubmitTask from './components/Tasks/submitTask'
import ReviewTask from './components/Tasks/reviewTask'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/signup">Signup</NavLink>
            <NavLink activeClassName="active" to="/profile">Profile</NavLink>
            <NavLink activeClassName="active" to="/tasks">Tasks</NavLink>
          </div>
          <div className="content">
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/signup" component={Signup} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute exact path="/tasks/new" component={CreateTask} />
              <PrivateRoute exact path="/tasks/:id" component={ViewTask} />
              <PrivateRoute exact path="/tasks/:id/edit" component={SubmitTask} />
              <PrivateRoute exact path="/tasks/:id/review" component={ReviewTask} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;