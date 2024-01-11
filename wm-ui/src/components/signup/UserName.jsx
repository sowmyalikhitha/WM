import React from 'react';
import Layout from '../Layout';
import '../ForgotPassword/ForgotPassword.css';
import '../Login/Login.css';
import './signup.css';
import MultiStepProgressBar from './MultiStepProgressBar';
import { useState } from 'react';
function UserName() {
  const [name, setName] = useState('');
  const [buttonColor, setButtonColor] = useState('#B0B0B0');
  const [stepItemColor,setStepItemColor]=useState('#EBEBEB');
  const [stepLineColor,setStepLineColor]=useState('#EBEBEB')
  const handleNameChange = (event) => {
    const inputText = event.target.value;
    setName(inputText);
    
    

    if (inputText.length >= 3) {
        setButtonColor('#684EDC'); // Change button color
        setStepItemColor('#684EDC');
        setStepLineColor('#684EDC')
        
      } else {
        setButtonColor('#B0B0B0'); // Revert button color
      }
    };
  
    return (
        <>
        <Layout/>
        <div className='signupheading'>
        <MultiStepProgressBar/>
            <p className='signuplable'><b className='welcome'>Welcome to FinGrow, </b>
            <p className='lets'>Let's get to know each other!</p></p>
            <input 
            type='text' 
            className='nameinput'
            value={name}
            onChange={handleNameChange}
            ></input>
            <text className='namelable'>What's your name</text>
            <button 
            className='getstarted' 
            type="button" 
            style={{ backgroundColor: buttonColor ,stepItem:stepItemColor,stepLine:stepLineColor}}
            >Get Started
            </button>
            
        </div>
            
        </>
    );
}

export default UserName;