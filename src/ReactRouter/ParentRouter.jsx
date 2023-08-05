import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Help from './Pages/Help';
import Profile from './Pages/Profile';
import Accprofile from './Pages/Accprofile';
import Perprofile from './Pages/Perprofile';
import Login from './Pages/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './NavBar';
import DynamicUser from './Pages/DynamicUser';


const ParentRouter =()=>{
     return(
        <>
        <Router>
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='profile' element={<Profile/>}>
                    <Route path='accprofile' element={<Accprofile/>}/>
                    <Route path='perprofile' element={<Perprofile/>}/>
                </Route>
                <Route path='contact' element={<ContactUs/>}/>
                <Route path='help' element={<Help/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='dynamic/:name' element={<DynamicUser/>}/>

            </Routes>
            <NavBar/>
        </Router>
        
        </>
     )
}
export default ParentRouter;