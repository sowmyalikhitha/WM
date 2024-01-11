import './App.css';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Code from './components/ForgotPassword/Code';
import NewPassword from './components/ForgotPassword/NewPassword';
import UserName from './components/signup/UserName';
import UserDetails from './components/signup/UserDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotPassword" element={<ForgotPassword />}/>
        <Route path="/code" element={<Code />}/>
        <Route path="/newPassword" element={<NewPassword />}/>
        <Route path="/signup1" element={<UserName />}/>
        <Route path="/signup2" element={<UserDetails />}/>
      </Routes>
      </BrowserRouter>
          
    
    </div>
  );
}

export default App;
