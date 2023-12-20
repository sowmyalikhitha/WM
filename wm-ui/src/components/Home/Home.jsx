import React from 'react';
import Background from "../Background/Background";
import './Home.css';

function Home() {
    return (
          <>
          <Background />
          <div>
            <button className="login_button">Log In</button>
            <button className="signup_button">Sign Up</button>
          </div></>
    );
}

export default Home;