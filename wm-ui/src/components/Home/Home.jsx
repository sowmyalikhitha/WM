import React from 'react';
import Background from "../Background/Background";
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleLoginButtonClick(){
    navigate("/login")
  }

  function handleSignupButtonClick(){
    navigate("/signup")
  }

    return (
          <>
          <Background />
          <div>
            <button className="login_button" onClick={handleLoginButtonClick}>Log In</button>
            <button className="signup_button" onClick={handleSignupButtonClick}>Sign Up</button>
          </div></>
    );
}

export default Home;