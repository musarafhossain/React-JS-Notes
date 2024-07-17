import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = ({toggleHandle}) => {
  return (
    <div className='h-[60px] bg-gray-100 border-b border-gray-300 z-50'>
      <div className='flex h-full items-center'>
        <div className='flex justify-center w-20'>
          <button className='md:hover:bg-white md:hover:shadow rounded-lg p-2' onClick={toggleHandle}><HiMiniBars3BottomLeft className='h-7 w-7'/></button>
        </div>
        <div className='text-nowrap font-light text-3xl'>Musaraf's Tech</div>
        <div className='w-full flex items-center justify-end pr-5'>
          <button className='hover:bg-white hover:shadow rounded-lg p-2'><IoNotifications className='h-7 w-7'/></button>
          <button className='hover:bg-white hover:shadow rounded-lg p-2'><FaUserCircle className='h-7 w-7'/></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar