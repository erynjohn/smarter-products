import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Mirror from './Mirror';
import MirrorClock from './Clock';
import ImageInput from './views/ImageInput';
import VideoInput from './views/VideoInput';
import Detection from './views/Detection';
import Weather from './weather';

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
          <Route path="/clock" component={MirrorClock} />
          <Route path="/photo" component={ImageInput} />
            <Route path="/camera" component={VideoInput} />
            <Route path="/detection" component={Detection} />
            <Route path="/weather" component={Weather} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
