import React from 'react'
const Hoc2 = (props) =>{
    return(
        <div>
            <h1>Higher Order Component</h1>
            <div>
                <props.name/>
            </div>
        </div>
    )
}
export default Hoc2;