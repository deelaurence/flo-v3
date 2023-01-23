import React from 'react'
import { useState } from 'react'
import WorkWithFlo from './WorkWithFloForPortfolio'
import kodeTechCofee from '../assets/kodetech-mockup.png'
import kodeTech1 from '../assets/kodetech1.png'
import kodeTech2 from '../assets/kodetech2.png'
import kodeTech3 from '../assets/kodetech3.png'

import userPersona from './images/userpersona.png'
import architecture from './images/architecture.png'
import userFlow1 from './images/userflow1.png'
import userFlow2 from './images/userflow2.png'
import userFlow3 from './images/userflow3.png'

import prev from './images/prev.png'
import next from './images/next.png'

const KODETECH = () => {
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
    return (
        <>
            <main className="px-6 md:px-16 pt-20   relative z-20 flex flex-col bg-darkShade text-lightShade md:min-h-[90vh] md:pb-10">
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <div onClick={handleDecrease} className={pop ? "popup fixed bg-[rgba(0,0,0,.95)] top-0 left-0 z-10  h-screen w-screen" : "hidden"}>
                    <img src={popupImg} className={landscape ?
                        'relative  rotate-90 min-w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        : 'relative top-1/2 left-1/2 max-h-[95%] min-h-[30%] -translate-x-1/2 -translate-y-1/2'} alt="popup" />
                </div>
                {/* popup */}
                {/* popup */}
                {/* popup */}
                <section className='px-2 relative pb-10'>
                    <div>
                        <h1 className="text-[1.6rem] font-semibold md:text-5xl">
                            KodeTech: An <br /> E-Commerce Website
                        </h1>
                    </div>
                    <div className='text-[0.9rem] font-[500]  text-[#fafafab9] leading-7 mt-16'>
                        <p>Role:</p>
                        <p className='font-[600] text-[1rem] text-white'>Product Designer</p>
                    </div>
                    <div className='text-[0.9rem] font-[500]  text-[#fafafab9] leading-7 mt-10'>
                        <p>Length:</p>
                        <p className='font-[600] text-white text-[1rem]'>3 weeks</p>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Overview
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            KodeTech is an e-commerce website that
                            was created to help the company expand
                            their brand while allowing them connect
                            with their users and effectively market their
                            tech gadget products.
                            On this platform, users are able to easily
                            interact with the website and have an
                            experience that is user-friendly while
                            performing their primary tasks of placing
                            orders.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={kodeTechCofee} alt="" />
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            The Challenge.
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            As a Nigerian-Tech brand, KodeTech is
                            interested in bridging the communication
                            gap through the utilization of technology
                            and technological products, however, they
                            require a platform that would allow them
                            connect with their users whilst providing
                            them with top-notch user experience and
                            making sure there is the availability of
                            quality products.
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Research
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            To get started, primary research was carried out to understand the pain points of the target users
                            and the main aim of this was to connect with the users and in turn discover a variety of opportunities
                            for the product.
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Findings
                        </h3>
                        <article className='text-[0.9rem] overflow-visible leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            Target users are inclined to carry out online purchases, however, they complained of certain difficulties
                            which made them restrict their online transactions.
                            <br />
                            <br />
                            These difficulties were in the form of:
                            <br />
                            <br />
                            <ul className='[&>*]:overflow-visible overflow-visible ml-4'>
                                <li><span className='font-bold text-lightShade'>Complex</span> website interfaces.</li>
                                <li><span className='font-bold text-lightShade'>Limited</span> payment methods.</li>
                                <li><span className='font-bold text-lightShade'>Constrained</span> delivery options.</li>
                                <li><span className='font-bold text-lightShade'>A lack</span> of proper product descriptions.</li>
                            </ul>

                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            The Solution.
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            After understanding the challenges faced by the users and taking into consideration the core objective
                            of the brand, goals were crafted to establish major points:
                            <br />
                            <br />

                            <ul className='[&>*]:overflow-visible overflow-visible ml-4'>
                                <li>Ensuring<span className='font-medium text-lightShade'> user-friendliness</span> on the website.</li>
                                <li>Priortizing<span className='font-medium text-lightShade'> easy navigation</span></li>
                                <li>Including a variety of<span className='font-medium text-lightShade'> payment methods.</span></li>
                                <li>Making sure there are different<span className='font-medium text-lightShade'> delivery options</span> available</li>
                                <li>Crafting detailed<span className='font-medium text-lightShade'> product descriptions.</span></li>
                            </ul>
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            User Persona.
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            In the creation of this product, the
                            target group that was focused on made
                            up the majority of the KodeTech product
                            users. The user base consists of the younger
                            demographic which are capable of
                            interacting with the KodeTech platform to
                            conduct online transactions. As a result,
                            the user profiles were pooled and merged
                            to form a single user persona.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={userPersona} alt="" />
                    </div>
                    <article className='text-[0.9rem] mt-6 leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                        After this, the information architecture and
                        task flows were designed.
                    </article>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Information architecture
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            For a product such as this, it was imperative
                            that every action taken by the users would be
                            seamless as a result of the presence of an
                            end-to-end information architecture workflow.
                        </article>
                    </div>
                    <div className='mt-16'>
                        <img src={architecture} onClick={handleEnlargeLandscape} alt="" />
                    </div>

                    <div>
                        <div className='mt-14 font-semibold text-[1.5rem] mb-4'>
                            <h3>Task flows.</h3>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h5 className='mb-4'>Sign Up/log In task flow.</h5>
                                <img onClick={handleEnlargeLandscape} src={userFlow1} alt="" />
                            </div>
                            <div>
                                <h5 className='mb-4'>Order/Add to Cart task flow.</h5>
                                <img onClick={handleEnlargeLandscape} src={userFlow2} alt="" />
                            </div>
                            <div>
                                <h5 className='mb-4'>Check Out task flow.</h5>
                                <img onClick={handleEnlargeLandscape} src={userFlow3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Screens.
                        </h3>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <div><img src={kodeTech1} alt="" /></div>
                        <div><img src={kodeTech2} alt="" /></div>
                        <div><img src={kodeTech3} alt="" /></div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Have a go!
                        </h3>
                        <p className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            View the users' prototype <span className='text-white font-[700]' >here</span>
                        </p>
                        <p className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            View the admin prototype <span className='text-white font-[700]' >here</span>
                        </p>

                        <p className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            Explore live website <span className='text-white font-[700]' >here</span>
                        </p>
                    </div>

                    <div className='mt-10 text-lightShade'>
                        <p>Owari da.</p>
                        <p>Arigato. 😡</p>
                    </div>
                    <div className='flex gap-2 items-center mt-12 '>
                        <img className='h-4' src={prev} alt="" srcset="" />
                        <p className='text-[1rem] leading-7 font-[500] max-w-[90%]  text-[#fafafab9]'>
                            Previous
                        </p>
                    </div>
                    <div className='flex gap-2 items-center justify-end'>
                        <p className='text-[1rem] leading-7 font-[500] max-w-[90%]  '>
                            Next
                        </p>
                        <img className='h-4' src={next} alt="" srcset="" />
                    </div>
                </section>
            </main>

        </>
    )
}

export default KODETECH
