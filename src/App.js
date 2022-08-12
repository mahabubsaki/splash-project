import { Route, Routes, useLocation } from 'react-router-dom';
import Invalid from './Components/Pages/Invalid';
import './App.css'
import 'animate.css';
import OnBoardIndex from './Components/Pages/OnBoardIndex';
import SignIn from './Components/Pages/SignIn';
import React, { useEffect, useRef, useState } from 'react';
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
  const [currLoc, setCurrentLoc] = useState('home')
  const [processing, setProcessing] = useState(false)
  const [openPopUp, setOpenPopUp] = useState(false)
  const [checkDrag, setCheckDrag] = useState(false)
  const [isCloseDragging, setIsCloseDragging] = useState(false)
  const [pageX2, setPageX2] = useState(0)
  const [isMenuDragging, setIsMenuDragging] = useState(false)
  const [pageX, setPageX] = useState(0)
  const sideBarRef = useRef()
  const homeRef = useRef()
  const { pathname } = useLocation()
  useEffect(() => {
    let percentage = Number(Number(pageX / window.screen.width).toFixed(2)) * 100
    console.log(percentage)
    if (percentage > 22) { setNavOpen(true) }
  }, [pageX])
  useEffect(() => {
    let percentage = Number(Number(pageX2 / window.screen.width).toFixed(2)) * 100
    if (percentage < 50) { setNavOpen(false) }
  }, [pageX2])
  return (
    <>
      <AppContext.Provider value={{ firstOnBoard, setFirstOnBoard, secondOnBoard, setSecondOnBoard, thirdOnBoard, setThirdOnBoard, signInLeft, setSignInLeft, signPageLeft, setSignPageLeft, forgetPageLeft, setForgetPageLeft, bankOwner, setBankOwner, provider, setProvider, navOpen, setNavOpen, currLoc, setCurrentLoc, processing, setProcessing, openPopUp, setOpenPopUp, setIsMenuDragging, isMenuDragging, setPageX, setCheckDrag }}>
        <div className={`root ${navOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
          {!navOpen && <Navigation />}
          <div onMouseMove={(e) => {
            if (isCloseDragging) {
              setPageX2(e.pageX)
            }
            else {

              setPageX2(0)
            }
            if (isMenuDragging) {
              setPageX(e.pageX)
            }
            else {

              setPageX(0)
            }
          }} onMouseLeave={() => {

            setPageX2(0)

            setIsCloseDragging(false)
            setPageX(0)

            setIsMenuDragging(false)
          }} onMouseUp={() => {

            setPageX2(0)

            setIsCloseDragging(false)
            setPageX(0)

            setIsMenuDragging(false)
          }}
            onTouchMove={(e) => {

              if (isCloseDragging) {
                setPageX2(e.touches[0].pageX)
              }
              if (isMenuDragging) {
                setPageX(e.touches[0].pageX)
              }
            }} className={`${(navOpen && pathname.includes('home')) ? `overflow-hidden` : 'overflow-auto'} ${(pathname.includes('home') && navOpen) && 'flex'}`}>
            {pathname.includes('home') && <div ref={sideBarRef} className={`duration-300 relative w-[55%] ${navOpen ? '-translate-x-[0%]' : '-translate-x-[100%]'}`}>
              <div className={`${(pathname.includes('home') && navOpen) ? 'block' : 'absolute'}`}>
                <VscChromeClose onMouseDown={() => {
                  setIsCloseDragging(true)

                }}
                  onTouchStart={(e) => {
                    setIsCloseDragging(true)

                  }}
                  onMouseUp={() => {

                    setPageX2(0)
                    setIsCloseDragging(false)
                  }} onTouchEnd={(e) => {
                    setPageX2(0)
                    setIsCloseDragging(true)
                  }} className={`absolute -right-[38.3vw] top-[65px] text-2xl cursor-pointer ${!navOpen && 'hidden'}`} onClick={() => setNavOpen(false)}></VscChromeClose>
                <div className="mt-[54px] ml-[7.7vw] bg-[#FFD400] bg-opacity-[37%] h-[40px] w-[40px] rounded-xl mb-[34px]">
                </div>
                <div className={`pl-[7.7vw] ${styles.Transactions}`}>
                  <h1 className='font-medium text-[18px] mb-[31px]'>Main Menu</h1>
                  <p className={`mb-[25px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'home' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('home')}><BiHomeAlt className='text-2xl' />Home
                    {navState === 'home' && <span className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></span>}
                  </p>
                  <p className={`mb-[23px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'transaction' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('transaction')}><TbReportSearch className='text-2xl' />Transaction History
                    {navState === 'transaction' && <span className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></span>}
                  </p>
                  <p className={`mb-[23px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'overview' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('overview')}><BsClipboardData className='text-2xl' /> Overview
                    {navState === 'overview' && <span className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></span>}
                  </p>
                  <p className={`mb-[26px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'refer' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('refer')}><FiUsers className='text-2xl' /> Refer & Earn
                    {navState === 'refer' && <span className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></span>}
                  </p>
                  <p className={`mb-[26px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'terms' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('terms')}><TbNotes className='text-2xl' /> Terms & Conditions
                    {navState === 'terms' && <span className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></span>}
                  </p>
                  <p className={`mb-[54px] text-[15px] flex items-center gap-2 cursor-pointer relative ${navState === 'privacy' && 'text-[#3C2CF8]'}`} onClick={() => setNavState('privacy')}><img src={privacy} alt="" /> Privacy & Policy
                    {navState === 'privacy' && <span className="absolute w-[10px] top-0 -left-[8.2vw] bottom-0 bg-[#3C2CF8] rounded-r-[7px]"></span>}
                  </p>

                  <p className="mb-[86px] text-[15px] flex items-center gap-2 cursor-pointer"><MdOutlineLogout className='text-2xl' /> Logout</p>
                  <p className="mb-[12px] text-[15px] font-medium">PayForBd  Merchant  App</p>
                  <p className='text-[14px] mb-[99px] opacity-50'>Version  1.0.0</p>
                </div>
              </div>
            </div>}
            <div ref={homeRef} className={`${navOpen ? `translate-x-[55%] rotate-[-7.52deg] translate-y-[124px] overflow-hidden w-[45%] h-[100vh] shadiw` : 'translate-x-0 translate-y-0 rotate-0 w-auto overflow-auto h-auto'}  rounded-xl  duration-300`}>
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
