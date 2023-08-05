import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import HotelDetails from './HotelDetails';
import HotelDetails2 from './HotelDetails2';
import HotelDetails3 from './HotelDetails3';

const Navbar = ({ wishlistCount }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('Login button clicked');
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
    setShowLoginModal(false);
  };

  const handleSignup = () => {
    console.log('Signup button clicked');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setShowSignupModal(false);
  };

  const handleModalClose = () => {
    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  return (
    <>
      <div id='nav-f1'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/" ><img src='img/logo2.png' alt='/' className='nav-logo' /></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/" style={{ marginTop: "1rem", marginLeft: "" }} >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/trip" style={{ marginTop: "1rem" }} >Trip</NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#0695f4", marginTop: "1rem" }}
                  >
                    Places To Stay
                  </a>
                  <ul className="dropdown-menu">
                    <div className="row">
                      <div className="col" id='drop-1'>
                        <li className="dropdown-header"><b>City Wise</b></li>
                        <HotelDetails />
                      </div>
                      <div className="col" id='drop-2'>
                        <li className="dropdown-header"><b>Luxury Resorts</b></li>
                        <HotelDetails2 />

                      </div>
                      <div className="col" id='drop-3'>
                        <li className="dropdown-header"><b>Beach Resorts</b></li>
                        <HotelDetails3 />
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" style={{ marginTop: "1rem" }}>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" style={{ marginTop: "1rem" }}>Contact</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/wishlist">
                    <i className="fas fa-heart" style={{ marginLeft: "16rem", margintop: "2rem" }}></i> 
                    <div className="badge bg-danger" style={{ marginLeft: ".8rem", marginLeft: "15.8rem" }}>{wishlistCount}</div> 
                  </NavLink>
                </li>
              </ul>

              <NavLink className="nav-link" to="#" onClick={() => setShowLoginModal(true)}>
                <button className="login-button">Login</button>
              </NavLink>
              <NavLink className="nav-link" to="#" onClick={() => setShowSignupModal(true)}>
                <button className="signup-button">SignUp</button>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <Modal show={showLoginModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignupModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
