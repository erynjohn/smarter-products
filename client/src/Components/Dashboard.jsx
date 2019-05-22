import React, { Component } from 'react';
import Navigation from '../Navigation';
import Detection from '../views/Detection'

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
      <Detection />
      </div>
    );
  }
}