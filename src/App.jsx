import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LANDING from './components/LANDING';
import PORTFOLIOPAGE from './components/PORTFOLIOPAGE';
import KODETECH from './components/KODETECH';
import Navbar from './components/Navbar';
import WhoIsFlo from './components/WhoIsFlo';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  // const { pathname } = useLocation();
  return (

    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LANDING />} />
          <Route path="/portfolio" element={<WhoIsFlo />} />
          <Route path="/portfolio/kodetech" element={<KODETECH />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
