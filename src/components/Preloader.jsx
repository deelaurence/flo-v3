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

    let [progress, setProgress] = useState([])
    const [currentLocation, setCurrentLocation] = useState('')
    let wordsArray = ["Maya", " Dodo"]
    let [words, setWords] = useState("")
    let [imgLoaded, setImageLoaded] = useState(false)
    let [animation, setAnimation] = useState(false)
    let [status, setStatus] = useState(0)
    let [time, setTime] = useState('')
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
                if (progress.length == domImages.length) {
                    console.log("completed")
                    setTimeout(() => {
                        setImageLoaded(true)
                    }, 1000);
                }
            })
        })
    }
    setTimeout(() => {

        setImageLoaded(true)
    }, 60000);
    const bar = barRef.current
    const bar2 = bar2Ref.current
    if (bar && bar2) {
        // setTimeout(() => {
        bar.style.width = `${status / domImages.length * 94}%`
        // bar2.style.width = `${pseudoStatus / 99 * 94}%`
        bar2.style.width = `${status / domImages.length * 94}%`

        // }, 1000);
    }
    const text = document.querySelector('.preload-text')
    const threeS = document.querySelector('.three-shoes')
    const preloadTextRef = useRef(null)
    const preloadText = preloadTextRef.current

    // console.log(text);
    useEffect(() => {
        setCurrentLocation(location)
        getImage()
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
        console.log(text);
        // if (text) {
        //   wordsArray.forEach((word) => {
        //     text.innerHTML = word;
        //   })
        // }
    }, [currentLocation])


    useEffect(() => {
        setTimeout(() => {
            console.log("animation useeffect");
            // console.log(preloadText);
            gsap.fromTo(threeS, {
                filter: "contrast(200%)",
                // scale: 4,
            }, {
                filter: "contrast(190%)",
                filter: "blur(120px)",
                duration: 20,
                // scale: 1,
                delay: 0,
                // ease: "Bounce.easeOut",
                skewX: "0deg",
            })
            gsap.fromTo(text, {
                yPercent: -110,
                skewX: "10deg",
                opacity: "0"
            }, {
                yPercent: -90,
                opacity: 1,
                duration: 2,
                delay: 2,
                // ease: "Bounce.easeOut",
                skewX: "0deg",
            })
            gsap.fromTo(text, {
                yPercent: -90,
            }, {
                yPercent: -70,
                duration: 1,
                delay: 4,
                ease: "Bounce.easeOut",
            })
            gsap.fromTo(text, {
                yPercent: -70,
            }, {
                yPercent: -50,
                duration: 1,
                delay: 7,
                ease: "Bounce.easeOut",
            })
            gsap.fromTo(text, {
                yPercent: -50,
            }, {
                yPercent: -30,
                duration: 1,
                delay: 12,
                ease: "Bounce.easeOut",
            })
            gsap.fromTo(text, {
                yPercent: -30,
            }, {
                yPercent: -10,
                duration: 1,
                delay: 17,
                // ease: "Bounce.easeOut",
            })
        }, 1000)
    }, [animation])

    // console.log(preloadText);
    const clockRef = useRef(null)
    const clock = clockRef.current
    useEffect(() => {


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
        const fullTime = `${weekdays[day]}/${newHour}:${newMinute}:${newSeconds} ${amPm}`


        const clockUpdate = setInterval(() => {
            setTime(fullTime)


        }, 60000)
        return () =>
            clearInterval(clockUpdate)

    }, [time])
    return (
        <div className=' px-2  text-neutral-700 text-8xl font-bold h-screen w-screen bg-lightShade'>
            <div ref={barRef} className='h-1 absolute bottom-4 bar bg-white rounded-full'></div>
            <div ref={bar2Ref} className='h-1 absolute bottom-4 bar bg-neutral-400 rounded-full'></div>
            <p className='absolute text-base text-neutral-500 bottom-[144px]'>\Lagos &mdash; NG</p>
            <p ref={clockRef} className='absolute text-base bottom-[162px] text-neutral-400'>{time.toUpperCase()}</p>
            <h1 className='absolute bottom-8' >
                {status ? ` ${Math.floor(progress / domImages.length * 100)}%` : "0%"}
                {/* {status ? ` ${pseudoStatus}%` : "0%"} */}
            </h1>
            <img className='three-shoes blur-[100px]' src={threeShoe} alt="" />
            <p ref={preloadTextRef} className='opacity-0 preload-text [&>*]:overflow-visible flex flex-col absolute overflow-visible top-4 text-white text-5xl' >
                <span> Just </span>
                <span> Do</span>
                <span > this </span>
                <span className='text-neutral-300 '>  And </span>
                <span className='font-[georgia] font-medium italic'> Be proud </span>
            </p>
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
