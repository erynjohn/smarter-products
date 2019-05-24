import React, { Component } from 'react';


export default class WeatherForecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: 'Loading....',
            temp: '',
            high: '',
            low: '',
            description: '',
            icon: ''
        }
    }
    componentWillMount() {
        fetch('/api/weather')
            .then(res => res.json())
            .then(data => {


                this.setState({
                    temp: data.data.main.temp,
                    high: data.data.main.temp_max,
                    low: data.data.main.temp_min,
                    description: data.data.weather[0].description,
                    icon: data.data.weather[0].icon
                })
                console.log(data)

            })
    }


    render() {
        const tempstyle = {
            float: 'left',
            padding: '10px',
            marginLeft: '80px',
            fontSize: '3.5em',
            color: 'white'
        }
        const highLowStyle = {
            float: 'left',
            margin: '30px 30px',
            padding: '10px',
            fontSize: '1.5em',
            color: 'white'
        }
        const descriptionStyle = { 
            fontSize: '2em',
            marginLeft: '60px',
            color: 'white'
        }
        const fontFade = {
            color: 'rgba(255,255,255, 0.5)'
        }
        const fontFade2 = {
            color: 'rgba(255,255,255, 0.3)'
        }

        const { temp, high, low, icon, description } = this.state;
        return (
            <div>
                <p style={{ marginLeft: '30px', fontSize: '2.5em' }}>Current For<span style={ fontFade }>ec</span><span style={ fontFade2 }>ast</span></p>

                    <img style={{color: 'white', height: '9em', marginLeft: '50px'}} src={`http://openweathermap.org/img/w/${icon}.png`} alt="wthr img" />

                    <p style={ descriptionStyle }>{ description }</p>

                <div style={tempstyle}>
                    <p>{Math.round((temp - 273.15) * 9 / 5 + 32)}</p>
                </div>

                <div style={ highLowStyle }>
                    <p>High<span style={{ padding: '10px', color: 'rgba(255,255,255, 0.3)' }}>{ Math.round((high - 273.15) * 9 / 5 + 32) }</span></p>
                    <p>Low<span style={{ padding: '10px', color: 'rgba(255,255,255, 0.3)' }}>{ Math.round((low - 273.15) * 9 / 5 + 32) }</span></p>
                </div>




                <p></p>

            </div>
        )
    }

}