import { useState } from "react";
import axios from "axios";
// API for Promise
const API ="https://jsonplaceholder.typicode.com/posts"
// API for Async await
const API2 = "https://jsonplaceholder.typicode.com/posts"

const DataGet =()=>{
    // for promise
    const [apiData,setApiData] = useState([]);
    // For Async await
    const [apiDataAsync,setApiDataAsync] = useState([]);

    const handleDataFetchpromise =()=>{
        axios.get(API)
        .then((e)=>{
            setApiData(e.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handleDataFetchAsync = async ()=>{
        try{
            const getData = await axios.get(API2);
            console.log(getData.data);
            setApiDataAsync(getData.data);
        }catch (error) {
            console.log(error.message);
        }

    }
    return(
        <>
         {/* For Promise  */}
        <button onClick={handleDataFetchpromise}>Fatch DataPromice</button>
        <ol>
            {apiData.map((e)=>{
                return <li key={e.id}>ID:- {e.id} and Title:-{e.title}</li>

            })}</ol>
            {/* For Async Await */}
            <button onClick={handleDataFetchAsync}> Fatch DataAsync</button>
                <table border="5">
                    <tr>
                    <th>SL.NO.</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                    {
                        apiDataAsync.slice(0,20).map(e=>{
                            return(
                                <>
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.title.slice(0,10)}</td>
                                    <td>{e.body.slice(0,20)}</td>
                                </tr>
                                </>
                            )
                        })
                    }
                </table>
        </>
    )

}
export default DataGet;
