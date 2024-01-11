import React from 'react';
import Layout from '../Layout';
import './ForgotPassword.css';
import '../Login/Login.css';
function NewPassword() {
    return (
        <>
        <Layout/>
        <div className='fpheading'>
            <b className='fplable'>New Password</b>
            <input type='text' className='newpasswordinput'></input>
            <text className='newpassword'>New Password</text>
            <button className='login' type="button">Proceed</button>
            
        </div>
            
        </>
    );
}

export default NewPassword;