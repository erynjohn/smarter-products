import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

 const ul = {
  listStyleType: 'none',
  margin: "0",
  padding: "0",
  overflow: "hidden"
 }
 const navLink = {
  color: "white",
  float: "left",
  display: "block",
  padding: "2%",
  letterSpacing: "1.4px",
  fontSize: "1em"
  
 }
 const h1 ={
  color: "white"
 } 
 const styles = {
   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22qvQPRTc39JwmFTw4xLcCHSTRcGnBgd8qjBPq9V34JeCfv0l')",
   height: "200px",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   position: "relative"
 }
 
const Navigation = props => (
  <>
    <div style={styles} class="hero-image">
  <div class="hero-text">   
  <h1 style={h1}>Smarter Products</h1>
  
  <header>
    <nav>
    <ul style={ul}>
      <li><NavLink style={navLink} to="/">Home</NavLink></li>
      <li><NavLink style={navLink} to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink style={navLink} to="/mirror">Mirror</NavLink></li>
    <Logout />
    </ul>
    </nav>
    </header>

  </div>
</div>
    </>

    );
export default Navigation;