import React from 'react'
import ComplexLogic from './ComplexLogic'
import Hoc1 from './Hoc1'
import Hoc2 from './Hoc2'

const ParentHos =()=>{
    return (
        <>
        <Hoc1 name = {ComplexLogic} />
        <Hoc2 name = {ComplexLogic}/>
        </>
    )
}
export default ParentHos;