import React, { Component } from 'react';


export default class WeatherForecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: 'Loading....',
            currentTemp: []
        }
    }
    componentWillMount() {
        fetch('/api/weather')
        .then(res => res.json())
        .then(data => {
        
            this.setState({currentTemp: data})
            console.log(this.state.currentTemp)
        })
    }

    render() {
      

      return (
        <div>
        <p>80</p>
        <p>Cloudy</p>
        </div>
      )
    }
    
}