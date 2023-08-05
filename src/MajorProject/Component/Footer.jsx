import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div>
        <ul><center>
          <label class="patners-img2"><img src="img/5.png" className="k" /></label>
          <label class="patners-img"><img src="img/2.png" className="l" /></label>
          <label class="patners-img1"><img src="img/3.png" className="m" /></label>
          <label class="patners-img3"><img src="img/4.png" className="n" /></label>
        </center> </ul>
      </div>
      <footer style={{ backgroundColor: "#2e4374" }}>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img src='img/logo2.png' className='footer-logo'></img>
              <h6 className='footer-text'>VROMON MEANS COMFORT JOURNEY</h6>
              <p style={{ color: "white", marginLeft: "-4rem" }}>CopyRight&copy;2023, Vromon Pvt. Ltd</p>
              {/* <p className='footer-p'>While traveling with us, you can enjoy a journey full of comfort and good memories forever.</p> */}
            </div>
            <div className="col-md-4">
              <h5 className='footer-h5' style={{ color: "snow", marginLeft: "8rem", fontSize: "1.5rem", marginTop: "-1rem" }} >Company</h5>
              <ul>
                <li className='footer-li' >
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className='footer-li'>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li className='footer-li' >
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>

              </ul>
            </div>
            <div className="col-md-4">
              <h5 className='footer-h5' style={{ color: "snow", marginLeft: "-5rem", fontSize: "1.5rem", marginTop: "-1rem" }}>Legal Policy</h5>
              <ul>
                <li className='footer-lii'>
                  <NavLink to="/termcondition">Term & Condition</NavLink>
                </li>
                <li className='footer-lii'>
                  <NavLink to="/privacy">Privacy & Security</NavLink>
                </li>
                <li className='footer-lii'>
                  <NavLink to="/feedbackfrom">Feedback</NavLink>
                </li>
                <li className='footer-lii'>
                  <NavLink to="/disclaimer">Disclaimer</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className='footer-h5' style={{ color: "snow", marginLeft: "20rem", fontSize: "1.5rem", marginTop: "-18.4rem" }}>Packages</h5>
              <ul>
                <li className='footer-liii'>
                  <NavLink to="/kashmir">Kashmir</NavLink>
                </li>
                <li className='footer-liii'>
                  <NavLink to="/rajasthan">Rajasthan</NavLink>
                </li>
                <li className='footer-liii'>
                  <NavLink to="/sundarban">Sundarban</NavLink>
                </li>
                <li className='footer-liii'>
                  <NavLink to="/uttarakhand">Uttarakhand</NavLink>
                </li>
                <li className='footer-liii'>
                  <NavLink to="/himachal">Himachal</NavLink>
                </li>
                <li className='footer-liii'>
                  <NavLink to="/andaman">Andaman</NavLink>
                </li>
                <li className='footer-liii'>
                  <NavLink to="/delhi">Delhi</NavLink>
                </li>


              </ul>
            </div>
          </div>
        </div>
        <div id="footer-f9">
          <a href="#" target="_blank"><i class="bi bi-whatsapp" id="i-whatsapp" style={{}}></i></a>
          <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
          <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="#" target="_blank"><i class="bi bi-youtube"></i></a>
        </div>
        <div className="footer-q">


          <i class="bi bi-geo-alt-fill" style={{ color: "white", fontSize: "2rem", marginLeft: "-22rem" }}></i>
          <label class="footer-icone1" style={{ color: "#B4C7EE", fontSize: "1.2rem", marginTop: "-2.5rem", marginLeft: "-20rem", width: "20rem" }}>C-81C, Madhyamgram, kol-700130</label><br />
          <i class="bi bi-telephone" style={{ color: "white", fontSize: "2rem", marginLeft: "-22rem" }}></i>
          <label class="footer-icone2" style={{ color: "#B4C7EE", fontSize: "1.2rem", marginTop: "-2.5rem", marginLeft: "-19rem", width: "19rem" }}>+91-120-4052615 </label><br />
          <i class="bi bi-phone-fill" style={{ color: "white", fontSize: "2rem", marginLeft: "-22rem" }}></i>
          <label class="footer-icone3" style={{ color: "#B4C7EE", fontSize: "1.2rem", marginTop: "-2.5rem", marginLeft: "-19rem", width: "19rem" }}>+911204052699</label><br />
          <i class="bi bi-envelope-at-fill" style={{ color: "white", fontSize: "2rem", marginLeft: "-22rem" }}></i>
          <label class="footer-icone5" style={{ color: "#B4C7EE", marginLeft: "-19rem", fontSize: "1.2rem", marginTop: "-2rem", width: "19rem" }}>Vromon@gmail.com</label><br />
          <i class="bi bi-whatsapp" style={{ color: "white", fontSize: "2rem", marginTop: "2rem", marginLeft: "-22rem" }}></i>
          <label class="footer-icone6" style={{ color: "#B4C7EE", fontSize: "1.2rem", marginTop: "-2.5rem", marginLeft: "-19rem", width: "19rem" }}>9212777225 </label>



        </div>




      </footer>
    </>
  );
};

export default Footer;
