import React from 'react';
import './Background.css';
import wifi from '../images/wifi.png';
import line2 from '../images/line2.png';
import arc from '../images/arc.png';
import line1 from '../images/line1.png';
import person from '../images/person.png';
import papers from '../images/papers.png';
import moneybank from '../images/moneybank.png';
import todo from '../images/todo.png';


function Background() {
    return (
        <>
        <div className='top'>
        <p className='bg-text'>22:00|100 MB/s</p>
        <img className="wifi" src={wifi} alt='wifi'></img>
        </div>
        <div className='bgimage'>
        <img className='line2' src={line2} alt="line2"></img>
        <img className='arc' src={arc} alt="arc"></img>
        <img className='line1' src={line1} alt="line1"></img>
        <img className='person' src={person} alt="person"></img>
        <img className='moneybank' src={moneybank} alt="moneybank"></img>
        <img className='papers' src={papers} alt="papers"></img>
        <img className='todo' src={todo} alt="todo"></img> 
        </div>
        </>
    )
}

export default Background;