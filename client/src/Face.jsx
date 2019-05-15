import React, { Component } from "react";
import Webcam from "react-webcam";
import Navigation from './Navigation';

export default class FaceDetect extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };
  setRef = webcam => {
    this.webcam = webcam;
  };
  render() {

    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
      <Navigation />
        <h1>Face Detection</h1>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}