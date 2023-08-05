import React from 'react'
import f1 from '../../../images/logo1.png';
import f6 from '../../../images/back11.jpg';
import f7 from '../../../images/back5.png';
import f5 from '../../../images/5.png';
import f2 from '../../../images/2.png';
import f3 from '../../../images/3.png';
import f4 from '../../../images/4.png';
import './Style.css';
import { NavLink } from 'react-router-dom';


const Contact =()=>{
    return(
        <div>
            <div><img src={f1} class="logo"/></div>
	<div><img src={f6} class="a"/></div>
	<div id="f1">Provide Your Details </div>
	<div><img src={f7}/></div>
<div class="form">
		<div class="row g-3">
  <div class="col">
  	<label for="inputEmail4" class="form-label">First name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
  	<label for="inputEmail4" class="form-label">Last name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address 1</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="location"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose</option>
      <option>Gujrat</option>
      <option>Tamil Nadu</option>
      <option>Asam</option>
      <option>Uttarakhand</option>
      <option>West Bengal</option>
      <option>Bihar</option>
      <option>Rajasthan</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">Check me out</label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" id="f4">Submit</button>
  </div>
</form>
</div>
	<div id="f2"> Contact Us </div>
	<div id="f3"> Any Question</div>
<div class="e">
		<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Your Name</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Email</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Question</label>
</div><br/>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" id="f5">Submit</button>
  </div>
</div>

	<div class="c">
		<table>
		<tr>
			<td>Address:-</td>
			<td></td>
			<td>Madhyamgram</td>
		</tr>
		<tr>
			<td>Phone :-</td>
			<td></td>
			<td>8981460588</td>
		</tr>
		<tr>
			<td>Email:-</td>
			<td></td>
			<td>info@Vromon.com</td>
		</tr>
	</table></div>
	<div id="f6">Join Our Agency</div>
	<div id="f7">
	<div class="g">
		 <div class="footer-box hide-acco">
               <h3 class="h">In the main section</h3>
               <ul class="drop">
                  <li><a href="" class="h">Register your hotel</a></li>
                  <li><a href="" class="h">Choose your trip plan</a></li>
                  <li><a href="" class="h">Tour Package</a></li>
                  <li><a href="" class="h">In India tour</a></li>
                  <li><a href="" class="h">Services</a></li>
               </ul>
            </div> 
        </div>

    <div class="i">
    	 <div class="footer-box hide-acco">
               <h3 class="h">Legal Policy</h3>
               <ul class="drop">
               	  <li><a href="" class="h">Share Your Travel Experience</a></li>
                  <li><a href="" class="h">Terms & Conditions</a></li>
                  <li><a href="" class="h">Disclaimer</a></li>
                  <li><a href="" class="h">Privacy Policy</a></li>
                  <li><a href="" class="h">We are Hiring</a></li>
               </ul>
            </div> 
        </div>
              <div id="f8">
                  <h3 class="h">Social Media:-</h3>
              </div>
              <div id="f9">
              	<a href="#" target="_blank"><i class="bi bi-whatsapp"></i></a>
              	<a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
              	<a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
              	<a href="#" target="_blank"><i class="bi bi-youtube"></i></a>
              </div>
        </div>
        <div>
            <ul><center>
                <label class="patners-img2"><img src={f5} class="k"/></label>
                <label class="patners-img"><img src={f2} class="l"/></label>
                <label class="patners-img1"><img src={f3} class="m"/></label>
                <label class="patners-img3"><img src={f4} class="n"/></label>
                 </center> </ul>
               </div>
               <h1 class="j">------------------------------------------------------------------------------------</h1>
           <div>
              <NavLink to='home'><a href><img src={f1} class="o" alt="Tour My India"/></a></NavLink>
               <p class="p">CopyRight&copy;2023, Vromon Pvt. Ltd</p>
           </div>
           <div class="q">
                
              		 <i class="bi bi-geo-alt-fill" className='icon'></i>
                     <label class="footer-icone1">C-81C, Sector-8, Noida-201301</label><br/>
                     <i class="bi bi-telephone" className='icon'></i>
                     <label class="footer-icone2">+91-120-4052615 </label><br/>
                     <i class="bi bi-phone-fill" className='icon'></i>
                     <label class="footer-icone3">+911204052699</label><br/>
                     <i class="bi bi-envelope-at-fill" className='icon'></i>
                     <label class="footer-icone5">info@Vromon.com</label><br/>
                     <i class="bi bi-whatsapp" className='icon'></i>
                     <label class="footer-icone6">+91-9212777225 (Only for Whatsapp)</label>
                     
        
        </div>
        </div>

    )
}
export default Contact;