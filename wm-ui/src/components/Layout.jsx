import React from 'react';
import './Layout.css';
function Layout() {
    return (
        
        <>
           <div className='topbar'>
           <p className='time'> 22:00 | 100 MB/s</p>
           <img className='battery' src="./images/Battery.png" alt="Battery"></img>
           </div>
           <div className='images'>
           <img className='hline' src="./images/Hline.png" alt="hline"></img>
           <img className='vector' src="./images/Vector.png" alt="vector"></img>
           <img className='bank' src="./images/Bank.png" alt="bank"></img>
           <img className='money' src="./images/Money.png" alt="money"></img>
           <img className='notes' src="./images/Notes.png" alt="notes"></img>
           <img className='vline' src="./images/Vline.png" alt="vline"></img>
           <img className='man' src="./images/Man.png" alt="man"></img>
           </div>
          
        </>
    );
}

export default Layout;
