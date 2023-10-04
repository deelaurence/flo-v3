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
import kickz from '../assets/Kickz.webm'
import emoji from '../assets/emoji.png'
import dynamicIsland from '../assets/dynamic.webm'
import { useLocation } from 'react-router-dom'


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
        <div className='flex items-center gap-2 flex-col h-[500px] sm:h-[600px]  sm:flex-row my-20 '>
          <div className=' gap-2 flex h-[68%]  sm:h-full'>
              <div className='bg-[rgb(232,213,253)] rounded-xl flex justify-center items-center h-full w-1/2'>
                <div className=' h-1/2'>
                  <img src={emoji} className='h-full' alt="" />
                </div>
              </div>
              <div className='flex h-full gap-2 w-1/2 flex-col'>
                <div className='w-full h-1/2 rounded-xl bg-[rgb(215,247,229)] flex justify-center items-center'>
                  <p className='text-[rgb(21,132,70)] sm:text-3xl font-bold'>Product <br /> Designer.</p>
                </div>
                <div className='rounded-xl w-full h-1/2 flex flex-col items-center justify-center gap-4 bg-[rgb(250,250,250)]'>
                  <p className='text-darkShade text-[8px] sm:text-[16px] leading-[12px] sm:leading-normal font-medium h-[60%] w-[80%]'>
                    I have always been enthralled
                    by the concept of building. The ability
                    to take a blank space and just fill it up.<br/>
                    The power to create something and confer upon it 
                    some form of meaning. <br/>
                    I design to build, take up space, and make my mark.

                  </p>
                  <div className='bg-white flex justify-between h-[20%] text-darkShade font-bold text-sm w-[80%]'>
                    <p className='sm:text-xl'>About me</p>
                    <p>ar</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='h-[30%]  flex gap-2  sm:flex-col sm:h-full '>
              <div className='w-1/2 sm:w-full h-full rounded-xl sm:h-[40%] bg-red-200'>
                <video ref={videoRef} className='object-cover h-full w-full bg-white'  loop muted src={kick}></video>
              </div>
              <div className='w-1/2 sm:w-full h-full sm:h-[60%] gap-2 rounded-xl items-center flex flex-col text-blue-900 bg-[rgb(214,234,255)]'>

                <div className='h-[50%] w-1/3 rounded-b-lg bg-darkShade'>
                
                </div>
                <div className='flex gap-2 items-center justify-between w-[90%] h-[30%]'>
                <p className='   text-[7px] sm:text-[14px] sm:font-medium w-[70%]'>
                  My playground is filled with a variety of
                  elite designs that go on to show my
                  creative depth in user interface design.
                </p>
                <p>Ar</p>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      <section className='overflow-hidden px-6 sm:px-16 flex gap-6 flex-col [&>*]:text-lightShade [&>*]:w-full md:flex-row md:flex-wrap md:[&>*]:w-[48%] dark:bg-lightShade [&>*]:dark:text-darkShade [&>*]:h-90 ' >

        {landingData.map((datum, index) => {
          return (
            <Link key={datum.name} to={datum.link}>
              <div
                ref={(element) => refs3.current[index] = element}
                className="mb-8 opacity-0">
                <img
                  className='min-h-[200px] object-cover '
                  ref={(element) => refs.current[index] = element}
                  src={datum.image}
                  alt={datum.name} />
                <aside ref={(element) => refs2.current[index] = element} className=' flex flex-col mt-3'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold text-[17px] md:text-base mt-2'>{datum.name}</h3>
                    <p className='text-[11px] font-medium mt-2 md:text-xs'>{datum.year}</p>
                  </div>
                  <p className='text-[12px] text-opaque mt-1 md:mb-8 md:text-sm'>{datum.details}</p>
                </aside>
              </div>
            </Link>
          )
        })}

        {/* <div className="">
          <img src={landingAlertz} alt="" />
          <aside className='flex flex-col'>
            <div className='flex justify-between'>
              <h3 className='font-bold text-sm md:text-base mt-2'>Guild</h3>
              <p className='text-xs mt-2 md:text-sm'>2020</p>
            </div>
            <p className='text-xs md:mb-8 md:text-sm'>A crime ...</p>
          </aside>
        </div>

        <div className="">
          <img src={landingAlertz} ref={nextRef} alt="" />
          <aside className='flex flex-col'>
            <div className='flex justify-between'>
              <h3 className='font-bold text-sm md:text-base mt-2'>Guild</h3>
              <p className='text-xs mt-2 md:text-sm'>2020</p>
            </div>
            <p className='text-xs md:mb-8 md:text-sm'>A crime ...</p>
          </aside>
        </div>
        <div className="">
          <img src={landingAlertz} ref={nextRef} alt="" srcset="" />
          <aside className='flex flex-col'>
            <div className='flex justify-between'>
              <h3 className='font-bold text-sm md:text-base mt-2'>Guild</h3>
              <p className='text-xs mt-2 md:text-sm'>2020</p>
            </div>
            <p className='text-xs md:mb-8 md:text-sm'>A crime ...</p>
          </aside>
        </div>
        <div className="">
          <img src={landingAlertz} alt="" srcset="" />
          <aside className='flex flex-col'>
            <div className='flex justify-between'>
              <h3 className='font-bold text-sm md:text-base mt-2'>Guild</h3>
              <p className='text-xs mt-2 md:text-sm'>2020</p>
            </div>
            <p className='text-xs md:mb-8 md:text-sm'>A crime ...</p>
          </aside>
        </div>
        <div className="">
          <img src={landingAlertz} alt="" srcset="" />
          <aside className='flex flex-col'>
            <div className='flex justify-between'>
              <h3 className='font-bold text-sm md:text-base mt-2'>Guild</h3>
              <p className='text-xs mt-2 md:text-sm'>2020</p>
            </div>
            <p className='text-xs md:mb-8 md:text-sm'>A crime ...</p>
          </aside>
        </div>
        <div className="">
          <img src={landingAlertz} alt="" srcset="" />
          <aside className='flex flex-col'>
            <div className='flex justify-between'>
              <h3 className='font-bold text-sm md:text-base mt-2'>Guild</h3>
              <p className='text-xs mt-2 md:text-sm'>2020</p>
            </div>
            <p className='text-xs md:mb-8 md:text-sm'>A crime ...</p>
          </aside>
        </div> */}
      </section>
    </>
  )
}

export default LANDING
