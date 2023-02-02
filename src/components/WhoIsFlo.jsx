import React from 'react'
import { useLocation } from 'react-router-dom'
import heroImg from '../assets/hero-img.png'
import threeShoes from '../assets/three-shoes.png'
import seaWaves from '../assets/sea-waves.png'
import shot1 from '../assets/shot1.png'
import shot2 from '../assets/shot2.png'
import shot3 from '../assets/shot3.png'
import shot4 from '../assets/shot4.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useRef, useEffect, useState } from 'react'
const WhoIsFlo = () => {
  const location = useLocation()

  const floImgRef = useRef(null)
  const inquisitiveRef = useRef(null)
  const passionateRef = useRef(null)
  const intro1Ref = useRef(null)
  const intro2Ref = useRef(null)
  const intro3Ref = useRef(null)
  const intro4Ref = useRef(null)

  const creativeRef = useRef(null)
  const perceptiveRef = useRef(null)
  const threeShoesRef = useRef(null)
  const backgroundRef = useRef(null)

  const curiousRef = useRef(null)
  const detailedRef = useRef(null)
  const seaWavesRef = useRef(null)
  const background2Ref = useRef(null)

  const perceptive = perceptiveRef.current
  const threeShoe = threeShoesRef.current
  const background = backgroundRef.current


  const curious = curiousRef.current
  const detailed = detailedRef.current
  const seaWave = seaWavesRef.current
  const background2 = background2Ref.current


  const floImg = floImgRef.current
  const Inquisitive = inquisitiveRef.current
  const passionate = passionateRef.current
  const intro1 = intro1Ref.current
  const intro2 = intro2Ref.current
  const intro3 = intro3Ref.current
  const intro4 = intro4Ref.current

  const shotsRef = useRef(null)
  const shot = shotsRef.current

  const [currentLocation, setCurrentLocation] = useState("")

  useEffect(() => {
    console.log("run about effect");
    setCurrentLocation(location)
    const creative = creativeRef.current;
    gsap.fromTo(floImg, {
      yPercent: 80,
      opacity: 0,
      skewX: "6deg",

    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 2,
        delay: 1,
        // scrollTrigger: {
        //   trigger: floImg,
        // }
      })
    gsap.fromTo(Inquisitive, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: Inquisitive,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(passionate, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: passionate,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro1, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: intro1,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro2, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: intro2,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro3, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: intro3,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(intro4, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: intro4,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(threeShoe, {
      yPercent: 80,
      opacity: 0,
      skewX: "6deg",

    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: threeShoe,
        }
      })
    gsap.fromTo(creative, {
      yPercent: 80,
      opacity: 0,
    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        scrollTrigger: {
          trigger: creative,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(perceptive, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        delay: .3,
        // delay: 1,
        scrollTrigger: {
          trigger: perceptive,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(background, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: background,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(seaWave, {
      yPercent: 80,
      opacity: 0,
      skewX: "6deg",

    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: seaWave,
        }
      })
    gsap.fromTo(curious, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: curious,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(detailed, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: detailed,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(background2, {
      yPercent: 80,
      opacity: 0,


    },
      {
        yPercent: 0,
        opacity: 1,
        skewX: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: background2,
          start: "bottom 90%"
        }
      })
    gsap.fromTo(shot, {
      yPercent: 20,
      opacity: 0,
      skewY: "6deg",
      // rotate: "20deg"
    },
      {
        yPercent: 0,
        opacity: 1,
        skewY: "0deg",
        rotate: "0deg",
        duration: 2,
        // delay: 1,
        scrollTrigger: {
          trigger: shot,
          // markers: true,
          start: "top bottom"
        }
      })
  }, [currentLocation])

  return (
    <main className='px-6 pt-24 md:px-16 tracking-[0.3px]  bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade'>
      <section className='mb-24 flex flex-col gap-20 items-end md:flex-row-reverse'>
        <div ref={floImgRef} className='w-[70%] self-start md:w-[40%]'>
          <img rel="preload" src={heroImg} alt="" />
        </div>
        <div className='mt-8 text-3xl md:text-4xl font-medium md:w-[60%]'>
          <h3 ref={inquisitiveRef} className='mb-2'>
            Inquisitive.
          </h3>
          <h3 ref={passionateRef} className='mb-8'>
            Passionate.
          </h3>
          <div className='text-sm [&>*]:mb-4 font-[400]'>
            <p ref={intro1Ref} className=''>
              Hi! My name is Flourish Ralph and I am a Product Designer
              from Nigeria.
            </p>
            <p ref={intro2Ref} className=''>
              I am constantly inspired by the world around me and driven to create
              meaningful and innovative designs.
            </p>
            <p ref={intro3Ref}>
              My work is characterized by a strong focus on user experience, and I am
              always looking for ways to improve and enhance the way people interact
              with the products I design.
            </p>
            <p ref={intro4Ref}>
              I believe that good design has the power to change the
              world, and I am dedicated to using my skills and talents to
              make a positive impact on the lives of others.
            </p>
          </div>
        </div>
      </section>
      <section className='mb-24 flex flex-col gap-20 items-end md:flex-row'>
        <div ref={threeShoesRef} className='w-[70%] self-end md:w-[90%]'>
          <img src={threeShoes} alt="" />
        </div>
        <div className='mt-8 text-3xl md:text-4xl md:text-right md:w-[120%] font-medium'>
          <h3 ref={creativeRef} className='mb-2'>
            Creative.
          </h3>
          <h3 ref={perceptiveRef} className='mb-8'>
            Perceptive.
          </h3>
          <div ref={backgroundRef} className='text-sm [&>*]:mb-4 font-[400]'>
            <p className=''>
              My background in Nigeria has shaped my perspective and influenced
              my design approach. I am always looking for ways to collaborate with
              people and infuse my work with a sense of cultural identity in order to
              create products that are relevant and meaningful to diverse audiences.
            </p>
          </div>
        </div>
      </section>
      <section className='mb-24 flex flex-col gap-20 items-end md:flex-row-reverse'>
        <div ref={seaWavesRef} className='w-[70%] self-start md:w-[40%]'>
          <img src={seaWaves} alt="" />
        </div>
        <div className='mt-8 text-3xl md:text-4xl font-medium md:w-[60%]'>
          <h3 ref={curiousRef} className='mb-2'>
            Curious.
          </h3>
          <h3 ref={detailedRef} className='mb-8'>
            Detailed.
          </h3>
          <div className='text-sm [&>*]:mb-4 font-[400]'>
            <p ref={background2Ref} className=''>
              Whenever I am out and about, I like taking pictures of the things around
              me, photography feeds my curiosity but it also teaches me to be focused.
              It reminds me to stay grounded and to appreciate the experiences I get to
              have in my environment.
            </p>
          </div>
        </div>
      </section>
      {/* <section className='mb-24 flex flex-col'>
        <div className='w-[70%]'>
          <img src={seaWaves} alt="" />
        </div>
        <div className='mt-8 text-2xl font-medium'>
          <h3 className='mb-2'>
            Curious.
          </h3>
          <h3 className='mb-8'>
            Detailed.
          </h3>
          <div className='text-sm [&>*]:mb-4 font-regular'>
            <p className=''>
              Whenever I am out and about, I like taking pictures of the things around
              me, photography feeds my curiosity but it also teaches me to be focused.
              It reminds me to stay grounded and to appreciate the experiences I get to
              have in my environment.
            </p>
          </div>
        </div>
      </section> */}
      <section ref={shotsRef} className=''>
        <p className='text-center mb-8'>Some of my shots.</p>
        <div className='flex flex-wrap gap-6 [&>*]:w-[45%] sm:[&>*]:w-[48%] md:[&>*]:w-[48%]'>
          <img src={shot1} alt="" />
          <img src={shot2} alt="" />
          <img src={shot3} alt="" />
          <img src={shot4} alt="" />
        </div>
      </section>
    </main>
  )
}

export default WhoIsFlo
