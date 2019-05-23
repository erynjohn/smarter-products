import React, { Component } from 'react';
import Navigation from '../Navigation';
import Detection from '../views/Detection'

export default class Dashboard extends Component {


  render() {

    return (
      <div>
      <Navigation />
      <Detection />
      </div>
    );
  }
}