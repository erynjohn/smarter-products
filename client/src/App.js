import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Navigation from './Navigation';
import Mirror from './Mirror';
import Face from './Face';

class App extends Component {
  render() {
    return (

      <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={withAuth(Dashboard)} />
          <Route path="/login" component={Login} />
          <Route path="/mirror" component={withAuth(Mirror)} />
          <Route path="/face" component={Face} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
