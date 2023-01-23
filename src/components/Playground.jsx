import React from 'react';
import bud1 from '../assets/bud1.png'
import bud2 from '../assets/bud2.png'
import bud3 from '../assets/bud3.png'
import flo1 from '../assets/flo1.png'
import flo2 from '../assets/flo2.png'
import flo3 from '../assets/flo3.png'
import craiglist1 from '../assets/craiglist1.png'
import craiglist2 from '../assets/craiglist2.png'
import craiglist3 from '../assets/craiglist3.png'
import shoptacle1 from '../assets/shoptacle1.png'
import shoptacle2 from '../assets/shoptacle2.png'
import shoptacle3 from '../assets/shoptacle3.png'
import dribbble1 from '../assets/dribbble1.png'
import dribbble2 from '../assets/dribbble2.png'
import dribbble3 from '../assets/dribbble3.png'
import buonnisimo1 from '../assets/buonnisimo1.png'
import buonnisimo2 from '../assets/buonnisimo2.png'
import buonnisimo3 from '../assets/buonnisimo3.png'
import winniamp from '../assets/winniamp.png'
import casual from '../assets/casual.png'
const Playground = () => {
    return (
        <>
            <section className='px-6 mt-12 sm:px-16 text-lightShade'>
                <h3 className='text-xl  font-bold   sm:text-4xl  overflow-visible' >
                    Welcome to my playground.
                </h3>
                <p className='mt-5 w-72 sm:w-full text-xs sm:text-base '>
                    This is an archive collection of projects I have worked on over time.
                </p>
                <p className='mt-3 w-72 sm:w-full text-xs sm:text-base '>
                    I hope you get to enjoy interacting with my designs here.
                </p>
            </section>
            <section className='px-6 gap-4 grid-cont [&>*]:scale-[1] scale-[1.2]  overflow-scroll [&>*]:overflow-visible mt-32 mb-64 text-[8.2px] sm:px-16 justify-between  text-lightShade'>
                <div className='h-72 w-72 grid-1 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground rounded-lg p-2 [&>*]:h-[75%] flex justify-around h-56 w-64'>
                        <img className='self-start' src={bud1} alt="" />
                        <img className='self-center' src={bud2} alt="" />
                        <img className='self-end' src={bud3} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Bud &mdash; An Online Diary Platform with Interactive AI.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
                <div className='h-72 w-72 grid-2 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground rounded-lg p-2 [&>*]:h-[75%] flex justify-around h-56 w-64'>
                        <img className='self-end' src={flo1} alt="" />
                        <img className='self-center' src={flo2} alt="" />
                        <img className='self-start' src={flo3} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Flo &mdash; An app that gives users praise.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
                <div className='h-72 w-72 grid-3 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                        <img className='self-end' src={craiglist1} alt="" />
                        <img className='self-center' src={craiglist2} alt="" />
                        <img className='self-start' src={craiglist3} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Flo &mdash; An app that gives users praise.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
                <div className='h-72 w-72 grid-4 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground  rounded-lg flex justify-center p-2 [&>*]:h-[60%]  h-56 w-64'>
                        <img className='self-center' src={winniamp} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Flo &mdash; An app that gives users praise.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
                <div className='h-72 w-72 grid-5 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground rounded-lg p-2 [&>*]:w-[40%] flex justify-around h-56 w-64'>
                        <div className='flex flex-col justify-between '>
                            <img className='' src={shoptacle1} alt="" />
                            <img className='' src={shoptacle3} alt="" />
                        </div>
                        <img className='self-center' src={shoptacle2} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Flo &mdash; An app that gives users praise.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
                <div className='h-72 w-72 grid-6 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                        <img className='self-end' src={dribbble1} alt="" />
                        <img className='self-center' src={dribbble2} alt="" />
                        <img className='self-start' src={dribbble3} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Flo &mdash; An app that gives users praise.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
                <div className='h-72 w-72 grid-7 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground  rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                        <img className='self-start mt-6' src={buonnisimo1} alt="" />
                        <img className='self-center mt-6' src={buonnisimo2} alt="" />
                        <img className='self-start mt-6' src={buonnisimo3} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Flo &mdash; An app that gives users praise.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
                <div className='h-72 w-72 grid-8 rounded-xl bg-transluscent p-4'>
                    <div className='bg-playground rounded-lg p-2 [&>*]:h-[60%] flex justify-around h-56 w-64'>
                        <img className='self-center' src={casual} alt="" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <p className='w-[60%] font-medium'>
                            Flo &mdash; An app that gives users praise.
                        </p>
                        <p className='self-center text-opaque border-opaque py-1 px-2 rounded-3xl border'>
                            Design
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Playground
