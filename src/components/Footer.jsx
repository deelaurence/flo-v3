import { useLocation } from 'react-router-dom'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Footer = ({ locationProps }) => {
  const [currentLocation, useCurrentLocation] = useState('')
  const [showFooter, setShowFooter]=useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleUrlChange = () => {
      const url = window.location.href;
      let urlParts;
      console.log("url changed")
      if (url.includes('.app')) {
        urlParts = url.split('.app/');
      } else if (url.includes('localhost')) {
        urlParts = url.split(':5173/');
      } else {
        urlParts = url.split('.xyz/');
      }


      const stringAtEnd = urlParts[1];
      useCurrentLocation(stringAtEnd);
      console.log("base url is currently at " + stringAtEnd);
      if(stringAtEnd=="#/"||stringAtEnd==""){
        setShowFooter(false)
        console.log("Landing page",stringAtEnd)
      }
      else{
        setShowFooter(true)
      }
    };

    handleUrlChange()
  }, [location]);

  gsap.registerPlugin(ScrollTrigger)
  const footerLineRef = useRef(null)
  const contactRef = useRef(null)
  const gotProjectRef = useRef(null)
  const connectRef = useRef(null)
  const footerLine = footerLineRef.current
  const contact = contactRef.current
  const gotProject = gotProjectRef.current
  const connect = connectRef.current
 

  useEffect(() => {
    useCurrentLocation(locationProps)
    //("footer use effect");
    gsap.fromTo(footerLine, {
      width: 0,
    }, {
      width: "100%",
      duration: 1.5,
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(gotProject, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1,
      ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(contact, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.2,
      // ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(connect, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      // ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })

  }, [currentLocation, location])

  if(!showFooter){
  return null
  }
  return (
    
    <footer
      className="tracking-[0.5px]  pt-24 pb-24 px-6 sm:px-16 bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade"
    >
      <div ref={footerLineRef} className='bg-opaque dark:bg-darkShade h-[1px] w-full'>
      </div>
      <div className='mt-14 overflow-visible'>
        <h3 ref={gotProjectRef} className='text-xl overflow-visible ml-16 text-right '>
          Got an interesting project you’d
          like to discuss?
        </h3>
        <section className='md:flex md:justify-between'>
          <div ref={contactRef}>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              Contact.
            </p>
            <a className='font-medium' href="mailto:Ralph.flourish@yahoo.com">Ralph.flourish@yahoo.com</a>
          </div>
          <div ref={connectRef}>
            <p className='text-opaque mt-24 mb-3'>
              Connect with me.
            </p>
            <div className='flex font-medium gap-4'>
              <a href="https://flourishralph.notion.site/Flo-a7868c41f82e46bc91a2f2d35a547c1a?pvs=4" className=''>Notion</a>
              <a href="https://dribbble.com/FlourishRalph" className=''>Dribbble</a>
              <a href="https://twitter.com/FlourishRalph" className=''>Twitter</a>
              <a href=" https://www.linkedin.com/in/flourishralph" className=''> LinkedIn</a>
            </div>
          </div>
        </section>

      </div>

    </footer>

  )
}

export default Footer
