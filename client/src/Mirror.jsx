import React, { Component } from 'react';
import Login from './Login';



class Mirror extends Component {

    render() {

        const styles = {
            color: 'white',
            backgroundColor: 'black',
            height: '1080px'
        }
        return (
            <div style={styles}>
            <Login />

            </div>
        )
    }
}
export default Mirror;
