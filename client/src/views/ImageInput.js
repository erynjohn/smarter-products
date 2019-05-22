import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadModels, getFullFaceDescription, createMatcher } from '../api/face';
import ShowDescriptors from '../api/showDescriptors';

// Import image to test API
const testImg = require('../img/test.jpg');

// Import face profile
const JSON_PROFILE = require('../descriptors/profile.json');

// Initial State
const INIT_STATE = {
  imageURL: testImg,
  fullDesc: null,
  detections: null,
  descriptors: null,
  match: null,
  showDescriptors: false,
  loading: false
};

class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ...INIT_STATE, 
      faceMatcher: null,
      name: '',
      email: '',
      zipcode: ''
     };
  }

  componentWillMount = async () => {
    await loadModels();
    this.setState({ faceMatcher: await createMatcher(JSON_PROFILE) });
    await this.handleImage(this.state.imageURL);
  };

  handleImage = async (image = this.state.imageURL) => {
    await getFullFaceDescription(image).then(fullDesc => {
      if (!!fullDesc) {
        this.setState({
          fullDesc,
          detections: fullDesc.map(fd => fd.detection),
          descriptors: fullDesc.map(fd => fd.descriptor)
        });
      }
    });

    if (!!this.state.descriptors && !!this.state.faceMatcher) {
      let match = await this.state.descriptors.map(descriptor =>
        this.state.faceMatcher.findBestMatch(descriptor)
      );
      this.setState({ match });
    }
  };

  getImageDimension = imageURL => {
    let img = new Image();
    img.onload = () => {
      let HEIGHT = (this.state.WIDTH * img.height) / img.width;
      this.setState({
        HEIGHT,
        imageDimension: {
          width: img.width,
          height: img.height
        }
      });
    };
    img.src = imageURL;
  };
// file handler
  handleFileChange = async event => {
    this.resetState();
    await this.setState({
      imageURL: URL.createObjectURL(event.target.files[0]),
      loading: true
    });
    this.handleImage();
  };
// form handler
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
      
    });
  }

  onSubmitProfile= (event) => {
    event.preventDefault();
    fetch('/api/profile', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({name: this.state.name, 
        email: this.state.email,
        zipcode: this.state.zipcode,
        descriptors: this.state.descriptors
        
      })
    })
    .then(res => { 
      console.log('Data sent')
  })
  .catch(err => { throw err })
  }

  resetState = () => {
    this.setState({ ...INIT_STATE });
  };

  render() {
    const { imageURL, detections, match, fullDesc } = this.state;

    let drawBox = null;
    if (!!detections) {
      drawBox = detections.map((detection, i) => {
        let _H = detection.box.height;
        let _W = detection.box.width;
        let _X = detection.box._x;
        let _Y = detection.box._y;
        return (
          <div key={i}>
            <div
              style={{
                position: 'absolute',
                borderRadius: '10px',
                border: 'solid 2px',
                borderColor: 'white',
                height: _H,
                width: _W,
                transform: `translate(${_X}px,${_Y}px)`
              }}
            >
              {!!match && !!match[i] ? (
                <p
                  style={{
                    fontSize: '1.5em',
                    borderColor: 'white',
                    width: _W,
                    marginTop: 0,
                    color: 'white',
                    transform: `translate(-3px,${_H}px)`
                  }}
                >
                  {match[i]._label}
                </p>
              ) : null}
            </div>
          </div>
        );
      });
    }

    return (
      <>
      <div style={{margin:'10px'}}>

      <h3>Add Profile</h3>
      <form>
      <input 
      value={this.state.name}
      onChange={this.handleInputChange}
      style={{margin:'auto 5px'}} 
      id='name' type='text' name='name' placeholder='Name' />
      <input 
      value={this.state.email}
      onChange={this.handleInputChange}
      style={{margin:'auto 5px'}} 
      id='email' type='email' name='email' placeholder='email'/>
      <input 
      value={this.state.zipcode} 
      onChange={this.handleInputChange} 
      style={{margin:'auto 5px'}} 
      id='zipcode' type='text' name='zipcode' placeholder='zipcode'/>
      <button onClick={this.onSubmitProfile} type='submit'>Submit</button>
      </form>

      </div>
        <input style={{margin: '5%'}}
          id="myFileUpload"
          type="file"
          onChange={this.handleFileChange}
          accept=".jpg, .jpeg, .png"
        />
        <div style={{float: 'right', margin:'auto 60%'}}>
          <div style={{ position: 'absolute' }}>
            <img src={imageURL} alt="imageURL" />
          </div>
          {!!drawBox ? drawBox : null}
        </div>
        <div>

        </div>
        <div style={{float: 'left', width: '40%'}}>

          {!!ShowDescriptors ? <ShowDescriptors fullDesc={fullDesc} /> : null}

        </div>
      </>
    );
  }
}

export default withRouter(ImageInput);