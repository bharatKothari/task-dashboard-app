import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

import Login from './Login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
          </div>
          <div className="content">
            <Switch>
              <PublicRoute path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;