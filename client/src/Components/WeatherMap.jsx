import React, { Component } from 'react';
import DarkskyMap from 'react-darksky-map';


export default class Weather extends 
Component {
  constructor(props) {
    super(props);
    this.state= { 
      apikey: '',
      message: 'Loading....' 
    }
    
  }
 
    render() {
      const styles = { 
        color: 'white',
        filter: 'brightness(120%)',
        opacity: '0.5'
      }
      return (
        <div>
        <DarkskyMap style={styles} lat={32.8479} lng={	-96.9740} zoom={4} fieldControl={false} units='imperial' timeControl={false} mapField="temp" width= '100%' height='250px'  />
        </div>
      )
    }
}