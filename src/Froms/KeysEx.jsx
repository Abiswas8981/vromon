import React, { useState } from 'react'
 const KeysEx =()=> {
    const data = [
        {id:1,
             name:'Aritra',
             collage:'BWU',
             Cource:'BCA'
        },
        {id:2, 
            name:'Raj',
            collage:'UEM',
            Cource:'MCA'
        },
        {id:3, 
            name:'Avik',
            collage:'IIHM',
            Cource:'MBA'
        },
        {id:4, 
            name:'Ram',
            collage:'Techno',
            Cource:'Mtech'
        },
        {id:5, 
            name:'Soham',
            collage:'BWU',
            Cource:'MBA'
        }
    ];
    const [value, setvalue] = useState(data);

    const handleDelete = (x) =>{
        setvalue(value.filter((e)=> x!==e.id))
    }
    return(
        <>
        <center><h1>Home task</h1></center>
        <table border={2} align='center' bgcolor='0BF8DE'>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>COLLAGE</td>
                <td>COURCE</td>
                <td>DELETE</td>
                
            </tr>
            {value.map((e)=>{
                return (
                    <>
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.collage}</td>
                        <td>{e.Cource}</td>
                        <td><button onClick={()=>handleDelete(e.id)}>Delete</button></td>
                        </tr>
                    </>
                )
                    
                
            })}
        </table>
        </>
    )
 }
 export default KeysEx