import React from 'react';
import Layout from '../Layout';
import './Login.css'
function Login() {
    return (
        <>
        <Layout/>
        <div className="loginform">
            <b className='lable'>Log-in</b>
            <input type='email' className='loginpageemailinput'></input>
            <text className='emailid'>Email ID</text>
            <input type='password' className='loginpagepasswordinput'></input>
            <text className='password'>Password</text>
            <text className='forgotpassword'>Forgot password?</text>
           <button className='login' type="button">Log In</button>
           <text className='signuptext'>Don't have an account? Sign-up</text>
        </div>
        </>
    );
}

export default Login;