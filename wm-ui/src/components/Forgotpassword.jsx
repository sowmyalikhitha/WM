import React from 'react';
import './Forgotpassword.css';
import Background from './Background.jsx'

function Forgotpassword() {
    return (
        <>
        <Background />
        <div className="forgotpassword_details">
            <p className="forgotpassword_text">Forgot password</p>
            <form className="formelements">
                <label>Email ID</label><br></br>
                <input type="text" name="email"></input>
            </form>
            <div className="bottom_part">
                <button className="verification_button">Send Verification code</button><br></br>
                <a className="loginpage_link" href="/">Back to login</a>
            </div>
        </div></>
    );
}

export default Forgotpassword;