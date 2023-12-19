import React from 'react';
import germ from '../images/germ.png';
import man from '../images/man.png';
import tick from '../images/tick.png';
import toggle from '../images/toggle.png';
import './Onboard2Bg.css';
import wifi from '../images/wifi.png';

function Onboard2Bg() {
    return (
        <>
        <div className='top'>
            <p className='bg-text'>22:00 | 100 MB/s</p>
            <img className="wifi" src={wifi} alt='wifi'></img>
        </div>
        <p className="Onboard2bg_text1">Hi Sam!</p>
        <p className="Onboard2bg_text2">Enter the below details to ease your <br></br> onboarding experience.</p>
        <div className="Onboard2_bg">
        <img className="germ_img" src={germ} alt="germ"></img>
        <img className="man_img" src={man} alt="man"></img>
        <img className="tick_img" src={tick} alt="man"></img>
        <img className="toggle_img" src={toggle} alt="man"></img>
            </div>
            </>
    );
}

export default Onboard2Bg;