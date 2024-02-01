import React from 'react';
import person2 from '../images/person2.png';
import arc2 from '../images/arc2.png';
import hand from '../images/hand.png';
import moneybank from '../images/moneybank.png';
import line3 from '../images/line3.png';
import wifi from '../images/wifi.png';
import './Onboard3Bg.css';

function Onboard3Bg() {
    return (
        <>
        <div className='top'>
            <p className='bg-text'>22:00 | 100 MB/s</p>
            <img className="wifi" src={wifi} alt='wifi'></img>
        </div>
        <div className="Onboard3_bg">
        <img className="line3_img" src={line3} alt="line"></img>
        <img className="arc2_img" src={arc2} alt="arc"></img>
        <img className="person2_img" src={person2} alt="person"></img>
        <img className="hand_img" src={hand} alt="hand"></img>
        <img className="moneybank_img" src={moneybank} alt="moneybank"></img>
        </div>
        </>
    );
}

export default Onboard3Bg;