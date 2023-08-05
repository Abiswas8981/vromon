import React from 'react'
import f1 from '../../../images/logo1.png';
import f2 from '../../../images/back8.jpg';
import f3 from '../../../images/holiday.png';
import f4 from '../../../images/img.jpg';
import './Style.css';

const Home =()=>{
    return(
        <div>
            <div class="logo" id="Hf2"><img src={f1}></img></div>
	<div class="photo" id="Hf1"><img src={f2}></img></div>
	<div class="Htitle">Let us plan you a perfect India holiday</div>
	<div class="Ha" id="Hf3">Incredible India Tourism</div>
	<div class="img"><img src={f3} id="Hf5"></img></div>
	<div class="Hb">Vromon Entry Rules</div>
	<div class="Hc">Vromon looks forward to welcoming you. Find all that you’ll need to know about visiting the State of Qatar,including the country’s latest travel policies, visa requirements and more for incoming travellers.</div>
	<div class="Hd"><img src={f4} id="Hf6"></img></div>
	<div class="He">Why Choose Us?</div>
    <div class="Hf">Our dedicated travel team diligently works round-the-clock to design the best travel experiences for the customers. The skilled team spends considerable amounts of time ideating tour packages that guarantee to make travelling with us an experience like no other. We select the finest hotels in every category, boast an excellent personal fleet of vehicles for transportation.</div>
        </div>
    )
}
export default Home;