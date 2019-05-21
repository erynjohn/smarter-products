import React, { Component } from 'react';
import Clock from './Clock';
import VideoInput from  './views/VideoInput';



class Mirror extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: null
        }
    }
    

    render() {

    

        const styles = {
            color: 'white',
            backgroundColor: 'black',
            height: '1080px'
        }
        return (
            <div style={styles}>
            <Clock />
            <VideoInput />

            </div>
        )
    }
}
export default Mirror;
