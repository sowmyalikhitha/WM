import "./App.css";
// import Background from "./components/Background/Background";
// import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
// import Password1 from "./components/Password1/Password1";
// import Password2 from "./components/Password2/Password2";
import Onboard1 from "./components/Onboard1/Onboard1";
// import Homepage from "./components/Homepage/Homepage";
// import MultiStepProgressBar from "./components/MultiStepProgressBar/MultiStepProgressBar";
import Onboard2 from "./components/Onboard2/Onboard2";
import Onboard2Bg from "./components/Onboard2Bg/Onboard2Bg";
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
     <>
     <div className="App">
     {/* <Routes>
      <Route index element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Onboard1 />} />
      <Route exact path="/homepage" element={<Homepage />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/" element={<Home />} />     
      </Routes> */}

        {/* <Background /> */}
        {/* <Forgotpassword /> */}
        {/* <Password1 /> */}
        {/* <Password2 /> */}
        <Onboard1 />
        {/* <Onboard2 /> */}
        {/* <Onboard2Bg /> */}
        {/* <MultiStepProgressBar /> */}
    </div>
    </>
  );
}

export default App;
