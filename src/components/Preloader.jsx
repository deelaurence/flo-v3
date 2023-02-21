import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import flo from "../assets/hero-img.png"
import alertz from "../assets/landing-alertz.png"
import femmina from "../assets/landing-femmina.png"
import mr from "../assets/landing-vr.png"
import threeShoe from "../assets/three-shoes.png"
import guild from "../assets/landing-guild.png"
import kodetech from "../assets/landing-kodetech.png"
import sea from "../assets/sea-waves.png"
import displayPicture from "../assets/display-picture.gif"
import dx from "../assets/landing-dexchange.png"
import flo1 from "../assets/flo1.png"
import flo2 from "../assets/flo2.png"
import flo3 from "../assets/flo3.png"
import bud1 from "../assets/bud1.png"
import bud2 from "../assets/bud2.png"
import bud3 from "../assets/bud3.png"
import dribbble1 from "../assets/dribbble1.png"
import dribbble2 from "../assets/dribbble2.png"
import dribbble3 from "../assets/dribbble3.png"
import craiglist1 from "../assets/craiglist1.png"
import craiglist2 from "../assets/craiglist2.png"
import craiglist3 from "../assets/craiglist3.png"
import shoptacle1 from "../assets/shoptacle1.png"
import shoptacle2 from "../assets/shoptacle2.png"
import shoptacle3 from "../assets/shoptacle3.png"
import buanissimo1 from "../assets/buonnisimo1.png"
import buanissimo2 from "../assets/buonnisimo2.png"
import buanissimo3 from "../assets/buonnisimo3.png"
import casual from "../assets/casual.png"
import winniamp from "../assets/winniamp.png"

import shot1 from "../assets/shot1.png"
import shot2 from "../assets/shot2.png"
import shot3 from "../assets/shot3.png"
import shot4 from "../assets/shot4.png"
import kodetechCoffee from '../assets/kodetech-mockup.png'
import kodetechFlow1 from '../assets/kodetech-flow1.png'
import kodetechFlow2 from '../assets/kodetech-flow2.png'
import kodetechFlow3 from '../assets/kodetech-flow3.png'
import kodetechFlow4 from '../assets/kodetech-flow4.png'
import kodetech1 from '../assets/kodetech1.png'
import kodetech2 from '../assets/kodetech2.png'
import kodetech3 from '../assets/kodetech3.png'
import alertzResponse1 from '../assets/alertz-response1.png'
import alertzResponse2 from '../assets/alertz-response2.png'
import alertzEmpathy from '../assets/alertz-empathy.png'
import alertzPersona from '../assets/alertz-persona.png'
import alertzUserflow from '../assets/alertz-userflow.png'
import alertzScreen from '../assets/alertz-screen.jpg'
import guildUserjourney from '../assets/guild-userjourney.png'
import guildUserpersona from '../assets/guild-userpersona.png'
import guildUserflow from '../assets/guild-userflow.png'
import guildScreen1 from '../assets/guild-screen1.png'
import guildScreen2 from '../assets/guild-screen2.png'
import guildScreen3 from '../assets/guild-screen3.png'
import guildScreen4 from '../assets/guild-screen4.png'
import headset from '../assets/headset.png'
import mrScreen1 from '../assets/mr-screen1.png'
import mrScreen2 from '../assets/mr-screen2.png'
import mrScreen3 from '../assets/mr-screen3.png'
import mrScreen4 from '../assets/mr-screen4.jpg'
import mrUserflow from '../assets/mr-userflow.jpg'


import userPersona from '../assets/userpersona.png'


const Preloader = ({ pullData }) => {
    const floRef = useRef(null)
    const flor = floRef.current
    const seaRef = useRef(null)
    const barRef = useRef(null)
    const bar2Ref = useRef(null)
    const sear = seaRef.current
    const location = document.location;
    const bar = barRef.current
    const bar2 = bar2Ref.current
    const text = document.querySelector('.preload-text')
    const text2 = document.querySelector('.preload-text2')
    const threeS = document.querySelector('.three-shoes')
    const percentage = document.querySelector('.percentage')
    const clocking = document.querySelector('.clocking')
    const locationDom = document.querySelector('.location')
    const preloadTextRef = useRef(null)
    const preloadText2Ref = useRef(null)
    let [progress, setProgress] = useState([])
    const [currentLocation, setCurrentLocation] = useState('')
    let wordsArray = ["Maya", " Dodo"]
    let [words, setWords] = useState("")
    let [imgLoaded, setImageLoaded] = useState(false)
    let [animation, setAnimation] = useState(false)
    let [status, setStatus] = useState(0)
    // let [time, setTime] = useState('')
    let time;
    let [pseudoStatus, setPseudoStatus] = useState(0)
    pullData(imgLoaded)
    const domImages = document.querySelectorAll("img")
    // console.log(progress.length);
    // console.log(barClass)
    // try {
    setTimeout(() => {
        setAnimation(true)
    }, 2000);
    const getImage = async () => {
        domImages.forEach((image, index) => {
            image.addEventListener("load", () => {
                setProgress(progress.push(index))
                // setTimeout(() => {
                // console.log(status);
                // setInterval(() => {

                //   setStatus(status++)

                // }, 2000);
                setStatus(progress.length)
                // }, 2000);
                console.log(`image ${index} loaded`);
                console.log(progress.length, domImages.length);
                console.log(image.complete)
                if (progress.length / domImages.length * 100 > 90) {
                    console.log("not completed but load notwithstanding")
                    setTimeout(() => {
                        // percentage.innerHTML = "loading"
                        setImageLoaded(true)
                    }, 17000);
                    setTimeout(() => {
                        percentage.innerHTML = "Hello"
                        percentage.style.transform = "translateY(-50px)"
                        percentage.style.opacity = 0
                        bar.style.width = "94%"
                        bar.style.transform = "translateY(-50px)"
                        bar2.style.transform = "translateY(-50px)"
                        clocking.style.transform = "translateY(-50px)"
                        locationDom.style.transform = "translateY(-50px)"
                        bar.style.opacity = 0
                        bar2.style.opacity = 0
                        clocking.style.opacity = 0
                        locationDom.style.opacity = 0
                        text2.style.opacity = 0
                        text2.style.opacity = 0
                        text2.style.transform = "translateY(-100px)"
                        text2.style.transition = "2s"
                        // setImageLoaded(true)
                    }, 15000);
                }
                if (progress.length == domImages.length) {
                    console.log("completed")
                    setTimeout(() => {

                        // setImageLoaded(true)
                    }, 15000);
                }
            })
        })
    }
    setTimeout(() => {
        // setImageLoaded(true)
    }, 60000);

    if (bar) {
        // setTimeout(() => {
        bar.style.width = `${status / domImages.length * 94}%`
        // bar2.style.width = `${pseudoStatus / 99 * 94}%`
        // bar2.style.width = `${status / domImages.length * 94}%`

        // }, 1000);
    }


    // console.log(text);
    useEffect(() => {
        // setTimeout(() => {
        if (percentage) {

            percentage.style.transform = "translateY(0px)"
            percentage.style.opacity = 1
            bar.style.transform = "translateY(0px)"
            bar2.style.transform = "translateY(0px)"
            clocking.style.transform = "translateY(0px)"
            locationDom.style.transform = "translateY(0px)"
            bar.style.opacity = 1
            bar2.style.opacity = 1
            clocking.style.opacity = 1
            locationDom.style.opacity = 1
        }
        setCurrentLocation(location)
        getImage()
        // }, 2000);

        let timeLapse = setInterval(() => {
            if (pseudoStatus == 100) {
                return
            }
            else {
                setPseudoStatus(pseudoStatus++)
            }
        }, 200);

        return () =>
            clearInterval(timeLapse)

    }, [currentLocation])

    // useEffect(() => {
    //     // getImage()
    //     let imageDelay = setTimeout(() => {
    //         getImage()
    //         setCurrentLocation(location)
    //     }, 5000);

    //     return () =>
    //         clearTimeout(imageDelay)
    // }, [currentLocation])
    useEffect(() => {
        setTimeout(() => {
            console.log("animation useeffect");
            // console.log(preloadText);
            // gsap.fromTo(threeS, {
            //     filter: "contrast(200%)",
            //     // scale: 4,
            // }, {
            //     filter: "contrast(190%)",
            //     filter: "blur(120px)",
            //     duration: 20,
            //     // scale: 1,
            //     delay: 0,
            //     opacity: 1,
            //     // ease: "Bounce.easeOut",
            //     skewX: "0deg",
            // })
            // gsap.fromTo(percentage, {
            //     yPercent: -110,
            //     skewX: "10deg",
            //     opacity: "0"
            // }, {
            //     yPercent: -30,
            //     opacity: 1,
            //     duration: 2,
            //     // delay: 2,
            //     // ease: "Bounce.easeOut",
            //     skewX: "0deg",
            // })
            gsap.fromTo(text, {
                xPercent: 110,
                skewX: "10deg",
                opacity: "0"
            }, {
                xPercent: 30,
                opacity: 1,
                duration: 2,
                delay: 2,
                // ease: "Bounce.easeOut",
                skewX: "0deg",
            })
            gsap.fromTo(text, {
                xPercent: 30,
                skewX: "10deg",
                // opacity: "0"
            }, {
                xPercent: 10,
                // opacity: 1,
                duration: .5,
                delay: 3.5,
                ease: "Bounce.easeOut",
                skewX: "0deg",
            })
            gsap.fromTo(threeS, {
                // filter: "contrast(200%)",
                // yPercent: 100,
                // scale: 4,
            }, {
                // filter: "contrast(190%)",
                // filter: "blur(120px)",
                duration: 20,
                yPercent: 100,
                // scale: 1,
                delay: 0,
                repeat: -1,
                yoyo: true,
                // opacity: .,
                // ease: "Bounce.easeOut",
                skewX: "0deg",
            })
            gsap.fromTo(text, {
                xPercent: 10,
            }, {
                xPercent: 150,
                opacity: 0,
                duration: 3,
                delay: 5,
                // ease: "Bounce.easeOut",
            })
            gsap.fromTo(text2, {
                xPercent: 110,
                opacity: 0,
                // skewY: "5deg"
            }, {
                xPercent: 0,
                opacity: 1,
                duration: 2,
                delay: 9,
                // skewY: "0deg"
                // ease: "Bounce.easeOut",
            })
            // gsap.fromTo(text2, {
            //     yPercent: -30,
            //     // opacity: 1,
            // }, {
            //     yPercent: -130,
            //     opacity: 0,
            //     duration: 2,
            //     delay: 12,
            //     // ease: "Bounce.easeOut",
            // })
            // gsap.fromTo(text2, {
            //     yPercent: -30,
            // }, {
            //     yPercent: -10,
            //     duration: 1,
            //     delay: 17,
            //     // ease: "Bounce.easeOut",
            // })
        }, 1000)
    }, [animation])

    const clockRef = useRef(null)
    const clock = clockRef.current
    // let fullTime;
    // useEffect(() => {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const day = currentTime.getDay()
    const weekdays = ["Sn", "Mn", "Tu", "Wd", "Th", "Fr", "St"]
    // console.log(seconds)
    let newHour;
    let newSeconds;
    let newMinute
    let amPm;
    hours > 12 ? newHour = hours % 12 : newHour = hours
    hours > 12 ? amPm = "pm" : amPm = "am"
    seconds < 10 ? newSeconds = `0${seconds}` : newSeconds = seconds
    minutes < 10 ? newMinute = `0${minutes}` : newMinute = minutes

    let fullTime = `${weekdays[day]}/${newHour}:${newMinute}:${newSeconds} ${amPm}`
    // setTime(fullTime)
    time = fullTime
    const clockUpdate = setInterval(() => {
        // setTime(fullTime)
        time = fullTime
    }, 1000)
    // return () =>
    // clearInterval(clockUpdate)
    // }, [time])
    // console.log(fullTime);
    // console.log(time);

    return (
        <div className=' px-2 text-neutral-700 text-8xl font-bold h-screen w-screen bg-darkShade'>
            <div ref={bar2Ref} className='opacity-0 h-[1px] w-[94%] absolute -translate-y-[50px] bottom-4 bar bg-neutral-700 rounded-full'></div>
            <div ref={barRef} className='opacity-0 h-[1px] absolute bottom-4 -translate-y-[50px] bar bg-neutral-200 rounded-full'></div>
            <p className='location -translate-y-[50px] absolute opacity-0 text-base text-neutral-500 bottom-[144px]'>\Lagos &mdash; NG</p>
            <p ref={clockRef} className='clocking -translate-y-[50px] opacity-0 absolute text-base bottom-[164px] text-neutral-400'>{time ? `${time.toUpperCase()}` : "Calibrating Time..."}</p>

            <h1 className='percentage absolute -translate-y-[50px] bottom-8 text-7xl text-neutral-200' >
                {status ? ` ${Math.floor(progress / domImages.length * 100)}%` : "0%"}
                {/* {status ? ` ${pseudoStatus}%` : "0%"} */}
            </h1>
            <img className='three-shoes opacity-[.1] blur-[100px]' src={threeShoe} alt="" />
            <div ref={preloadTextRef} className='right-6 opacity-0 preload-text [&>*]:overflow-visible flex flex-col font-medium absolute overflow-visible top-4 text-white text-4xl' >
                <p> Incepto <span className='text-neutral-500'>Ne</span></p>
                <p>Desistam</p>
            </div>

            <div ref={preloadText2Ref} className='opacity-0 preload-text2 [&>*]:overflow-visible right-4 flex flex-col font-medium absolute overflow-visible top-4 text-white text-3xl' >
                <p> May I not <span className='text-neutral-500'>shrink</span></p>
                <p> from my <span className='text-neutral-500'>purpose</span></p>
            </div>

            <div className={imgLoaded ? "h-0 [&>*]:h-0 transition-[1s]" : "h-0 [&>*]:h-0 transition-[1s] "}>
                <img src={flo} className='floImg -z-[100] h-10' alt="flo" />
                <img src={sea} className='floImg -z-[100] h-10' alt="flo" />
                <img src={femmina} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetech} className='floImg -z-[100] h-10' alt="flo" />
                <img src={mr} className='floImg -z-[100] h-10' alt="flo" />
                <img src={alertz} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guild} className='floImg -z-[100] h-10' alt="flo" />
                <img src={dx} className='floImg -z-[100] h-10' alt="flo" />
                <img src={displayPicture} className='floImg -z-[100] h-10' alt="flo" />
                <img src={flo1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={flo2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={flo3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={shot1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={shot2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={shot3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={shot4} className='floImg -z-[100] h-10' alt="flo" />
                <img src={bud1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={bud2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={bud3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={craiglist1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={craiglist2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={craiglist3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={shoptacle1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={shoptacle2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={shoptacle3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={winniamp} className='floImg -z-[100] h-10' alt="flo" />
                <img src={casual} className='floImg -z-[100] h-10' alt="flo" />
                <img src={buanissimo1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={buanissimo2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={buanissimo3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={dribbble1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={dribbble2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={dribbble3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={craiglist1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={craiglist2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={craiglist3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={threeShoe} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetechCoffee} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetechFlow1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetechFlow2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetechFlow3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetechFlow4} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetech1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetech2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={kodetech3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={alertzResponse1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={alertzResponse2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={alertzEmpathy} className='floImg -z-[100] h-10' alt="flo" />
                <img src={alertzPersona} className='floImg -z-[100] h-10' alt="flo" />
                <img src={alertzUserflow} className='floImg -z-[100] h-10' alt="flo" />
                <img src={alertzScreen} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guildUserjourney} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guildUserpersona} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guildUserflow} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guildScreen1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guildScreen2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guildScreen3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={guildScreen4} className='floImg -z-[100] h-10' alt="flo" />
                <img src={headset} className='floImg -z-[100] h-10' alt="flo" />
                <img src={mrScreen1} className='floImg -z-[100] h-10' alt="flo" />
                <img src={mrScreen2} className='floImg -z-[100] h-10' alt="flo" />
                <img src={mrScreen3} className='floImg -z-[100] h-10' alt="flo" />
                <img src={mrScreen4} className='floImg -z-[100] h-10' alt="flo" />
                <img src={mrUserflow} className='floImg -z-[100] h-10' alt="flo" />
                <img src={userPersona} className='floImg -z-[100] h-10' alt="flo" />
            </div>
        </div>
    )
}

export default Preloader
