import React from 'react'
import displayPicture from '../assets/display-picture.png'

// import landingAlertz from '../images/landing-alertz.png'
import { Link } from 'react-router-dom';
import landingData from '../data/landing'
const LANDING = () => {
  console.log(landingData);
  return (
    <>
      <section className='px-6 sm:px-16 text-lightShade'>
        <div className='flex items-center flex-wrap  my-20'>
          <img className='h-10 sm:h-20' src={displayPicture} alt="" />
          <h3 className='ml-6 text-xl w-[50%] font-bold sm:min-w-[60%]  sm:text-4xl  overflow-visible' >Product Designer.</h3>
          <p className='mt-4 w-72 sm:w-full text-xs sm:text-base '>Interested in building accessible and sustainable products.</p>
        </div>
      </section>
      <section className='px-6 sm:px-16 flex gap-6 flex-col [&>*]:text-lightShade [&>*]:w-full md:flex-row md:flex-wrap md:[&>*]:w-[48%]  [&>*]:h-90 ' >


        {landingData.map((datum) => {
          console.log(datum.image);
          return (
            <div className="mb-8">
              <img src={datum.image} alt={datum.name} />
              <aside className='flex flex-col'>
                <div className='flex justify-between'>
                  <h3 className='font-bold text-sm md:text-base mt-2'>{datum.name}</h3>
                  <p className='text-xs mt-2 md:text-sm'>{datum.year}</p>
                </div>
                <p className='text-xs md:mb-8 md:text-sm'>{datum.details}</p>
              </aside>
            </div>
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
