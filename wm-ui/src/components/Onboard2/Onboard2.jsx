import React,{useState} from 'react';
import './Onboard2.css';
import Onboard2Bg from "../Onboard2Bg/Onboard2Bg";
import MultiStepProgressBar from "../MultiStepProgressBar/MultiStepProgressBar";

function Onboard2() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [SSN, setSSN] = useState("");
    const [buttonColor, setButtonColor] = useState("default"); 
    const [stepPercentage,setstepPercentage] = useState(50) ;

    const handleChange = (event) => {
        const { name, value } = event.target;
      
        // Update state based on input name
        if (name === "Email") {
          setEmail(value);
        } else if (name === "Password") {
          setPassword(value);
        } else if (name === "SSN") {
          setSSN(value);
        }
      
        // Check conditions based on individual state values
        if (Email.length > 15 && Password.length > 8 && SSN.length > 19) {
            setstepPercentage(70);
            setButtonColor("colorchange");
        } else {
            setstepPercentage(50);
            setButtonColor("default");
        }
      };
    const handleOnboard2ButtonClick = () => {
      
    }

    return (
        <>
        <Onboard2Bg />
        <div className="onboard2_details">
        <div><MultiStepProgressBar stepPercentage={stepPercentage}/> </div>
        <form className="onboard2_formelements" onChange={handleChange}>
            <label>Email ID</label><br></br>
            <input type="text" name="Email" value={Email}></input><br></br>
            <label>Set a password</label><br></br>
            <input type="password" name="Password" value={Password}></input><br></br>
            <label>SSN</label><br></br>
            <input type="text" name="SSN" value={SSN}></input><br></br>
            <button className={`Submit_button ${buttonColor}`} onClick={handleOnboard2ButtonClick}>Submit</button>
        </form>
        </div>
        </>
    );
}

export default Onboard2;