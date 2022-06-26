import { Route, Routes } from 'react-router-dom';
import Invalid from './Components/Pages/Invalid';
import './App.css'
import 'animate.css';
import OnBoardIndex from './Components/Pages/OnBoardIndex';
import SignIn from './Components/Pages/SignIn';
import React, { useState } from 'react';
import Register from './Components/Pages/Register';
import ForgetPass from './Components/Pages/ForgetPass';
import ResetPass from './Components/Pages/ResetPass';
import Home from './Components/Pages/Home';
export const AppContext = React.createContext();


function App() {
  const [thirdOnBoard, setThirdOnBoard] = useState(false)
  const [firstOnBoard, setFirstOnBoard] = useState(true)
  const [secondOnBoard, setSecondOnBoard] = useState(false)
  return (
    <>
      <AppContext.Provider value={{ firstOnBoard, setFirstOnBoard, secondOnBoard, setSecondOnBoard, thirdOnBoard, setThirdOnBoard }}>
        <div className="root">
          <Routes>
            <Route path="/" element={<OnBoardIndex />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPass />} />
            <Route path="/reset-password" element={<ResetPass />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Invalid />
      </AppContext.Provider>
    </>
  );
}

export default App;
