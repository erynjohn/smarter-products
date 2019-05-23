import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";

const PanelPage = props => {
return (
  <>
<MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardHeader color="deep-orange lighten-1">Face Detection</MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Pro Tip</MDBCardTitle>
      <MDBCardText>
        After you register your profile you can check detection. It should display your name.
      </MDBCardText>
      <MDBBtn color="deep-orange"><Link to='./VideoInput.js'>Face Detection</Link></MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
<MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardHeader color="deep-orange lighten-1">Register Profile</MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Pro Tip</MDBCardTitle>
      <MDBCardText>
        Before you can get personal display you must register your profile image. 
      </MDBCardText>
      <MDBBtn color="deep-orange"><Link to='./ImageInput.js'>Profile</Link></MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
</>
);
};

export default PanelPage;