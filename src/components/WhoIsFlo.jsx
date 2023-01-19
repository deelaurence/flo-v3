import React from 'react'
import heroImg from '../assets/hero-img.png'
import threeShoes from '../assets/three-shoes.png'
import seaWaves from '../assets/sea-waves.png'
import shot1 from '../assets/shot1.png'
import shot2 from '../assets/shot2.png'
import shot3 from '../assets/shot3.png'
import shot4 from '../assets/shot4.png'

const WhoIsFlo = () => {
  return (
    <main className='px-6 pt-24 md:px-16 bg-darkShade text-lightShade'>
      <section className='mb-24 flex flex-col gap-20 items-end md:flex-row-reverse'>
        <div className='w-[70%] self-start md:w-[40%]'>
          <img src={heroImg} alt="" />
        </div>
        <div className='mt-8 text-2xl md:text-3xl font-medium md:w-[60%]'>
          <h3 className='mb-2'>
            Inquisitive.
          </h3>
          <h3 className='mb-8'>
            Passionate.
          </h3>
          <div className='text-sm [&>*]:mb-4 font-regular'>
            <p className=''>
              Hi! My name is Flourish Ralph and I am a Product Designer
              from Nigeria.
            </p>
            <p className=''>
              I am constantly inspired by the world around me and driven to create
              meaningful and innovative designs.
            </p>
            <p>
              My work is characterized by a strong focus on user experience, and I am
              always looking for ways to improve and enhance the way people interact
              with the products I design.
            </p>
            <p>
              I believe that good design has the power to change the
              world, and I am dedicated to using my skills and talents to
              make a positive impact on the lives of others.
            </p>
          </div>
        </div>
      </section>
      <section className='mb-24 flex flex-col gap-20 items-end md:flex-row'>
        <div className='w-[70%] self-end md:w-[90%]'>
          <img src={threeShoes} alt="" />
        </div>
        <div className='mt-8 text-2xl md:text-3xl md:text-right md:w-[120%] font-medium'>
          <h3 className='mb-2'>
            Creative.
          </h3>
          <h3 className='mb-8'>
            Perceptive.
          </h3>
          <div className='text-sm [&>*]:mb-4 font-regular'>
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
        <div className='w-[70%] self-start md:w-[40%]'>
          <img src={seaWaves} alt="" />
        </div>
        <div className='mt-8 text-2xl md:text-3xl font-medium md:w-[60%]'>
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
      <section className=''>
        <p className='text-center mb-8'>Some of my shots.</p>
        <div className='flex flex-wrap gap-6 [&>*]:w-[46%] sm:[&>*]:w-[48%] md:[&>*]:w-[48%]'>
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
