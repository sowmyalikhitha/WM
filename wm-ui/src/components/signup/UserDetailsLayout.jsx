import React from 'react';
import './signup.css';
function UserDetailsLayout() {
    return (
        <>
        <div className='topbar'>
           <p className='time'> 22:00 | 100 MB/s</p>
           <img className='battery' src="./images/Battery.png" alt="Battery"></img>
           </div>
           <div className='bg'>
           <img className='signuppath' src="./images/Path.png" alt="path"></img>
           <img className='enable' src="./images/Enable.png" alt="enable"></img>
           <img className='person' src="./images/Person.png" alt="person"></img>
           <img className='ribbon' src="./images/Ribbon.png" alt="ribbon"></img>
           </div>
           </>
    );
}

export default UserDetailsLayout;