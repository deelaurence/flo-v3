import { Link } from 'react-router-dom'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import flo1 from '../assets/flo1.png'
import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
import logo from './images/680fe7a0a23e7b6c80c6547abf7eb43a-sticker 2.png'
const Navbar = () => {
  let html = document.querySelector("html")
  let toggle = document.querySelector('.toggle')
  console.log(html);
  console.log(toggle);
  const [night, setNight] = useState(false)



  const handleNightMode = () => {
    setNight(!night)
    console.log('niiight');
  }

  if (night) {
    html.classList.add("dark")
    toggle.src = moon

  }
  if (!night) {
    html.classList.remove("dark")
    toggle.src = sun
  }
  const [menu, setMenu] = useState(false)
  const hideMenu = () => {
    setMenu(false)
    console.log("hide")
  }
  const showMenu = () => {
    setMenu(true)
  }
  let test = false;
  return (
    <nav
      className="px-6 relative  z-10 flex py-5 items-center justify-between bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade sm:px-16 absolute-nav"
    >
      <Link to="/">
        <div className="flex gap-1 overflow-hidden">
          <h3 className="self-end -mb-1 font-medium text-base ">Flourish.</h3>
        </div>
      </Link>
      <div className={menu ? 'nav-menu  fixed z-[99999] left-0 -top-20  bg-darkShade dark:bg-lightShade dark:text-darkShade sm:hidden' :
        'nav-menu fixed left-0 -top-[1000px]  bg-darkShade dark:bg-lightShade dark:text-darkShade  sm:hidden'}>
        <Menu menu={menu} hideMenu={hideMenu} />
      </div>
      <div className="sm:hidden flex  gap-1 self-end ">
        <img onClick={handleNightMode} className='toggle h-4  self-center mr-4 ' src={sun} alt="" />
        <p onClick={showMenu} className='text-sm font-regular show-menu text-lightShade dark:bg-lightShade dark:text-darkShade ' >menu</p>
      </div>
      <div className="hidden md:flex  gap-4 [&>*]:dark:bg-lightShade [&>*]:dark:text-darkShade self-end ">
        <p className='text-sm font-regular text-lightShade ' ><Link to='/'>Work</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/playground'>Playground</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/about'>About</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/resume'>Résumé</Link></p>
      </div>
    </nav>

  )
}

export default Navbar
