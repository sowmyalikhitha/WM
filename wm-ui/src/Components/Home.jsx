import React from 'react';
import './Background.css';
import Background from "./Background"
function Home() {
    return (
        <>
        <Background/>
        <div className='Buttons'> 
           <button className='loginButton' >Log In</button>
        <button className='SignupButton' >Sign Up</button>  
        </div>
        </>
    );
}

export default Home;