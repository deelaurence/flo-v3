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
import kickGif from "../assets/kick.gif"

import kickz from '../assets/Kickz.webm'
import emoji from '../assets/emoji.png'
import dynamicIsland from '../assets/dynamic.webm'
import { useLocation } from 'react-router-dom'
import {TfiArrowCircleRight} from 'react-icons/tfi'
import {BsArrowUpRightCircle} from 'react-icons/bs'



const Work = () => {
const location = useLocation()
const [currentLocation, setCurrentLocation] = useState("")
const refs = useRef([])
  const refs2 = useRef([])
  const refs3 = useRef([])
  const videoRef=useRef(null)
  const heroRef = useRef(null)
  const hero = heroRef.current
  const video=videoRef.current
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
    
        <p className=' text-4xl font-medium opacity-80 sm:text-3xl px-6 mb-12  text-gray-300  pb-4 sm:px-16 sm:font-bold mt-44 uppercase'>Work.</p>
        <section className='overflow-hidden px-6  w-[100vw] sm:px-16  flex gap-[2%] flex-col [&>*]:text-lightShade [&>*]:w-full md:flex-row md:flex-wrap md:[&>*]:w-[48%] dark:bg-lightShade [&>*]:dark:text-darkShade [&>*]:h-90 ' >
        {landingData.map((datum, index) => {
          return (
            <Link key={datum.name} to={datum.link} className=' w-[49%]'>
              <div
                ref={(element) => refs3.current[index] = element}
                className="mb-24 relative opacity-0">
                <div className='relative min-h-[200px]'>

                  {/* <div className={`absolute z-[999] w-full  bg-gray-700 opacity-30 rounded-full rounded-br-full h-full`}></div> */}
                <img
                  className='min-h-[200px]  object-cover '
                  ref={(element) => refs.current[index] = element}
                  src={datum.image}
                  alt={datum.name} />
                  </div>
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

      </section>
</>
  )
}

export default Work
