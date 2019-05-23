import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Carousel } from 'react-bootstrap';
import '../img/mirror.jpg';
import '../img/map.JPG';
import '../img/forecast.JPG';
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
      <Navigation />
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/mirror.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/mirror.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/mirror.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    



      </>

    );
  }
}