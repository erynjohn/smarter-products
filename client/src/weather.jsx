import React, { Component } from 'react';

export default class Weather extends 
Component {
  constructor(props) {
    super(props);
    this.state= { 
      isLoading: true
    }
    
  }

  componentDidMount() {
    fetch('/api/weather')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

  }
  
    render() {
      return (
        <div>
        <h1>Weather</h1>

          
        </div>
      )
    }
}