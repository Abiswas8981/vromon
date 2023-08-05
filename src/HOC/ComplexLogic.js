import React from 'react'
import { useState } from 'react'
const ComplexLogic = () =>{
    const [count, setCount] = useState(0);
    const handleUpdate =() =>{
        setCount(count+5)
    }
    const handleDelete =() =>{
        setCount(count && count-1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default ComplexLogic;