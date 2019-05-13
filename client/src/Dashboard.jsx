import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('/api/secret')
      .then(res => res.text())
      .then(res => this.setState({message: res}));
  }

  render() {

    return (
      <div>
        <h1>Dashboard</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}