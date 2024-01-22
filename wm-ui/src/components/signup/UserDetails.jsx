import React from 'react';
import '../Layout.css';
import './signup.css';
import '../Login/Login.css';
import Layout from'../Layout';
import MultiStepProgressBar from './MultiStepProgressBar';
import UserDetailsLayout from './UserDetailsLayout';
function UserDetails() {
    return (

            <>
            <UserDetailsLayout/>
        <div className='signupheading1'>
        <MultiStepProgressBar/>
        <input type='email' className='signuppageemailinput'></input>
        <text className='signuppageemaillable'>Email ID</text>
        <input type='password' className='setpasswordinput'></input>
        <text className='setpassword'>Set a password</text>
        <input type='text' className='ssninput'></input>
        <text className='ssn'>SSN</text>
        <button 
            className='submitbutton' 
            type="button" 
            >Submit
            </button>

           </div>
           </>
          

            
    );
}

export default UserDetails;