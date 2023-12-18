import React from 'react';
import './Password1.css';
import Background from '../Background/Background';

function Password1() {
    return (
        <><Background />
        <div className="password1_details">
            <p className="forgotpassword_text">Forgot password</p>
        <form className="password1_formelements">
            <label>Enter code</label><br />
            <input className="inputs_group" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
        </form>
        <button className='proceed_button'>Proceed</button> 
        </div></>
    );
}

export default Password1;