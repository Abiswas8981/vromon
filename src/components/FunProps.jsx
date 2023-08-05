import React from "react";

var FunProps =({tech,year,children})=>{
        return(
            <div>
                <h1>Example of function props</h1>
                <p>{tech}</p>
                <p>{year}</p>
                <p>{children}</p>
            </div>
        )
};
export default FunProps;