import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar =()=>{
    return(
    <nav>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to='home'><a class="nav-link active" aria-current="page" href="#">Home</a></NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='contact'><a class="nav-link" href="#">Contact</a></NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='service'><a class="nav-link" href="#">Service</a></NavLink>
        </li>
        <li class="nav-item">
         <NavLink to='trip'><a class="nav-link disabled">Trip Plan</a></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </nav>
        
    )
}
export default NavBar;