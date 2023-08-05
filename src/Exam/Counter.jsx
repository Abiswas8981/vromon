import React, { useState } from "react";
const Counter = () => {
    const [ value, setValue] = useState(0);

    const handleUpdate =()=>{
        setValue(value+1);
    }
    const handleUpdate2 =()=>{
        setValue(value?value-1:value);
    }

    return (
       <center> <div>
            <h1>//**Counter**//</h1>
            // <h2>{value}</h2>
            <button onClick={handleUpdate}>+</button>
            <button onClick={handleUpdate2}>-</button>
        </div></center>
    )
}
export default Counter;