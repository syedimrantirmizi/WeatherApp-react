import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[75px] flex justify-center items-center'>
        <div className=' h-[42px] w-[95%] flex justify-between  items-center'>
          <div className='bg-white rounded-md sm:p-2'>
          <img src="/Untitled.png" className='w-[75px] h-[37.5px] ' alt="" />
          </div>
          <p className='font-montserrat-bold p-2 sm:px-10 rounded-xl text-xl bg-blue-500 text-white'>WEATHER APP</p>
          <div>
            <button className='bg-blue-500 hover:scale-110 transition-all hover:bg-blue-700 p-2 text-white duration-300 sm:px-8 rounded-xl font-montserrat-thin'>LOREM</button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar