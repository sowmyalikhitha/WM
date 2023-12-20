import React from 'react';
import './Onboard2.css';
import Onboard2Bg from "../Onboard2Bg/Onboard2Bg";
import MultiStepProgressBar from "../MultiStepProgressBar/MultiStepProgressBar";

function Onboard2() {
    return (
        <>
        <Onboard2Bg />
        <div className="onboard2_details">
        <MultiStepProgressBar />
        <form className="onboard2_formelements">
            <label>Email ID</label><br></br>
            <input type="text" name="name"></input><br></br>
            <label>Set a password</label><br></br>
            <input type="text" name="password"></input><br></br>
            <label>SSN</label><br></br>
            <input type="text" name="SSN"></input><br></br>
            <button className="Submit_button">Submit</button>
        </form>
        </div>
        </>
    );
}

export default Onboard2;