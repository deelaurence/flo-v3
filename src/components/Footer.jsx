import React from 'react'
const Footer = () => {
  return (
    <footer
      className="pt-24 pb-24 px-6 sm:px-16 bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade"
    >
      <div className='bg-lightShade dark:bg-darkShade h-[1px] w-full'>
      </div>
      <div className='mt-14'>
        <h3 className='text-xl ml-16 text-right '>
          Got an interesting project you’d
          like to discuss?
        </h3>
        <section className='md:flex md:justify-between'>
          <div>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              Contact.
            </p>
            <a className='font-medium' href="mailto:Ralph.flourish@yahoo.com">Ralph.flourish@yahoo.com</a>
          </div>
          <div>
            <p className='text-opaque mt-24 mb-3'>
              Connect with me.
            </p>
            <div className='flex font-medium gap-4'>
              <a href="">Notion</a>
              <a href="">Dribbble</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
        </section>

      </div>

    </footer>

  )
}

export default Footer
