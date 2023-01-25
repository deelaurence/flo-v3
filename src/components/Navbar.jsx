import { Link } from 'react-router-dom'
import sun from '../assets/sun.png'
import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
import logo from './images/680fe7a0a23e7b6c80c6547abf7eb43a-sticker 2.png'
const Navbar = () => {
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
      className="px-6 relative  z-10 flex py-5 items-center justify-between bg-darkShade text-lightShade sm:px-16"
    >
      <Link to="/">
        <div className="flex gap-1 overflow-hidden">
          <h3 className="self-end -mb-1 font-medium text-base">Flourish.</h3>
        </div>
      </Link>
      <div className={menu ? ' fixed z-[99999] left-0 -top-20  bg-darkShade sm:hidden' :
        'hidden fixed left-0 -top-20  bg-darkShade sm:hidden'}>
        <Menu hideMenu={hideMenu} />
      </div>
      <div className="sm:hidden flex  gap-1 self-end ">
        <img className='h-4 -z-10 self-center mr-4 opacity-70' src={sun} alt="" />
        <p onClick={showMenu} className='text-sm font-regular text-lightShade' >menu</p>
      </div>
      <div className="hidden md:flex  gap-4 self-end ">
        <p className='text-sm font-regular text-lightShade' ><Link to='/portfolio/kodetech'>Work</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/playground'>Playground</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/about'>About</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/resume'>Résumé</Link></p>
      </div>
    </nav>

  )
}

export default Navbar
