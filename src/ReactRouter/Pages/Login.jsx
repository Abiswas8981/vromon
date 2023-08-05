import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Login =()=>{
  const nav = useNavigate();
  const handleLogin =()=>{
    localStorage.setItem('login','Token')
    nav('home')
  }
  useEffect(()=>{
    const loginId = localStorage.getItem('login')
    if(loginId){
      nav('home')
    }
  },[])
  

    return(
        <>
        <div className='container text-center bg-info mt-5'>
            <h1 className='text-light'>Login Page</h1></div>
            <div class="form" className='container text-center bg-info mt-5'>
		<div class="row g-3">
  <div class="col">
  	<label for="inputEmail4" class="form-label">First name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>
  </div>
  <div class="col">
  	<label for="inputEmail4" class="form-label">Last name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
  </div>
</div>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="inputPassword4"></input>
  </div></form>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" id="f4">Submit</button>
  </div></div>
  <button onClick={handleLogin}>Login</button>
    </>
    )
}
export default Login;