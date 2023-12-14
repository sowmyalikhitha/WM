import React from 'react';
import './Layout.css';
import Layout from './Layout';
function Home() {
    return (
        <>
        <Layout/>
        <div className='buttons'>
           <button className='login' type="button">Log In</button>
           <button className='signup' type="button">Sign Up</button> 
        </div>
        </>
    );
}

export default Home;