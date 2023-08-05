import React from "react";
import { useParams } from "react-router-dom";

const DynamicUser =()=> {
    const parameter = useParams();
    const Params= parameter;
    return(
        <div>
            {Params.name}'s information
        </div>
    )
}
export default DynamicUser;