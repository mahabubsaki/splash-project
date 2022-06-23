import { Route, Routes } from 'react-router-dom';
import Invalid from './Components/Pages/Invalid';
import './App.css'
import 'animate.css';
import OnBoardIndex from './Components/Pages/OnBoardIndex';
import SignIn from './Components/Pages/SignIn';


function App() {
  return (
    <>
      <div className="root">
        <Routes>
          <Route path="/" element={<OnBoardIndex />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
      <Invalid />
    </>
  );
}

export default App;
