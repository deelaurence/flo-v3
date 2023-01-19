import React from 'react'

const WorkWithFlo = () => {
  return (
    <section className="bg-darkShade py-20 text-lightShade">
      <div className="bg-darkShade my-6">
        <h3 className="text-center text-[1.5rem] font-semibold">Work with Flo</h3>
      </div>
      <div>
        <form className="flex flex-col items-center" action="">
          <label className="font-semibold  mt-10 mb-3" htmlFor="Name">Your Name
            <br /><input className="rounded-[8px] pl-4 mt-3" type="text" name="" id="" />
          </label>


          <br />
          <label className="font-semibold  " htmlFor="email">Email address

            <br /> <input type="email" className="rounded-[8px] mt-3 pl-4" name="" id="" />
          </label><br />
          <textarea
            placeholder="Type a message..."
            className="resize-none textarea  rounded-[8px]"
            name=""
            id=""
            cols="30"
            rows="10" />
          <button
            className="my-12 border-[1px] h-14  font-semibold text-[#fafafa] w-56  border-[#fafafa] py-3 px-16 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default WorkWithFlo
