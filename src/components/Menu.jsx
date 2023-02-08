import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
const Menu = ({ hideMenu, menu, locationProps }) => {

    const [activeWork, setActiveWork] = useState(true);
    const [activePlayground, setActivePlayground] = useState(false);
    const [activeAbout, setActiveAbout] = useState(false);
    const [activeResume, setActiveResume] = useState(false);

    useEffect(() => {
        if (locationProps.href.includes('about')) {
            // console.log('about');
            setActiveAbout(true)
            setActiveWork(false)
        }
        if (locationProps.href.includes('playground')) {
            // console.log('about');
            setActivePlayground(true)
            setActiveWork(false)
        }
    }, [locationProps])
    const handleActiveWork = () => {
        setActiveWork(true)
        setActivePlayground(false)
        setActiveAbout(false)
        setActiveResume(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActivePlayground = () => {
        setActiveWork(false)
        setActivePlayground(true)
        setActiveAbout(false)
        setActiveResume(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActiveAbout = () => {
        setActiveWork(false)
        setActivePlayground(false)
        setActiveAbout(true)
        setActiveResume(false)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }
    const handleActiveResume = () => {
        setActiveWork(false)
        setActivePlayground(false)
        setActiveAbout(false)
        setActiveResume(true)
        setTimeout(() => {
            hideMenu()
        }, 1000);
    }

    return (
        <>

            <p onClick={hideMenu} className='text-lg tracking-[0.5px] text-lightShade dark:bg-lightShade dark:text-darkShade absolute top-32 right-6 ' >close</p>
            <nav className={menu ? 'mix-blend-normal nav-animate dark:bg-lightShade dark:text-darkShade flex text-lightShade transition-[2s] justify-center w-screen h-[100vh]  mt-20 gap-12 items-center flex-col font-medium text-2xl' :
                'nav1-animate mix-blend-normal dark:bg-lightShade dark:text-darkShade  transition-[2s]  flex text-lightShade justify-center w-screen h-[100vh]  mt-20 gap-12 items-center flex-col font-medium text-2xl'}>
                <Link to='/'>
                    <p onClick={handleActiveWork} className={activeWork ? 'line-through' : 'text-opaque'}>Work</p>
                </Link>
                <Link to="/playground">
                    <p onClick={handleActivePlayground} className={activePlayground ? 'line-through' : 'text-opaque '}>Playground</p>
                </Link>
                <Link to="/about">
                    <p onClick={handleActiveAbout} className={activeAbout ? 'line-through' : 'text-opaque'} >About</p>
                </Link>
                <Link to="/resume">
                    <p onClick={handleActiveResume} className={activeResume ? 'line-through' : 'text-opaque'}>Résumé</p>
                </Link>
            </nav>
        </>
    )
}

export default Menu
