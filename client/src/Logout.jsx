import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    }
  }

 onLogoutClick = (event) => {
  event.preventDefault();
  fetch('/api/logout', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.status === 200) {
      this.props.history.push('/');
      var users = users
      console.log(users)
    } else {
      const error = new Error(res.error);
      throw error;
    }
  })
  .catch(err => {
    console.error(err);
   
  });
}

// const navLink = {
//   color: "white",
//   float: "left",
//   display: "block",
//   padding: "2%"
  
//  }
render() {
    return (

      <div>

      <button
              style={{
                width: "100px",
                letterSpacing: "1.4px",
                color: "white",
                padding: "1.8%",
                float: "right",
                fontSize: "1em"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large"
            >
              Logout
            </button>
      </div>

    );
  }
}
export default withRouter(Logout);