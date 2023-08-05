import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import f1 from '../../images/logo1.png'

const Home =() =>{
    const nav = useNavigate();
    return(
        
        <div className='container text-center bg-info mt-5'>
            <h1 className='text-light'>Home components</h1>
            <button className='btn btn-primary' onClick={()=>nav('/about')}>next pages</button>
            <Link to='/profile' className='text-light '>Go to Profile</Link>
            

        </div>
    )
}
export default Home;