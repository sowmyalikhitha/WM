import React from 'react';
import '../Layout.css';
import './signup.css';
function UserDetails() {
    return (
        <>
            <div className='topbar'>
           <p className='time'> 22:00 | 100 MB/s</p>
           <img className='battery' src="./images/Battery.png" alt="Battery"></img>
           </div>
           <div className='images'>
           <img className='path' src="./images/path.png" alt="hline"></img>
           </div>
          
        </>
            
    );
}

export default UserDetails;