import React from 'react';
import Layout from '../Layout';
function Code() {
    return (
        <>
        <Layout/>
        <div className='fpheading'>
            <b className='fplable'>Forgot password</b>
            <input type='text' className='codeinput1'></input>
            <input type='text' className='codeinput2'></input>
            <input type='text' className='codeinput3'></input>
            <input type='text' className='codeinput4'></input>
            <text className='codelable'>Enter Code</text>
            <button className='login' type="button">Proceed</button>
        </div>
            
        </>
    );
}

export default Code;