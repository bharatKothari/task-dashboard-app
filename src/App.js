import React from 'react';
import { BrowserRouter, Switch, NavLink } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Profile from './components/Profile/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/signup">Signup</NavLink>
            <NavLink activeClassName="active" to="/profile">Profile</NavLink>
          </div>
          <div className="content">
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/signup" component={Signup} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;