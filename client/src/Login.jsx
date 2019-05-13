import React, { Component } from 'react';
import { Form, Col, FormGroup, Container, Button, Modal } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      show: false,
      isLoggedIn: false
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  //login
  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/')
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      
    });
  }
 
  //register
  onSubmitRegister = (event) => {
    event.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      
    });
  }
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  clearForm = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }
  
  
  render() {

    return (
      
      <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Smarter Products</Modal.Title>
  </Modal.Header>

  <Modal.Body>

  <Container className="App">
        <h2>Sign In</h2>
        <Form onSubmit={this.onSubmit} className="form">
          <Col>
            <FormGroup>
              <input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </FormGroup>
          </Col>
          <Button type="submit" value="Submit">Submit</Button>
        </Form>
      </Container>
  </Modal.Body>


  <Button variant="primary" onClick={this.handleShow}>
          Don't have an account? Register
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form onSubmit={this.onSubmitRegister} className="form">
          <Col>
            <label>Email Address</label>
            <FormGroup>
              <input
                type="email"
                name="email"
                id="emailRegister"
                placeholder="myemail@email.com"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </FormGroup>
          </Col>
          <Col>
          <label>Password</label>
            <FormGroup>
              <input
                type="password"
                name="password"
                id="passwordRegister"
                placeholder="********"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </FormGroup>
          </Col>
          <Col>
          <label>Verify Password</label>
            <FormGroup>
              <input
                type="password"
                name="password"
                id="passwordVerify"
                placeholder="********"

                //Todo password verification

              />
            </FormGroup>
          </Col>
          <Button type="submit" value="Submit">Submit</Button>
        </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.clearForm}>
              Reset
            </Button>
          </Modal.Footer>
        </Modal>

</Modal.Dialog>


    );
  }
}
export default Login;