import React from 'react'
import { useState } from 'react'
import WorkWithFlo from './WorkWithFloForPortfolio'
import kodeTechCofee from './images/kodetechCofee.png'
import userPersona from './images/userpersona.png'
import architecture from './images/architecture.png'
import userFlow1 from './images/userflow1.png'
import userFlow2 from './images/userflow2.png'
import userFlow3 from './images/userflow3.png'
import preview1 from './images/preview1.png'
import preview2 from './images/preview2.png'
import preview3 from './images/preview3.png'
import preview4 from './images/preview4.png'
import preview5 from './images/preview5.png'
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
                            The challenge
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
                            User Research
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            To gain a general understanding of the
                            target users that would be interested in
                            interacting with the KodeTech brand,
                            primary research was carried out to
                            understand their pain points. The main
                            aim was to connect with the users and
                            discover a variety of opportunities for
                            the product.
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Findings
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            From the research, it was observed that the
                            target users were inclined to carry out online
                            purchases, however, they complained of
                            certain difficulties which made them restrict
                            their online transactions. These difficulties
                            could be in the form of complex website
                            interfaces, limited payment methods,
                            constrained delivery options, and a lack of
                            proper product description.
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Solution: defining goals
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            After understanding the challenges faced
                            by the users and taking into consideration
                            the core objective of the brand, goals were
                            crafted to establish major points:
                            <br /><br />
                            User-friendliness <br />
                            Easy navigation <br />
                            A variety of payment methods <br />
                            The availability of different delivery options <br />
                            Detailed product description
                        </article>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Understanding the target audience: user persona
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
                        <div className='mt-14 font-semibold mb-8'>
                            <h6>Task flows</h6>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <img onClick={handleEnlargeLandscape} src={userFlow1} alt="" />
                            </div>
                            <div>
                                <img onClick={handleEnlargeLandscape} src={userFlow2} alt="" />
                            </div>
                            <div>
                                <img onClick={handleEnlargeLandscape} src={userFlow3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='text-[1.5rem] font-[600] mt-14'>
                        <h3 className='mb-8'>
                            Desktop design
                        </h3>
                        <article className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            The design of the platform was created to cater
                            for the needs of the users, and for the purpose
                            of proper management, the admin role was
                            included in the design. With the aid of the
                            dashboard, the admin has control over the
                            operations of the product to ensure efficiency.
                        </article>
                    </div>
                    <div className='mt-14 font-semibold mb-8'>
                        <h6>Kodetech interface</h6>
                    </div>
                    <div className='flex  items-start justify-between '>
                        <div  >
                            <img onClick={handleEnlarge} className='h-[28vh]' src={preview1} alt="" />
                        </div>
                        <div>
                            <img onClick={handleEnlarge} className='h-[28vh]' src={preview2} alt="" />
                        </div>
                        <div>
                            <img onClick={handleEnlarge} className='h-[28vh]' src={preview3} alt="" />
                        </div>
                    </div>
                    <div className='mt-14 font-semibold mb-8'>
                        <h6>Dashboard</h6>
                    </div>
                    <div className='flex  items-start justify-between '>
                        <div  >
                            <img onClick={handleEnlarge} className='w-[40vw]' src={preview4} alt="" />
                        </div>
                        <div>
                            <img onClick={handleEnlarge} className='w-[40vw]' src={preview5} alt="" />
                        </div>
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
                            View the mobile prototype <span className='text-white font-[700]' >here</span>
                        </p>
                        <p className='text-[0.9rem] leading-7 font-[500] max-w-[90%] text-[#fafafab9]'>
                            Explore live website <span className='text-white font-[700]' >here</span>
                        </p>

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
                <WorkWithFlo />
            </main>

        </>
    )
}

export default KODETECH
