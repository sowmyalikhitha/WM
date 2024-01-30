import React from 'react';
import './Login.css';
import Background from '../Background/Background';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleHomepageLoginButtonClick(){
        navigate('/Homepage');
    }

    return (
        <>
        <Background />
        <div className="login_details">
        <p className="login_text">Log-in</p>
            <form className="login_formelements">
                <label>Email ID</label><br></br>
                <input type="text" name="email"></input><br></br>
                <label>Password</label><br></br>
                <input type="text" name="password"></input>
            </form>
            <a className="forgotpassword_link" href="/">Forgot password?</a>
            <div>
                <button className="login_button" onClick={handleHomepageLoginButtonClick}>Login</button><br></br>
                <a className="signup_link" href="/signup">Don't have an account? Sign-up</a>
            </div>
        </div>
        </>
    );
}

export default Login;