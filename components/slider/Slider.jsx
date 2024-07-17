import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdDashboard, MdOutlineHelpOutline } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { TbPhoneCall } from "react-icons/tb";
import SliderItems from './SliderItems';

const Slider = ({isToggle, page}) => {
  return (
    <div className={`duration-300 border-r absolute md:static border-gray-300 slider-height bg-gray-100 ${isToggle?' w-72 ':' w-0 '}`}>
        <div className={`scale-box ${isToggle?' flex zoom-scale-box ':' hidden '} duration-200`}>
            <div className='text-nowrap w-full flex flex-col py-5 px-2 gap-1'>
              <SliderItems Icon={FaHome} link='/' title='Home' isOpen={page === 'home'} />
              <SliderItems Icon={MdDashboard} link='/dashboard' title='Dashboard' isOpen={page === 'dashboard'} />
              <SliderItems Icon={MdOutlineHelpOutline} link='/help' title='Help' isOpen={page === 'help'} />
              <SliderItems Icon={FcAbout} link='/about-us' title='About Us' isOpen={page === 'about-us'} />
              <SliderItems Icon={TbPhoneCall} link='/contact-us' title='Contact Us' isOpen={page === 'contact-us'} />
            </div>
        </div>
    </div>
  )
}

export default Slider