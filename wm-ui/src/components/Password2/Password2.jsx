import React from 'react';
import Background from '../Background/Background';
import './Password2.css';

function Password2() {
    return (
        <><Background />
        <div className="password2_details">
            <p className="password2_text">New password</p>
        <form className="password2_formelements">
            <label>New password</label><br />
            <input type="text" name="new password"></input>
        </form>
        <button className='proceed_button'>Proceed</button> 
        </div></>
    );
}

export default Password2;