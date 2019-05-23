import React, { Component } from 'react';
import Navigation from '../Navigation';
import Carousel from './Carousel';
import BerryLanButton from './BerryLan';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    }
  }


  render() {

    return (
      <>
        <div>
          <Navigation />
        </div>
        <div style={{ marginTop: '100px' }}>
          <Carousel />
        </div>
        <div  style={{margin: 'auto 100px', borderRadius: '20px' }}>
          <BerryLanButton />
        </div>




      </>

          );
        }
}