import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Detection extends Component {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <li>
          <Link to="/photo">Profile</Link>
        </li>
        <li>
          <Link to="/camera">Face Detection</Link>
        </li>
      </div>
    );
  }
}