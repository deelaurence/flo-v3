import { Link, useLocation } from 'react-router-dom'

import React from 'react'
import Menu from './Menu'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
const Navbar = ({ locationProps }) => {
  const location = useLocation()
  let html = document.querySelector("html")
  let toggle = document.querySelector('.toggle')
  const [activeWork, setActiveWork] = useState(true);
  const [activePlayground, setActivePlayground] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeResume, setActiveResume] = useState(false);
  const [refreshBlendBar, setRefreshBlendBar] = useState(false)
  const [currentLocation, setCurrentLocation] = useState("")
  useEffect(() => {
    console.log(locationProps.href);
    setCurrentLocation(location)
    if (locationProps.href.includes('about')) {
      console.log('about');
      setActiveAbout(true)
      setActiveWork(false)
      setActivePlayground(false)
      return
    }
    if (locationProps.href.includes('playground')) {
      console.log('playground active');
      setActivePlayground(true)
      setActiveWork(false)
      return
    }
    else {
      setActiveAbout(false)
      setActivePlayground(false)
      setActiveWork(true)
      return
    }
  }, [activeAbout, activeWork, activePlayground])

  const handleActiveAbout = () => {
    setActiveAbout(true)
    setActiveWork(false)
    setActivePlayground(false)
  }
  const handleActivePlayground = () => {
    setActiveAbout(false)
    setActiveWork(false)
    setActivePlayground(true)
  }
  const handleActiveWork = () => {
    setActiveAbout(false)
    setActiveWork(true)
    setActivePlayground(false)
  }

  useEffect(() => {
    let updateNavbar = setTimeout(() => {
      setRefreshBlendBar(true)
    }, 1000);
    return () =>
      clearTimeout(updateNavbar)

  })


  let blendBar = document.querySelector('.blend-bar')
  // console.log(blendBar);


  // console.log(locationProps);
  // const handleNightMode = () => {
  //   setNight(!night)
  //   console.log('niiight');
  // }

  // if (night) {
  //   html.classList.add("dark")
  //   // toggle.src = moon

  // }
  // if (!night) {
  //   html.classList.remove("dark")
  //   // toggle.src = sun
  // }

  const [menu, setMenu] = useState(false)
  // useEffect(() => {
  //   if (blendBar) {

  //     blendBar.style.mixBlendMode = "difference"
  //   }
  // }, [])
  const hideMenu = () => {
    setMenu(false)
    setTimeout(() => {
      blendBar.style.mixBlendMode = "difference"
    }, 1000);
  }

  const showMenu = () => {
    setTimeout(() => {
      blendBar.style.mixBlendMode = "normal"
    }, 100);

    if (blendBar) {
      setMenu(true)
    }
  }

  let test = false;
  return (
    <nav
      className={menu ? "px-6  blend-bar fixed nav z-[1] flex py-5 items-center justify-between w-screen text-lightShade  dark:bg-lightShade dark:text-darkShade sm:px-16 absolute-nav" : "px-6 blend-bar fixed nav z-[1000] flex py-5 items-center justify-between w-screen text-lightShade dark:bg-lightShade dark:text-darkShade sm:px-16  absolute-nav mix-blend-difference"}
    >
      <Link to="/">
        <div
          className="flex gap-1 blend-bar-child overflow-hidden">
          <h3
            onClick={handleActiveWork}
            className="self-end flourish -mb-1 font-medium text-lg">Flourish.</h3>
        </div>
      </Link>
      <div className={menu ? 'nav-menu fixed z-[99999] left-0 -top-20  bg-darkShade dark:bg-lightShade dark:text-darkShade sm:hidden' :
        'nav-menu fixed left-0 -top-[1000px]  bg-darkShade dark:bg-lightShade dark:text-darkShade  sm:hidden'}>
        <Menu locationProps={locationProps} menu={menu} hideMenu={hideMenu} />
      </div>
      <div className="md:hidden flex  gap-1 self-end ">
        {/* <img onClick={handleNightMode} className='toggle h-4  self-center mr-4 ' src={sun} alt="" /> */}
        <p onClick={showMenu} className='text-base font-regular show-menu text-lightShade dark:bg-lightShade dark:text-darkShade' >menu</p>
      </div>
      <div className="hidden md:flex  gap-4 [&>*]:dark:bg-lightShade [&>*]:dark:text-darkShade self-end ">
        <p onClick={handleActiveWork} className={activeWork ? 'text-sm font-regular text-lightShade underline underline-offset-[-40%]' : ' text-sm font-regular text-opaque'} ><Link to='/'>Work</Link></p>
        <p onClick={handleActivePlayground} className={activePlayground ? 'text-sm font-regular text-lightShade underline underline-offset-[-40%]' : ' text-sm font-regular text-opaque'} ><Link to='/playground'>Playground</Link></p>
        <p onClick={handleActiveAbout} className={activeAbout ? 'text-sm font-regular text-lightShade underline underline-offset-[-40%]' : ' text-sm font-regular text-opaque'} ><Link to='/about'>About</Link></p>
        <p className={activeResume ? 'text-sm font-regular text-lightShade underline underline-offset-[-40%]' : ' text-sm font-regular text-opaque'} ><Link to='/resume'>Résumé</Link></p>
      </div>
    </nav>

  )
}

export default Navbar
