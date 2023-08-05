import React from 'react'
import f1 from '../../images/profile.png';
import { Link, Outlet } from 'react-router-dom';
const Profile =()=>{
    return(
        
        <div className='container text-center bg-info mt-5'> 
            <h1 className='text-light'>Profile Components</h1>

            {/* nestad route */}
            <div className='row'>
                <div className='col-6 text-bg-primary rounded-pill'>
                <Link className='text-light'to='accprofile'>Account Profile</Link>
            </div>
           
                <div className='col-6 text-bg-primary rounded-pill'>
                <Link className='text-light'to='perprofile'>Personal Profile</Link>
            </div>
            </div>
            <Outlet/>
        <div className=' d-flex justify-content-center align-item-center'>
            <img src={f1} height={300} width={400}></img>
           
            
        </div>
        </div>
        
    )
}
export default Profile;
