import React, {useEffect, useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const data={email:"", password:""};
   const [inputData, SetInputData] = useState(data);
   const [flag, setFlag] = useState(false);
   useEffect(()=>{
          console.log("Registered");
   },[flag])

     function handleData(e){
        SetInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
     }
     function handleSubmit(e){
        e.preventDefault();
        if( !inputData.email || !inputData.password){
            alert ("All fields are Mandatory")
        }
        else{
           setFlag(true);
        }
     }
  return (
    <div>
    <pre>{(flag)? <h2 className='ui-define'>Hello {inputData.email}, You Have Registered
    </h2>: ""}</pre>
    <form className='container' onSubmit={handleSubmit}>
    <div className='header'>
      <h1>Registration Form</h1>     
    </div>
    <div>
       <label htmlFor='email'>Email</label><br/>
       <input type='email' id='email' className='input' placeholder='Enter Your First Email' value={inputData.name} onChange={handleData} name='email'/>      
    </div>
    <div>
       <label htmlFor='password'>Password</label><br/>
       <input type='password' id='password' className='input' placeholder='Enter Your Last Password' value={inputData.lname} onChange={handleData} name='password'/>      
    </div>
    <div>
      <button type='submit'>Submit</button>
    </div>
  
  </form>
    </div>
  )
}

export default Login;