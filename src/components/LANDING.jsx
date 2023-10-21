import React from 'react'
import Playground from './Playground';
import { useEffect, useState, useRef } from 'react';
import displayPicture from '../assets/display-picture.gif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import landingData from '../data/landing';
import vlcVideo from "../assets/vlc.mp4"
import kick from "../assets/kick.mp4"
import playgroundImage from '../assets/playground.png'
import kickGif from "../assets/kick.gif"

import kickz from '../assets/Kickz.webm'
import emoji from '../assets/emoji.png'
import dynamicIsland from '../assets/dynamic.webm'
import { useLocation } from 'react-router-dom'
import {TfiArrowCircleRight} from 'react-icons/tfi'
import {BsArrowUpRightCircle} from 'react-icons/bs'

const LANDING = () => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState("")
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const videoRef=useRef(null)
  const heroRef = useRef(null)
  const hero = heroRef.current
  const video=videoRef.current
  // console.log(video)
  // const video = document.querySelector("video")
  
  if(video){
    video.play()
  }
  // video?video.play():console.log("Video mounting...")

  useEffect(() => {
    //("run effect landing")
    setCurrentLocation(location)
    gsap.fromTo(hero, {
      yPercent: 40,
      opacity: 0,
      skewX: "9deg",
      // scale: 5,
    },
      {
        skewX: "0deg",
        // scale: 1,
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1,
        // ease: "Bounce.easeOut"

        // scrollTrigger: {
        //   trigger: hero,
        //   scrub: "true"
        // }
      })
    // gsap.fromTo(refs.current[0], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"
    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",
    //     opacity: 1,
    //     duration: 1,
    //     delay: 1,
    //     // ease: "Bounce.easeOut",
    //     scrollTrigger: {
    //       trigger: refs.current[0],
    //     }
    //   })
    // gsap.fromTo(refs2.current[0], {
    //   yPercent: 20,
    //   opacity: 0
    // },
    //   {
    //     yPercent: 0,
    //     duration: 1.2,
    //     opacity: 1,
    //     delay: 3,
    //     scrollTrigger: {
    //       trigger: refs.current[0],
    //     }
    //   }
    // )
    gsap.fromTo(refs3.current[0], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"
    },
      {
        yPercent: 0,
        skewX: "0deg",
        opacity: 1,
        duration: 1,
        delay: 1,
        // ease: "Bounce.easeOut",
        scrollTrigger: {
          trigger: refs.current[0],
        }
      })


    // gsap.fromTo(refs.current[1], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",

    //     opacity: 1,
    //     duration: 1,
    //     delay: 2.5,
    //     scrollTrigger: {
    //       trigger: refs.current[0],
    //     }
    //   })
    // gsap.fromTo(refs2.current[1], {
    //   yPercent: 20,
    //   opacity: 0
    // },
    //   {
    //     yPercent: 0,
    //     duration: 1.2,
    //     opacity: 1,
    //     delay: .5,
    //     scrollTrigger: {
    //       trigger: refs.current[0],
    //     }
    //   }
    // )
    gsap.fromTo(refs3.current[1], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: refs.current[0],
        }
      })
    // gsap.fromTo(refs.current[2], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[2],
    //     }
    //   })
    // gsap.fromTo(refs2.current[2], {
    //   yPercent: 20,
    //   opacity: 0
    // },
    //   {
    //     yPercent: 0,
    //     duration: 1.2,
    //     opacity: 1,
    //     delay: .5,
    //     scrollTrigger: {
    //       trigger: refs.current[1],
    //     }
    //   }
    // )
    gsap.fromTo(refs3.current[2], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        opacity: 1,
        delay: .8,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[2],
        }
      })
    // gsap.fromTo(refs.current[3], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",

    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[3],
    //     }
    //   })
    // gsap.fromTo(refs2.current[3], {
    //   yPercent: 20,
    //   opacity: 0
    // },
    //   {
    //     yPercent: 0,
    //     duration: 1.2,
    //     opacity: 1,
    //     delay: .5,
    //     scrollTrigger: {
    //       trigger: refs.current[3],
    //     }
    //   }
    // )
    gsap.fromTo(refs3.current[3], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        delay: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[3],
        }
      })
    // gsap.fromTo(refs.current[4], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,

    //     skewX: "0deg",
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[4],
    //     }
    //   })
    // gsap.fromTo(refs2.current[4], {
    //   yPercent: 20,
    //   opacity: 0
    // },
    //   {
    //     yPercent: 0,
    //     duration: 1.2,
    //     opacity: 1,
    //     delay: .5,
    //     scrollTrigger: {
    //       trigger: refs.current[4],
    //     }
    //   }
    // )
    gsap.fromTo(refs3.current[4], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,

        skewX: "0deg",
        opacity: 1,
        delay: 1.2,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[4],
        }
      })
    // gsap.fromTo(refs.current[5], {
    //   yPercent: 20,
    //   opacity: 0,
    //   skewX: "4deg"

    // },
    //   {
    //     yPercent: 0,
    //     skewX: "0deg",

    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: refs.current[5],
    //     }
    //   })
    // gsap.fromTo(refs2.current[5], {
    //   yPercent: 20,
    //   opacity: 0
    // },
    //   {
    //     yPercent: 0,
    //     duration: 1.2,
    //     opacity: 1,
    //     delay: .5,
    //     scrollTrigger: {
    //       trigger: refs.current[5],
    //     }
    //   }
    // )
    gsap.fromTo(refs3.current[5], {
      yPercent: 20,
      opacity: 0,
      skewX: "4deg"

    },
      {
        yPercent: 0,
        skewX: "0deg",
        delay: 1.5,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: refs.current[5],
        }
      })


  }, [])
  useEffect(() => {
    setCurrentLocation(location)
    gsap.fromTo(hero, {
      opacity: 0,
    },
      {
        skewX: "0deg",
        // scale: 1,
        opacity: 1,
        duration: 1,

        // scrollTrigger: {
        //   trigger: refs.current[0],
        //   // scrub: "true"
        // }
      })


  }, [currentLocation])
  return (
    <>
      <section  className='mt-10 overflow-hidden   px-6 sm:px-16 text-lightShade dark:bg-lightShade dark:text-darkShade '>
        <div className='flex items-center gap-2 flex-col     md:h-[600px] sm:flex-row my-20 '>
          <div className=' gap-2 flex flex-col sm:flex-row   sm:h-full'>
             {/* emoji purple box */}
              <Link to="/" className='bg-[rgb(232,213,253)] rounded-xl flex justify-center items-center h-full sm:w-1/2'>
                <div className='h-[300px] flex justify-center items-center sm:h-1/2'>
                  <img src={emoji} className='h-[200px] sm:h-full ' alt="" />
                </div>
              </Link>
              {/* work + about */}
              <div className='flex h-full gap-2 sm:w-1/2 flex-col-reverse'>
              {/* work green box */}
                <div className='w-full h-[500px] rounded-xl py-6 bg-[rgb(215,247,229)] justify-center flex flex-col sm:h-1/2 gap-10'>
                  <p className='px-6 text-darkShade text-lg sm:text-[16px] font-[500] sm:leading-normal'>
                    Let me take you through some selected works accross various domains 
                  </p>
                  
                  <p className=' ml-6 h-12 w-12 bg-green-700 rounded-full sm:hidden'></p>
                  <Link to="/work" className='text-[rgb(21,132,70)] text-5xl sm:text-3xl font-[thunder] px-6 font-extrabold pb-4 sm:font-bold'>Explore <br /> My Work.</Link>
                </div>
                {/* About me orange box */}
                <div className='rounded-xl w-full px-6 sm:px-0 sm:h-auto flex flex-col items-center justify-center  gap-4 sm:gap-2 bg-orange-100'>
                  <h3 className='text-darkShade mt-10 mb-6 font-[thunder] w-full font-black text-5xl sm:text-3xl  sm:mt-10 sm:mb-0  sm:w-[80%] h-fit overflow-visible'>
                    I'M FLO, <span className='block font-[thunder]  font-extrabold sm:inline'>A PRODUCT DESIGNER.</span> 
                  </h3>
                  <p className='text-darkShade text-lg sm:text-[14px] mb-6  font-[500] sm:leading-normal sm:font-medium h-[60%]  sm:pt-6 sm:w-[80%] overflow-visible'>
                    I have always been enthralled
                    by the concept of building. The ability
                    to take a blank space and just fill it up.
                    The power to create something and confer upon it 
                    some form of meaning. 
                    I design to build, take up space, and make my mark.

                  </p>
                  {/* playground blue box */}
                  <Link to="/about" className=' w-full text-gray-700 mb-6 flex justify-between h-[20%] items-center  font-bold text-sm sm:w-[80%] sm:h-auto overflow-visible'>
                    <p className='text-xl  sm:text-lg'>About me</p>
                    < TfiArrowCircleRight className='text-xl'/>
                  </Link>
                </div>
              </div>
          </div>
          {/* kick + playground */}
          <div className='flex  flex-col gap-2  sm:flex-col sm:h-full '>
              {/* kick video box */}
              <div className=' sm:w-full h-full rounded-xl sm:h-[40%] bg-red-200'>
                <img className='object-cover h-full w-full bg-white' src={kickGif} alt="" />
              </div>
              <div className=' sm:w-full  sm:h-[60%] gap-2 rounded-xl items-center flex flex-col text-blue-900 bg-[rgb(214,234,255)]'>

                <div className='h-[200px] w-1/2 sm:h-[50%]  sm:w-1/3 rounded-b-lg bg-darkShade'>
                <img className='playground-image' src={playgroundImage} alt="playground image" />
                </div>
                <div className='flex px-6 pt-10 sm:pt-8 pb-6 sm:pb-0  sm:px-0 gap-2 items-center justify-between sm:w-[90%]  sm:h-auto'>

                <p className='text-lg  sm:text-[14px] sm:font-medium w-[70%] leading-[26px]'>
                  My playground is filled with a variety of
                  elite designs that go on to show my
                  creative depth in user interface design.
                </p>
                <Link to="/playground">
                < TfiArrowCircleRight className='text-xl'/>
                </Link>
                {/* < BsArrowUpRightCircle className='text-xl'/> */}
                </div>
              </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default LANDING
