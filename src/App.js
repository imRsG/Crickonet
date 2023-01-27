import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ConstactUs from './pages/ConstactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import UserAgreement from './pages/UserAgreement';
import Termofuse from './pages/Termofuse';
import PRIVACYPOLICY from './pages/PRIVACYPOLICY';
import LatestNew from './pages/LatestNew';
import BLogs from './pages/BLogs';
import Cricketjobs from './pages/Cricketjobs';
import GALLERY from './pages/GALLERY';
import CoachProfile from './pages/CoachProfile';



function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/contactus" element={<ConstactUs />} />
          <Route path="/pages/termofuse" element={<Termofuse />} />
          <Route path="/pages/useragreement" element={<UserAgreement />} />
          <Route path='/pages/privacypolicy' element={<PRIVACYPOLICY/>}/>
          <Route path='/pages/laatestnews' element={<LatestNew/>} />
          <Route path='/pages/blogs' element={<BLogs/>} />
          <Route path='/pages/cricketjobs' element={<Cricketjobs/>} />
          <Route path='/pages/gallery' element={<GALLERY/>} />
          <Route path='/pages/coachprofile' element={<CoachProfile />} />
        </Routes>
        <Footer/>
  </BrowserRouter>
  );
}

export default App;
