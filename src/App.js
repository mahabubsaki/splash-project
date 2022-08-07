import { Route, Routes, useLocation } from 'react-router-dom';
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
import { BiHomeAlt } from 'react-icons/bi'
import { TbReportSearch, TbNotes } from 'react-icons/tb'
import { BsClipboardData } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineLogout } from 'react-icons/md'
import privacy from './Components/Assets/icon.svg'
import styles from '../src/Styles/Home.module.css'
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
  const [navState, setNavState] = useState('home')
  const [navOpen, setNavOpen] = useState(false)
  const { pathname } = useLocation()
  return (
    <>
      <AppContext.Provider value={{ firstOnBoard, setFirstOnBoard, secondOnBoard, setSecondOnBoard, thirdOnBoard, setThirdOnBoard, signInLeft, setSignInLeft, signPageLeft, setSignPageLeft, forgetPageLeft, setForgetPageLeft, bankOwner, setBankOwner, provider, setProvider, navOpen, setNavOpen }}>
        <div className={`root ${navOpen ? 'overflow-hidden' : 'overflow-auto'} duration-300`}>
          {!navOpen && <Navigation />}
          <div className={`${(navOpen && pathname.includes('home')) ? `overflow-hidden` : 'overflow-auto'} ${pathname.includes('home') && 'flex  duration-300'}`}>
            {pathname.includes('home') && <div className={`duration-300 relative ${navOpen ? '-translate-x-[0%] w-[55%]' : '-translate-x-[100%] w-0'}`}>
              <div className={`${(pathname.includes('home') && navOpen) ? 'block' : 'hidden'}`}>
                <VscChromeClose className='absolute -right-[38.3vw] top-[65px] text-2xl cursor-pointer' onClick={() => setNavOpen(false)}></VscChromeClose>
                <div className="mt-[54px] ml-[7.7vw] bg-[#FFD400] bg-opacity-[37%] h-[40px] w-[40px] rounded-xl mb-[34px]">
                </div>
                <div className={`pl-[7.7vw] ${styles.Transactions}`}>
                  <h1 className='font-medium text-[18px] mb-[31px]'>Main Menu</h1>
                  <p className={`mb-[25px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'home' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('home')}><BiHomeAlt className='text-2xl' />Home
                    {navState === 'home' && <div className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></div>}
                  </p>
                  <p className={`mb-[23px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'transaction' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('transaction')}><TbReportSearch className='text-2xl' />Transaction History
                    {navState === 'transaction' && <div className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></div>}
                  </p>
                  <p className={`mb-[23px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'overview' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('overview')}><BsClipboardData className='text-2xl' /> Overview
                    {navState === 'overview' && <div className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></div>}
                  </p>
                  <p className={`mb-[26px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'refer' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('refer')}><FiUsers className='text-2xl' /> Refer & Earn
                    {navState === 'refer' && <div className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></div>}
                  </p>
                  <p className={`mb-[26px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'terms' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('terms')}><TbNotes className='text-2xl' /> Terms & Conditions
                    {navState === 'terms' && <div className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></div>}
                  </p>
                  <p className={`mb-[54px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'privacy' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('privacy')}><img src={privacy} alt="" /> Privacy & Policy
                    {navState === 'privacy' && <div className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></div>}
                  </p>

                  <p className="mb-[86px] text-[15px] flex items-center gap-2 cursor-pointer"><MdOutlineLogout className='text-2xl' /> Logout</p>
                  <p className="mb-[12px] text-[15px] font-medium">PayForBd  Merchant  App</p>
                  <p className='text-[14px] mb-[99px] opacity-50'>Version  1.0.0</p>
                </div>
              </div>
            </div>}
            <div className={`${navOpen ? `translate-x-[55%] rotate-[-7.52deg] translate-y-[124px] overflow-hidden w-[45%] h-[100vh] shadiw` : 'translate-x-0 translate-y-0 rotate-0 w-auto overflow-auto h-auto'}  rounded-xl duration-300`}>
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
