import React, { Component } from 'react';
import Navigation from '../Navigation';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('/api/smith')
    .then(res => res.json())
    .then(res => this.setState({message: res}))
  }

  render() {
    
    return (
      <>
      <Navigation />
    



      </>

    );
  }
}