import React from 'react';
import "./Onboard1.css";
import Background from '../Background/Background';
import MultiStepProgressBar from '../MultiStepProgressBar/MultiStepProgressBar';
import { useState } from 'react';

const Onboard1 = ({}) => {
  const [name, setName] = useState("");
  const [stepPercentage, setStepPercentage] = useState(0);
  const [buttonColor, setButtonColor] = useState("default"); 

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    if (newName.length > 6) {
      setStepPercentage(45);
      setButtonColor("colorchange");
    } else {
      setStepPercentage(0);
      setButtonColor("default");
    }
  };

    return (
     <>
     <Background />
     <div className="onboard1_details">
        <div className="onboard1_bar">
        <MultiStepProgressBar stepPercentage = {stepPercentage}/> </div>
        <p className="onboard1_text1">Welcome to FinGrow,</p>
        <p className="onboard1_text2">Let's get to know each other!</p>
        <form className="onboard1_formelements">
            <label>What's your name?</label><br></br>
            <input type="text" name={name} onChange={handleNameChange}></input>
        </form>
        <button className={`GetStarted_button ${buttonColor}`}>Get Started</button>
     </div>
     </> 
    );
}

export default Onboard1;