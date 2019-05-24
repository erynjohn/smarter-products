import React from "react";
import { MDBBtn } from "mdbreact";

const berrylan = () => {
  return (
    <>
    <div>
      <h3>BerryLan App</h3>
      <p>Download the app from Google Play Store or Itunes</p>
      <p>Follow the prompts and connect to your network</p>
    </div>
    <div style={{marginBottom: '70px'}}>
      <MDBBtn href="https://itunes.apple.com/us/app/berrylan/id1436156018" target="_blank" color="dark">
        iTunes
      </MDBBtn>
      <MDBBtn
        href="https://itunes.apple.com/us/app/berrylan/id1436156018"
        target="_blank"
   
      >
      </MDBBtn>
      <MDBBtn href="https://play.google.com/store/apps/details?id=io.guh.berrylan" target="_blank" color="dark">
        Google Play
      </MDBBtn>
      <MDBBtn
        href="https://play.google.com/store/apps/details?id=io.guh.berrylan"
        target="_blank"
      >
      </MDBBtn>
      </div>
    </>
  );
}

export default berrylan;