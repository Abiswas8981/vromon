import React, {useState} from 'react';
import './Calculator.css';

const Calculator =()=> {
    const [result, setresult] = useState('');
    const handleClick =(event)=>{
        setresult(result.concat(event.target.value))
    }
    const clear =() =>{
        setresult("")
    }
    const calculate =()=>{
        setresult(eval(result));
    }
    
    return(
        
        <>
        <h1 className='header'><center> CALCULATOR</center></h1>
        
        <div id='f1'>
            
                    <from>
                <input type='text' placeholder='00' id='f6' value={result}/>
            </from>
            <div>
                <table>
                <tr>
                    <td>
                        <button onClick={clear} id='f2'>Clear</button>
                    </td>
                    <td>
                    <button onClick={handleClick} id='f3' value="/">&divide;</button>
                    </td>
                </tr></table>
                <table>
                <tr>
                    <td>
                       <button className='button1' onClick={handleClick} value={7}>7</button>
                    </td>
                    <td>
                        <button className='button1' onClick={handleClick} value={8}>8</button>
                    </td>
                    <td>
                        <button className='button1' onClick={handleClick} value={9}>9</button>
                    </td>
                    <td>
                        <button className='button1' onClick={handleClick} value='-'>&ndash;</button>
                    </td>
                </tr></table>
                <table>
                <tr>
                    <td>
                        <button className='button2' onClick={handleClick} value={4}>4</button>
                    </td>
                    <td>
                        <button className='button2' onClick={handleClick} value={5}>5</button>
                    </td>
                    <td>
                        <button className='button2' onClick={handleClick} value={6}>6</button>
                    </td>
                    <td>
                        <button className='button2' onClick={handleClick} value='+'>+</button>
                    </td>
                </tr>
                </table>
                <table>
                <tr>
                    <td>
                        <button className='button3' onClick={handleClick} value={1}>1</button>
                    </td>
                    <td>
                        <button className='button3' onClick={handleClick} value={2}>2</button>
                    </td>
                    <td>
                        <button className='button3' onClick={handleClick} value={3}>3</button>
                    </td>
                    <td>
                        <button className='button3' onClick={calculate} value='='>=</button>
                    </td>
                </tr>
                </table>
        
            </div>

        </div>
        <p className='creat'><center>Creat By Aritra</center></p>
        </>
        
        
            
    )
}
export default Calculator;