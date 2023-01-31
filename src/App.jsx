import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LANDING from './components/LANDING';
import PORTFOLIOPAGE from './components/PORTFOLIOPAGE';
import KODETECH from './components/KODETECH';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import WhoIsFlo from './components/WhoIsFlo';
import Footer from './components/Footer';
import Playground from './components/Playground';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
function App() {
  const location = document.location;
  console.log(location);
  const [currentLocation, setCurrentLocation] = useState('')
  useEffect(() => {
    setCurrentLocation(location)
  }, [currentLocation])
  return (

    <Router>
      {/* <p onClick={handleLightMode}>light mode</p> */}
      <ScrollToTop />
      <div className='dark:bg-lightShade  absolute-parent'>
        <Navbar />
        <Routes>
          <Route path="/" key={document.location.href} element={<LANDING />} />
          <Route path="/about" key={document.location.href} element={<WhoIsFlo />} />
          <Route path="/menu" key={document.location.href} element={<Menu />} />
          <Route locationProps={location} path="/kodetech" key={document.location.href} element={<KODETECH />} />
          <Route path="/playground" key={document.location.href} element={<Playground />} />
        </Routes>
        < Footer locationProps={location} />
      </div>
    </Router>
  )
}

export default App
