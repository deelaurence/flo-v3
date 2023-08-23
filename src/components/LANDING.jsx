import React from 'react'
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
import kickz from '../assets/Kickz.webm'
import dynamicIsland from '../assets/dynamic.webm'
import { useLocation } from 'react-router-dom'


const LANDING = () => {
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState("")
  const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const heroRef = useRef(null)
  const hero = heroRef.current
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
      <section ref={heroRef} className='mt-20 overflow-hidden opacity-0 px-6 sm:px-16 text-lightShade dark:bg-lightShade dark:text-darkShade'>
        <div className='flex items-center flex-wrap  my-20'>
          <div className='object-cover dp-cont h-12 w-12 rounded-full sm:h-20 sm:w-20  bg-red-50'>
            <img className='' src={displayPicture} alt="" />
          </div>
          <h3 className='ml-4 product-designer text-[26px]  font-regular sm:min-w-[60%]  sm:text-[4xl]  overflow-visible' >Product Designer.</h3>
          <p className='mt-4 w-[90%] sm:w-full text-sm sm:text-base '> Designing with a dash of imagination and a pinch of perfection, turning pixels into magic and products into must-haves.</p>
        </div>
      </section>
      <section
      className="overflow-hidden px-6 sm:px-16 flex gap-6 flex-col [&>*]:text-lightShade [&>*]:w-full md:flex-row md:flex-wrap md:[&>*]:w-[48%] dark:bg-lightShade [&>*]:dark:text-darkShade [&>*]:h-90" 
      >
        <Link >
              <div
                className="mb-8 ">
                <video className='min-h-[200px]' autoPlay muted loop >
                  <source src={kickz} type="video/mp4" />
                  Sorry your browser does not support this video
                </video>  
                <aside  className=' flex flex-col mt-3'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold text-[17px] md:text-base mt-2'>Kickz</h3>
                    <p className='text-[11px] font-medium mt-2 md:text-xs'>2023</p>
                  </div>
                  <p className='text-[12px] text-opaque mt-1 md:mb-8 md:text-sm'>Interaction &mdash; Slider Effect (inspiration from uiadrian)</p>
                </aside>
              </div>
            </Link>
        <Link >
              <div
                className="mb-16 ">
                
                <div className='min-h-300px bg-black px-4 py-6'>

                <video className='min-h-[200px]' autoPlay muted loop >
                  <source src={dynamicIsland} type="video/mp4" />
                  Sorry your browser does not support this video
                </video>  
                </div>
                <aside  className=' flex flex-col mt-3'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold text-[17px] md:text-base mt-2'>Apple's Dynamic Island</h3>
                    <p className='text-[11px] font-medium mt-2 md:text-xs'>2023</p>
                  </div>
                  <p className='text-[12px] text-opaque mt-1 md:mb-8 md:text-sm'>Interaction &mdash; (Supafast! Inspiaration from Zander Whitehurst)</p>
                </aside>
              </div>
            </Link>
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
