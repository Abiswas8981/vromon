import React, { useState } from 'react'

const LocalStorageAccess =()=>{
    const [Username,setUsername]=useState('');
    const [Email,setemail]=useState('');

    const handleDataChange =(event)=>{
            setUsername(event.target.value)
    }
    
    
    const handleDataShow =()=>{
        document.getElementById('f1').innerHTML = Username;
        localStorage.setItem("userName",Username);
        document.getElementById('f2').innerHTML = Email;
        localStorage.setItem("email",Email);
    }
    const handleDataFetch =()=>{
        const uName = localStorage.getItem('userName');
        setUsername(uName);
        document.getElementById('f1').innerHTML = Username;
        const uEmail = localStorage.getItem('email');
        setemail(uEmail);
        document.getElementById('f2').innerHTML = Email;
    }
    const handleDataDelete = () =>{
        localStorage.removeItem('userName');
        localStorage.removeItem('email')
    }

    return(
        <>
        <input type='text'placeholder='Enter User Name' onChange={handleDataChange}/><br/>
        <input type='text'placeholder='Enter your Email'onChange={(e)=>setemail(e.target.value)}/><br/>
        <button onClick={handleDataShow}>Show Data</button>
        <button onClick={handleDataFetch}>Fatch Data</button>
        <button onClick={handleDataDelete}>Delete Data</button>
        <h1 id='f1'></h1>
        <h1 id='f2'></h1>
        </>
    )
}
export default LocalStorageAccess;