import React from 'react';
function SignupLayout() {
    return (
        <>
        <div className='topbar'>
           <p className='time'> 22:00 | 100 MB/s</p>
           <img className='battery' src="./images/Battery.png" alt="Battery"></img>
           </div>
           <div className='signupimages'>
           <img className='signupbg' src="./images/Signupbg.png" alt="signupbg"></img>
           <img className='signupman' src="./images/SignupMan.png" alt="signupman"></img>
           </div>
           </>
    );
}

export default SignupLayout;