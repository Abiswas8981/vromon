import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const ParentRouter = () =>{
    return(
        <>
        
        <Router>
        <NavBar/> 
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>

            </Routes>
           
        </Router>
        </>
    )
}
export default ParentRouter;