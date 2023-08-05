import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import TripPlan from "./Pages/TripPlan";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import Nav from "../Nav";
import './Style.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const Routing =()=>{
    return(
        <>
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/tripplan' element={<TripPlan/>}/>
                <Route path='/services' element={<Services/>}/>

            </Routes>
            
        </Router>

        </>

    )
}
export default Routing;