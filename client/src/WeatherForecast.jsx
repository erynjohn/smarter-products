import React, { Component } from 'react';


export default class WeatherForecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: 'Loading....',
            temp: '',
            high: '',
            low: ''

        }
    }
    componentWillMount() {
        fetch('/api/temp')
        .then(res => res.json())
        .then(data => {
        
            
            this.setState({temp: data.data.main.temp,
                high: data.data.main.temp_max,
                low: data.data.main.temp_max
            })
            console.log(data)
            
        })
    }
    
    render() {
        const { temp } = this.state;
      return (
        <div>
        <p>Current Forecast</p>
        <p>{ Math.round((temp -273.15)*9/5+32)}</p>
      
   
        <p></p>

        </div>
      )
    }
    
}