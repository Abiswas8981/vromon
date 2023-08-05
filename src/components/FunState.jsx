import React, { useState } from "react";
const FunState = () => {
    const [ value, setValue] = useState(0);
    // const [msg, setMsg] = useState('Welcome to React');

    const handleUpdate =()=>{
        setValue(value+1);
    }
    const handleUpdate2 =()=>{
        setValue(value?value-1:value);
    }
    // const handleUpdateText =()=>{
    //     setMsg("Thank you for visit")

    // }

    return (
       <center> <div>
            <h1>//Counter//</h1>
            // <h2>{value}</h2>
            {/* <h2>{msg}</h2> */}
            <button onClick={handleUpdate}>+</button>
            <button onClick={handleUpdate2}>-</button>

            {/* <button onclick={handleUpdateText}>Update</button> */}
        </div></center>
    )
}
export default FunState