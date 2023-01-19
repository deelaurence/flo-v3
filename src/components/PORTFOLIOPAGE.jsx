import React from 'react'
import { useState } from 'react'
import WorkWithFloForPortfolio from './WorkWithFloForPortfolio'
import gldLargest from "./images/gld-largest.png"
import gldBox1 from "./images/gld-Box1.png"
import gldBox2 from "./images/gld-Box2.png"
import largest from "./images/largest.png"
import box1 from "./images/box1.png"
import box2 from "./images/box2.png"
import rectangle from "./images/rectangle.png"
import gldRectangle from "./images/gld-rectangle.png"
import dxLargest from "./images/dx-largest.png"
import dxBox1 from "./images/dx-box1.png"
import dxBox2 from "./images/dx-box2.png"
import dxRectangle from "./images/dx-rectangle.png"

// import spLargest from "./images/spl-largest.png"
// import spBox1 from "./images/spl-box1.png"
// import spBox2 from "./images/spl-box2.png"
// import spRectangle from "./images/spl-rectangle.png"
import arrow from "./images/arrow.png"
import femImg1 from "./images/fem-img1.png"
import femImg2 from "./images/fem-img2.png"
import femImg3 from "./images/fem-img3.png"
import splImg1 from "./images/spl-img1.png"
import splImg2 from "./images/spl-img2.png"
import splImg3 from "./images/spl-img3.png"
import { Link } from 'react-router-dom'
import ClickIcon from './ClickIcon'
import { CiGrid42 } from 'react-icons/ci'
const PORTFOLIOPAGE = () => {
    const [enlarge, setEnlarge] = useState(false)
    const [delay, setDelay] = useState(false)
    const [popupImg, setPopupImg] = useState(gldLargest)
    const [pop, setPop] = useState(false)
    const handleEnlarge = (e) => {
        // setPopupImg("")
        setPop(!pop)
        setPopupImg(e.target.src)
        console.log(e.target.src)
    }
    const handleDecrease = (e) => {
        // setPopupImg("")
        setPop(!pop)
        console.log(e.target)
    }
    return (
        <>
            <main className="portfolio px-6 md:px-16 pt-20  relative z-20 flex flex-col bg-darkShade text-lightShade md:min-h-[90vh] md:pb-10">

                <section className='portfolio-section relative pb-40'>
                    <div>
                        <h1 className="text-[1.6rem] font-semibold md:text-5xl">
                            Work
                        </h1>

                    </div>
                    <div className='text-[.83rem] font-[500]  text-[#fafafab9] leading-7 mt-8'>
                        <p>I focus on using end-to-end Product Design
                            <span className='block' >to create products that can offer users a</span>
                            <span className='block'>seamless interaction experience with the </span>
                            <span className='block'>aid of visual design, interaction design,</span>
                            <span className='block'> and prototyping.</span>
                            <br />
                            <span className='block'>Products for industries like web3, blockchain,</span>
                            <span className='block'>Femtech, e-commerce, and enterprise.</span>
                        </p>
                    </div>
                    <div
                        className="seperator absolute bottom-0 rounded-full -translate-x-1/2 left-1/2 h-24  w-24 bg-[rgba(257,257,257,0.0)] "
                    >
                        {/* <CgMenuGridO className='w-24 h-24 pb-12' /> */}
                        {/* <TbGridDots className='w-12 h-12' /> */}
                        <CiGrid42 className='mx-auto w-12 h-12 mt-6' />
                        {/* <GiBrightExplosion className='mx-auto w-12 h-12 mt-6' /> */}
                    </div>
                </section>
                <section className='mt-20 portfolio-section1 text-[1.5rem]'>
                    <div>
                        <h3 className='text-center text-[1.3rem] font-semibold'>
                            Selected Projects
                        </h3>
                    </div>
                    {/* popup */}
                    {/* popup */}
                    {/* popup */}
                    <div onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-10  h-screen w-screen" : "hidden"}>
                        <img src={popupImg} className='relative top-1/2 left-1/2 max-h-[95%] min-h-[50%] -translate-x-1/2 -translate-y-1/2' alt="popup" />
                    </div>
                    {/* popup */}
                    {/* popup */}
                    {/* popup */}
                    <div className=' flex project-cont   gap-12  flex-col'>
                        <div className='mt-20 relative grid-container-dexchange'>
                            <div className='relative overflow-hidden dx-largest '>
                                <img className='h-full' src={gldLargest} onClick={handleEnlarge} alt="kodetech" />
                                <ClickIcon enlarge={handleEnlarge} />
                            </div>
                            <div className='dx-header justify-self-end  float-right'>
                                <h3 className='text-right font-semibold text-[1rem]' >
                                    Guild
                                </h3>
                                <p className='font-[500] text-right text-[.5rem]'>
                                    A web3 Community platform
                                </p>
                            </div>
                            <div className='relative dx-box1' >
                                <img src={gldBox1} onClick={handleEnlarge} className='h-full' alt="kodetech2" />
                                {/* <ClickIcon /> */}
                            </div>
                            <div className=' relative dx-box2'>
                                <img className='h-full' onClick={handleEnlarge} src={gldBox2} alt="kodetech3" />
                                {/* <ClickIcon /> */}
                            </div>
                            <div className='relative dx-rectangle' >
                                <img className='h-full' src={gldRectangle} onClick={handleEnlarge} alt="kodetech" />
                                {/* <ClickIcon /> */}
                            </div>
                            <div className='text-[.5rem]  overflow-hidden relative dx-button  '>
                                <div className='font-[500]  items-center absolute bottom-0 w-full flex gap-3'>
                                    <p className='ml-[53%] ' >View Project</p>
                                    <img src={arrow} className='h-[6.5px] ' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-16 relative grid-container'>
                            {/* <ClickIcon /> */}
                            <div className="largest mt-[6px] bg-white" >
                                <img className='' src={largest} onClick={handleEnlarge} alt="kodetech"
                                />
                            </div>
                            <div className='header'>
                                <h3 className='font-semibold text-[1rem]' >
                                    KodeTech
                                </h3>
                                <p className='font-[500] text-[.5rem]'>
                                    An E-Commerce website
                                </p>
                            </div>
                            <div className='box1' >
                                <img src={box1} onClick={handleEnlarge} className='w-full' alt="kodetech2" />
                            </div>
                            <div className='box2'>
                                <img className='w-full' onClick={handleEnlarge} src={box2} alt="kodetech3" />
                            </div>
                            <div className='rectangle' >
                                <img className='w-full' onClick={handleEnlarge} src={rectangle} alt="kodetech" />
                            </div>
                            <div className='text-[.5rem] overflow-hidden  button flex items-end'>
                                <Link to="/portfolio/kodetech">
                                    <div className='flex gap-3   font-[500]'>
                                        <p className=''>View Project</p>
                                        <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='mt-20 grid-container-femmina'>
                            <div className=' fem-img1'>
                                <img src={femImg1} onClick={handleEnlarge} className='w-full object-cover' alt="kodetech" />
                            </div>
                            <div className='fem-header -mt-1'>
                                <h3 className='font-semibold text-[1rem]' >
                                    Femmina
                                </h3>
                                <p className='text-[.5rem] font-[500]'>
                                    A Femtech app
                                </p>
                            </div>
                            <div className='fem-img2' >
                                <img src={femImg2} onClick={handleEnlarge} className='w-full' alt="kodetech2" />
                            </div>
                            <div className='fem-img3'>
                                <img className='w-full' src={femImg3} onClick={handleEnlarge} alt="kodetech3" />
                            </div>
                            <div className='text-[.5rem] self-center pb-8 overflow-hidden fem-button'>
                                <div className='flex gap-3 mt-3 font-[500]'>
                                    <p>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 grid-container-dexchange'>
                            <div className='overflow-hidden dx-largest'>
                                <img src={dxLargest} onClick={handleEnlarge} alt="kodetech" />
                            </div>
                            <div className='dx-header justify-self-end  float-right'>
                                <h3 className='-mt-1 font-semibold text-[1rem]' >
                                    D-Exchange
                                </h3>
                                <p className='font-[500] text-[.5rem]'>
                                    A Liquidity pool design
                                </p>
                            </div>
                            <div className='dx-box1' >
                                <img src={dxBox1} onClick={handleEnlarge} className='h-full' alt="kodetech2" />
                            </div>
                            <div className='dx-box2'>
                                <img className='h-full' onClick={handleEnlarge} src={dxBox2} alt="kodetech3" />
                            </div>
                            <div className='dx-rectangle' >
                                <img className='h-full' src={dxRectangle} onClick={handleEnlarge} alt="kodetech" />
                            </div>
                            <div className='text-[.5rem] overflow-hidden flex items-end dx-button'>
                                <div className='font-[500] flex ml-[53%]  gap-3'>
                                    <p>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 grid-container-splita'>
                            <div className=' spl-img1 pt-1'>
                                <img src={splImg1} onClick={handleEnlarge} className='w-full' alt="kodetech" />
                            </div>
                            <div className='spl-header '>
                                <h3 className='font-semibold text-[1rem]' >
                                    Splita
                                </h3>
                                <p className='text-[.5rem] font-[500]'>
                                    A JSON and CSV Chunking platform
                                </p>
                            </div>
                            <div className='spl-img2' >
                                <img src={splImg2} className='w-full' onClick={handleEnlarge} alt="kodetech2" />
                            </div>
                            <div className='spl-img3'>
                                <img className='w-full' src={splImg3} onClick={handleEnlarge} alt="kodetech3" />
                            </div>
                            <div className='text-[.5rem] self-center   overflow-hidden spl-button'>
                                <div className='flex gap-3 font-[500]'>
                                    <p className=''>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        {/* <div className='mt-20 grid-container'>
                            <div className='overflow-hidden largest'>
                                <img onClick={handleEnlarge} src={shpLargest} alt="kodetech" />
                            </div>
                            <div className='header '>
                                <h3 className='font-semibold text-[1rem]' >
                                    Shoptacle
                                </h3>
                                <p className='text-[.5rem] font-[500]'>
                                    A Luxury Clothing webstore
                                </p>
                            </div>
                            <div className='box1' >
                                <img src={shpBox1} onClick={handleEnlarge} className='h-full' alt="kodetech2" />
                            </div>
                            <div className='box2'>
                                <img className='h-full' onClick={handleEnlarge} src={shpBox2} alt="kodetech3" />
                            </div>
                            <div className='rectangle' >
                                <img className='h-full' onClick={handleEnlarge} src={shpRectangle} alt="kodetech" />
                            </div>
                            <div className='text-[.5rem] overflow-hidden button'>
                                <div className='flex gap-3 font-[500]'>
                                    <p>View Project</p>
                                    <img src={arrow} className='h-[6.5px] self-center' alt="arrow-icon" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                <WorkWithFloForPortfolio />
            </main>
        </>
    )
}

export default PORTFOLIOPAGE
