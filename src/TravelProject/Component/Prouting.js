import React from "react";
import Home from "../Routes/Home"
import About from "../Routes/About"
import Contact from "../Routes/Contact"
import Service from "../Routes/Service"
import Navbar from "../Component/Navbar"
import "../Routes/Style.css"

import { Routes,Route } from "react-router-dom";

const Prouting =()=>{
    return(
    <>
            <Navbar/>
            <Routes>
            
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/service' element={<Service/>}/>
            </Routes>
            
    </>
    )
}
export default Prouting;

