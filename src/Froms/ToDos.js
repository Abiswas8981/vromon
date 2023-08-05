import React, { useState } from 'react'

const ToDos =() => {

    const [value, setvalue]= useState('');
    const [item, setitem]= useState([]);
    const handleChange=(event)=>{
        setvalue(event.target.value);
    }
    const additem = ()=>{
        setitem([...item,value])
    }
    const handleDelete =(e) =>{
        setitem(item.filter((current,index)=> e!==index))
    }
    return(
        <>
        <center><label>ToDos</label></center>
        <center><input type='text' placeholder='Add' onChange={handleChange} style={{border:'30px',borderRadius:'20px'}}/>
        <button onClick={additem}> work Add</button>
        <ol>
            {item.map((current,index)=>(
                <li>{current}
                <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>
                
            ))}
        </ol></center>
        </>
    )
}
export default ToDos