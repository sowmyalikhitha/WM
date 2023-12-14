import React from 'react';
import Background from './Background';
import './Login.css';

function Login() {
    return (
        <>
        <Background />
        <div className="login_details">
        <p className="login_text">Log-in</p>
            <form className="formelements">
                <label>Email ID</label><br></br>
                <input type="text" name="email"></input><br></br>
                <label>Password</label><br></br>
                <input type="text" name="password"></input>
            </form>
            <a className="forgotpassword_link" href="/">Forgot password?</a>
            <div>
                <button className="login_button">Login</button><br></br>
                <a className="signup_link" href="/">Don't have an account? Sign-up</a>
            </div>
        </div>
        </>
    );
}

export default Login;