import React from 'react';
import './Background.css';
function Background() {
    
    return (
        <>
        <div className='header'> 
            <p className='text'>22:00 | 100 MB/s</p> 
            <img className='wifi' src="./images/wifi.png" alt='wifiimg'/>
        </div>
       
        <div className='images'>
        <img className='line' src="./images/line.png" alt='lineimg'/>
        <img className='arc' src="./images/arc.png" alt='arcimg'/>
        <img className='smallline' src="./images/smallline.png" alt='smalllineimg'/>
        <img className='home' src="./images/home.png" alt='homeimg'/>
        <img className='money' src="./images/money.png" alt='moneyimg'/> 
        <img className='notes' src="./images/notes.png" alt='notesimg'/> 
        <img className='boy' src="./images/boy.png" alt='img'/> 
        </div>

        </>
    );
}


export default Background;