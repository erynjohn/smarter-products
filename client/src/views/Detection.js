import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";

const PanelPage = props => {
return (
  <>

<MDBContainer style={{margin: '100px 100px 50px'}}>
  <MDBCard style={{ width: "22rem", marginTop: "1rem", float: 'left' }}>
    <MDBCardHeader color="deep-orange lighten-1">Face Detection</MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Pro Tip</MDBCardTitle>
      <MDBCardText>
        After you register your profile you can check detection. It should display your name.
      </MDBCardText>
      <MDBBtn color="deep-orange"><Link to='camera'>Face Detection</Link></MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
<MDBContainer style={{margin: '100px 10px 50px'}}>
  <MDBCard style={{ width: "22rem", marginTop: "1rem", float: 'right' }}>
    <MDBCardHeader color="deep-orange lighten-1">Register Profile</MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Pro Tip</MDBCardTitle>
      <MDBCardText>
        Before you can get personal display you must register your profile image. 
      </MDBCardText>
      <MDBBtn color="deep-orange"><Link to='photo'>Profile</Link></MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
</>
);
};

export default PanelPage;