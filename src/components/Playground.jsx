import bud1 from '../assets/bud1.png'
import bud2 from '../assets/bud2.png'
import bud3 from '../assets/bud3.png'
import flo1 from '../assets/flo1.png'
import flo2 from '../assets/flo2.png'
import flo3 from '../assets/flo3.png'
import craiglist1 from '../assets/craiglist1.png'
import craiglist2 from '../assets/craiglist2.png'
import craiglist3 from '../assets/craiglist3.png'
import shoptacle1 from '../assets/shoptacle1.png'
import shoptacle2 from '../assets/shoptacle2.png'
import shoptacle3 from '../assets/shoptacle3.png'
import dribbble1 from '../assets/dribbble1.png'
import dribbble2 from '../assets/dribbble2.png'
import dribbble3 from '../assets/dribbble3.png'
import buonnisimo1 from '../assets/buonnisimo1.png'
import buonnisimo2 from '../assets/buonnisimo2.png'
import buonnisimo3 from '../assets/buonnisimo3.png'
import winniamp from '../assets/winniamp.png'
import casual from '../assets/casual.png'
import React from 'react';
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
// import {Scroll}
const Playground = () => {

    const location = useLocation()
    const [popupImg, setPopupImg] = useState('')
    const [pop, setPop] = useState(false)
    const [landscape, setLandscape] = useState(false)
    const handleEnlarge = (e) => {
        // setPopupImg("")
        setLandscape(false)
        setPop(!pop)
        setPopupImg(e.target.src)
        console.log(e.target.src)
    }
    const handleEnlargeLandscape = (e) => {
        // setPopupImg("")
        setLandscape(true)
        setPop(!pop)
        setPopupImg(e.target.src)
        console.log(e.target.src)
    }
    const handleDecrease = (e) => {
        // setPopupImg("")
        setPop(!pop)
        console.log(e.target)
    }
    const playgroundRef = useRef()
    const playgroundInfoRef = useRef()
    const popupRef = useRef()
    const playground = playgroundRef.current
    const playgroundInfo = playgroundInfoRef.current
    const popupr = popupRef.current
    let [count, setCount] = useState("")
    // setInterval(() => {
    //     setCount(count++)
    //     console.log(count);
    // }, 5000);
    // setCount(location.pathname)
    useEffect(() => {
        console.log("run effect");
        setCount(location)
        console.log(location);
        gsap.fromTo(playgroundInfo, {
            // scale: .2,
            opacity: 0,
            y: -120,
            // transform: "skewY(30deg)"
        },
            {
                opacity: 1,
                delay: 2,
                duration: 1,
                y: 0,
                ease: "Bounce.easeOut",
                // transform: "skewY(0deg)"
            })
        gsap.fromTo(playgroundInfo, {
            // scale: .2,
            // opacity: 1,
            y: 0,

        },
            {
                opacity: 0,
                delay: 4,
                duration: 1.5,
                y: -120,
                x: 0

            })
        gsap.fromTo(playground, {
            // scale: .2,
            opacity: 0,

        },
            {
                opacity: 1,
                delay: 5,
                duration: 2,

                // scrollTrigger: {
                //     trigger: refs.current[0],
                //     scrub: "true"
                // }
            })
        gsap.fromTo(playground, {
            scale: .3,
            // opacity: 0,
            y: "-1400px",
            // x: "-100px",
            filter: "blur(8px)"

        },
            {
                scale: 1,
                // opacity: 1,
                delay: 7.5,
                duration: 1,
                y: -300,
                filter: "blur(0px)",
                ease: "easeOut"

                // scrollTrigger: {
                //     trigger: refs.current[0],
                //     scrub: "true"
                // }
            })
        gsap.fromTo(playground, {
            overflow: "visible",

        },
            {
                overflow: "scroll",
                delay: 10,
            })
        // gsap.fromTo(popupr, {
        //     position: "relative"

        // },
        //     {
        //         position: "fixed",
        //         delay: 15,
        //     })
    }, [count])
    return (
        <>
            <main>

                <section ref={playgroundInfoRef} className='opacity-0 px-6 mt-12 sm:px-16 dark:bg-lightShade dark:text-darkShade text-lightShade'>

                    <h3 className='text-2xl  font-medium   sm:text-4xl  overflow-visible' >
                        Welcome to my playground.
                    </h3>
                    <p className='mt-5 leading-[25px] sm:w-full text-sm sm:text-base '>
                        This is an archive collection of projects I have worked on over time.
                    </p>
                    {/* <p className='mt-3 leading-[25px] sm:w-full text-sm sm:text-base  '>
                        I hope you get to enjoy interacting with my designs here.
                    </p> */}
                </section>
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <div ref={popupRef} onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-10  h-screen w-screen" : "hidden"}>
                    <img src={popupImg} className={landscape ?
                        'relative  rotate-90 min-w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        : 'relative top-1/2 left-1/2 max-h-[95%] min-h-[30%] -translate-x-1/2 -translate-y-1/2'} alt="popup" />
                </div>
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <section ref={playgroundRef} className='  overflow-scroll  dark:bg-lightShade dark:text-darkShade py-32  px-6 gap-4 grid-cont  playground-cont  md:overflow-visible [&>*]:overflow-visible mt-10 mb-64 text-[10px] sm:px-16 justify-between text-lightShade'>
                    <div className='h-72 w-72 grid-1 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[75%] flex justify-around h-56 w-64'>
                            <img className='self-start' src={bud1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={bud2} onClick={handleEnlarge} alt="" />
                            <img className='self-end' src={bud3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium '>
                                Bud &mdash; An Online Diary Platform with Interactive AI.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grid-2 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[75%] flex justify-around h-56 w-64'>
                            <img className='self-end' src={flo1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={flo2} onClick={handleEnlarge} alt="" />
                            <img className='self-start' src={flo3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Flo &mdash; An app that gives users praise.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grid-3 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-end' src={craiglist1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={craiglist2} onClick={handleEnlarge} alt="" />
                            <img className='self-start' src={craiglist3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Craiglist &mdash; An online advertisement website.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Redesign
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grid-4 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground  rounded-lg flex justify-center p-2 [&>*]:h-[60%]  h-56 w-64'>
                            <img className='self-center' src={winniamp} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Winamp &mdash; A desktop media app.
                            </p>
                            <p className='leading-[14px] self-center text-lightShade font-normal border-opaque  border-[1px]  h-5 px-3 rounded-3xl '>
                                Redesign
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grid-5 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:w-[40%] flex justify-around h-56 w-64'>
                            <div className='flex flex-col justify-between '>
                                <img className='' src={shoptacle1} onClick={handleEnlarge} alt="" />
                                <img className='' src={shoptacle3} onClick={handleEnlarge} alt="" />
                            </div>
                            <img className='self-center' src={shoptacle2} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Shoptacle &mdash; A luxury clothing webshop.
                            </p>
                            <p className='leading-[14px] self-center text-lightShade font-normal border-opaque  border-[1px]  h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grid-6 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-end' src={dribbble1} onClick={handleEnlarge} alt="" />
                            <img className='self-center' src={dribbble2} onClick={handleEnlarge} alt="" />
                            <img className='self-start' src={dribbble3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Dribbble &mdash; An event exploring app.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grid-7 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground  rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-start mt-6' src={buonnisimo1} onClick={handleEnlarge} alt="" />
                            <img className='self-center mt-6' src={buonnisimo2} onClick={handleEnlarge} alt="" />
                            <img className='self-start mt-6' src={buonnisimo3} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Buonissimo &mdash; A food recipe app.
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className='h-72 w-72 grid-8 rounded-xl bg-transluscent p-4'>
                        <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                            <img className='self-center' src={casual} onClick={handleEnlarge} alt="" />
                        </div>
                        <div className='h-12 flex justify-between py-2'>
                            <p className='w-[80%] font-medium'>
                                Inspiration from dribbble
                            </p>
                            <p className='self-center text-lightShade font-normal border-opaque  border-[1px] leading-3 h-5 px-3 rounded-3xl '>
                                Redesign
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Playground
