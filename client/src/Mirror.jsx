import React, { Component } from 'react';
import Clock from './Clock';
import VideoInput from  './views/VideoInput';
import Weather from './weather';
import { Container, Row, Col } from  'react-bootstrap';



class Mirror extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: null
        }
    }
    

    render() {
        const containerstyle = {
            color: 'white',
            backgroundColor: 'black',
            height: '1080px'
          }

        return (
            <>
            <Container style={containerstyle}>
            <Row>
            <Col><Clock /></Col>
            <Col><Weather /></Col>
            </Row>
            <Row>
            <Col><VideoInput /></Col>
            </Row>
          </Container>




            </>
        )
    }
}
export default Mirror;
