import React, { Component }  from 'react';
import Clock from 'react-live-clock';
 

export default class MirrorClock extends Component {
  
    render() {
        const styles = {
            fontSize: "3em"
        }
  
      return (
        <div>
<Clock style={styles} format={'HH:mm:ss'} ticking={true} timezone={'US/Central'} />
        </div>
      );
    }
  }