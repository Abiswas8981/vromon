import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar =()=>{
    return(
        <nav className='nav container d-flex'>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='home'>Home</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='about'>About</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='profile'>profile</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='contact'>Contact Us</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='help'>Help</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='/login'>Log-in</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='dynamic/Aritra'>Aritra info</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='dynamic/Raj'>Raj info</NavLink>
            <NavLink className='nav-link fs-4 text-dark fw-bold' to='Dynamic/Avi'>Avi info</NavLink>

            
        </nav>
    )
}
export default NavBar;