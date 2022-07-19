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
import Navigation from './Components/Models/Navigation';
import WithdrawForm from './Components/Pages/WithdrawForm';
import Withdraw from './Components/Pages/Withdraw';
import { VscChromeClose } from 'react-icons/vsc'
export const AppContext = React.createContext();


function App() {
  const [thirdOnBoard, setThirdOnBoard] = useState(false)
  const [firstOnBoard, setFirstOnBoard] = useState(true)
  const [secondOnBoard, setSecondOnBoard] = useState(false)
  const [signInLeft, setSignInLeft] = useState(false)
  const [signPageLeft, setSignPageLeft] = useState(false)
  const [forgetPageLeft, setForgetPageLeft] = useState(false)
  const [provider, setProvider] = useState('')
  const [bankOwner, setBankOwner] = useState('')
  return (
    <>
      <AppContext.Provider value={{ firstOnBoard, setFirstOnBoard, secondOnBoard, setSecondOnBoard, thirdOnBoard, setThirdOnBoard, signInLeft, setSignInLeft, signPageLeft, setSignPageLeft, forgetPageLeft, setForgetPageLeft, bankOwner, setBankOwner, provider, setProvider }}>
        <div className="root overflow-hidden">
          <div className="overflow-hidden flex border">
            <div className="border w-2/3">
              <VscChromeClose className='absolute right-[7.7vw] top-[6.7vh] text-xl'></VscChromeClose>
              <div className="mt-[4.5vh] ml-[7.7vw] bg-[#FFD400] bg-opacity-[37%] h-[40px] w-[40px] rounded-xl mb-[6vh]">
              </div>
              <div className='pl-[7.7vw]'>
                <h1 className='font-medium text-[18px] mb-[3.8vh]'>Main Menu</h1>
                <p className="mb-[3vh] text-[15px]">Home</p>
                <p className="mb-[3vh] text-[15px]">Transaction History</p>
                <p className="mb-[3vh] text-[15px]">Overview</p>
                <p className="mb-[3vh] text-[15px]">Refer & Earn</p>
                <p className="mb-[3vh] text-[15px]">Terms & Conditions</p>
                <p className="mb-[6.6vh] text-[15px]">Privacy & Policy</p>
                <p className="mb-[10.5vh] text-[15px]">Logout</p>
                <p className="mb-[1.4vh] text-[15px] font-medium">PayForBd  Merchant  App</p>
                <p className='text-[14px] opacity-50'>Version  1.0.0</p>
              </div>
            </div>
            <div className="translate-x-[55%] rotate-[-8deg] translate-y-[15%] overflow-hidden h-[100vh] w-1/2 shadiw rounded-xl">
              <Navigation />
              <Routes>
                <Route path="/" element={<OnBoardIndex />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forget-password" element={<ForgetPass />} />
                <Route path="/reset-password" element={<ResetPass />} />
                <Route path="/home" element={<Home />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/add-bank" element={<WithdrawForm />} />
              </Routes>
            </div>
          </div>
        </div>
        <Invalid />
      </AppContext.Provider>
    </>
  );
}

export default App;
