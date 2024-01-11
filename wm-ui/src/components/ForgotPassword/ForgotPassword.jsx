import React from 'react';
import Layout from '../Layout';
import './ForgotPassword.css';
function ForgotPassword() {
    return (
        <>
        <Layout/>
        <div className='fpheading'>
            <b className='fplable'>Forgot password</b>
            <input type='email' className='emailinput'></input>
            <text className='emailid'>Email ID</text>
            <button className='login' type="button">Send Verification code</button>
            <text className='logintext'>Back to login</text>
        </div>
            
        </>
    );
}

export default ForgotPassword;