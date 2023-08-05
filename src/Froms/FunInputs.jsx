import React, {useState} from 'react'

const FunInputs = () => {
    const [name, setName] = useState('');
    const [pass, setpass] = useState('');
    const [Dob, setDOB] = useState('');
    const [gen, setGen] = useState('');
    const [Add, setAdd] = useState('');
    const [Course, setcourse] = useState('');
    const [Language, setlan] = useState('');
    const [Image, setImg] = useState('');


    const handleTextChange =(event)=>{
        setName(event.target.value)
    }
    const handlePassChange =(pass)=>{
        setpass(pass.target.value)
    }
    const handleDOBChange =(DOB)=>{
        setDOB(DOB.target.value)
    }
    const handleGenChange =(Gen)=>{
        setGen(Gen.target.value)
    }
    const handleAddChange =(Add)=>{
        setAdd(Add.target.value)
    }
    const handleCourseChange =(Course)=>{
        setcourse(Course.target.value)
    }
    const handlelanChange =(lan)=>{
        setlan(lan.target.value)
    }
    const handleImgChange =(Img)=>{
        setImg(Img.target.value)
    }
    const handleSubmit =()=>{
        document.getElementById('f1').innerHTML = name;
        document.getElementById('f2').innerHTML = pass;
        document.getElementById('f3').innerHTML = Dob;
        document.getElementById('f4').innerHTML = gen;
        document.getElementById('f5').innerHTML = Add;
        document.getElementById('f6').innerHTML = Course;
        document.getElementById('f7').innerHTML = Language;
        document.getElementById('f8').innerHTML = Image;

    }
    const handleReset =()=>{
       setName("");
       setpass("");
       setDOB("");
       setGen("");
       setAdd("");
       setcourse("");
       setlan("");
       setImg(""); 
    };


return(
    <body bgcolor='09FBEB'>
<div>

		<center><h1><b><u>Welcome to my page</u></b></h1>
		<h1>THis is a html form</h1></center>
    
        
            <center><table bgcolor='FFBBC0' border='2px' hight="600"width="400">
            <tr>
			<td align="center" colspan="4"><b>User Registration</b></td>
		    </tr>
                <tr>
                    <td>Name:-</td>
                    <td>
                        <input type='text' placeholder='Enter name' value={name} onChange={handleTextChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Password:-</td>
                    <td>
                        <input type='password' placeholder='Enter pessword' value={pass} onChange={handlePassChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Date of Birth:-</td>
                    <td>
                        <input type='date' placeholder='Enter DOB' value={Dob} onChange={handleDOBChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <input type='radio' name='' value="Male" onChange={handleGenChange}/>Male
                        <input type='radio' name='' value="Female" onChange={handleGenChange}/>Female
                        <input type='radio' name='' value="Other" onChange={handleGenChange}/>Other

                    </td>
                </tr>
                <tr>
                    <td>Address:-</td>
                    <td>
                        <textarea type='text' placeholder='Enter address' value={Add} onChange={handleAddChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Course:-</td>
                    <td>
                        <select value={Course} onChange={handleCourseChange}>
                            <option>SELECT</option>
                            <option>BCA</option>
                            <option>MCA</option>
                            <option>M.Tech</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Language:-</td>
                    <td>
                        <input type='checkbox' value='English' onChange={handlelanChange}/>English
                        <input type='checkbox' value='Bengal' onChange={handlelanChange}/>bengal
                        <input type='checkbox' value='Hindi' onChange={handlelanChange}/>Hindi

                    </td>
                </tr>
                <tr>
				<td>Images:</td>
				<td colspan="3"><input type="file" value={Image} onChange={handleImgChange}/></td>
			</tr>
                <tr>
                    <th colSpan='2'>
                        <button onClick={handleSubmit}>submit</button>
                        <button onClick={handleReset}>Reset</button>
                    </th>
                </tr>
            </table></center><br></br>
        
      <fieldset>
        <legend><b>DATA STORE</b></legend>
            <table>
                <tr>
                    <td>NAME:-</td>
                    <td>
                        <em id='f1'></em>
                    </td>
                </tr>
                <tr>
                    <td>PASSWORD:-</td>
                    <td>
                        <em id='f2'></em>
                    </td>
                </tr>
                <tr>
                    <td>Date of Birth:-</td>
                    <td>
                        <em id='f3'></em>
                    </td>
                </tr>
                <tr>
                    <td>Gender:-</td>
                    <td>
                        <em id='f4'></em>
                    </td>
                </tr>
                <tr>
                    <td>Address:-</td>
                    <td>
                        <em id='f5'></em>
                    </td>
                </tr>
                <tr>
                    <td>Course:-</td>
                    <td>
                        <em id='f6'></em>
                    </td>
                </tr>
                <tr>
                    <td>Language:-</td>
                    <td>
                        <em id='f7'></em>
                    </td>
                </tr>
                <tr>
                    <td>Image:-</td>
                    <td>
                        <em id='f8'></em>
                    </td>
                </tr>
            </table></fieldset>
    </div>   </body>
    
)
}

export default FunInputs;