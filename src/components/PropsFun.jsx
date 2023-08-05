import React from "react";

const PropsFun =({name,add,children})=>{
    // const {name,add,children}=props
    return(
        <div>
        <h1>My name is {name}  I am from {add}</h1>
        <h2>{children}</h2>
        </div>
    )
}
export default PropsFun;