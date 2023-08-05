import React from "react";
import { NavLink } from "react-router-dom";

const Nav =()=>{
    return(
      <div>
      <div className="Navigate">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navad">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" id="home" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" id="about" to="/aboutus">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" id="contact" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" id="service" to="/services">Serivces</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" id="trip" to="/tripplan">Trip Plan</NavLink>
              </li>
              <img src ="image\logo2.png" id='pagelogo1'/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
                  
                  </div>

    )
}
export default Nav;<img src ="image\logo2.png" id='pagelogo1'/>