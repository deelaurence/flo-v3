import { Link } from 'react-router-dom'
import React from 'react'
import logo from './images/680fe7a0a23e7b6c80c6547abf7eb43a-sticker 2.png'
const Navbar = () => {
  return (
    <nav
      className="px-6 relative z-10 flex py-5 items-center justify-between bg-darkShade text-lightShade sm:px-16"
    >
      <Link to="/">
        <div className="flex gap-1 overflow-hidden">
          <h3 className="self-end -mb-1 font-medium text-base">Flourish.</h3>
        </div>
      </Link>
      <div className="md:hidden flex  gap-1 self-end ">
        <p className='text-sm font-regular'>switch</p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/portfolio'>menu</Link></p>
      </div>
      <div className="hidden md:flex  gap-4 self-end ">
        <p className='text-sm font-regular text-lightShade' ><Link to='/portfolio'>Work</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/portfolio'>Playground</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/portfolio'>About</Link></p>
        <p className='text-sm font-regular text-lightShade' ><Link to='/portfolio'>Résumé</Link></p>
      </div>
    </nav>

  )
}

export default Navbar
