import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Login from './Login';
import Mirror from './Components/Mirror';
import MirrorClock from './Components/Clock';
import ImageInput from './views/ImageInput';
import VideoInput from './views/VideoInput';
import Detection from './views/Detection';
import Weather from './Components/WeatherMap';
import WeatherForecast from './Components/WeatherForecast';

class App extends Component {
  render() {
    return (

      <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={withAuth(Dashboard)} />
          <Route path="/login" component={Login} />
          <Route path="/mirror" component={(Mirror)} />
          <Route path="/clock" component={withAuth(MirrorClock)} />
          <Route path="/photo" component={withAuth(ImageInput)} />
            <Route path="/camera" component={withAuth(VideoInput)} />
            <Route path="/detection" component={Detection} />
            <Route path="/WeatherMap" component={Weather} />
            <Route path="/Weather-forecast" component={WeatherForecast} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
