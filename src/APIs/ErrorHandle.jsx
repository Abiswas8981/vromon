import React, { useEffect , useState } from 'react';
import axios from 'axios';
const API = "https://jsonplaceholder.typicode.com/posts";
const ErrorHandle =()=>{}
    const [apiData, setApiData] = useState([]);
    const [errMsg, setErrorMsg] = useState([]);

    const DataFetch = async()=>{
        try{
            const collectData = await axios.get(API);
            setApiData(collectData.data);
            console.log(collectData.data);
        } catch (error){
            console.log(error.message);
            setErrorMsg(error.message)
        }
    }
    return(
        <div className='contaniner mt-5'>
            {/* set Error Msg */}
            {errMsg &&(
                <p className='text-danger fs-1 fw-bold'>{errMsg}</p>
            )}
            <ol>
                apiData.map((e)={
                    (
                    <li key={e.id} className='fs-5 fw-bold'></li>

                    )
                })
            </ol>
        </div>
    )

