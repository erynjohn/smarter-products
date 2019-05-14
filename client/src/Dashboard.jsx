import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Dashboard extends Component {


  // componentDidMount() {
  //   fetch('/api/secret')
  //     .then(res => res.text())
  //     .then(res => this.setState({message: res}));
  // }

  render() {

    return (
      <div>
      <Navigation />
        <h1>Dashboard</h1>
      </div>
    );
  }
}