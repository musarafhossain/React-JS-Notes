import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdDashboard, MdOutlineHelpOutline } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { TbPhoneCall } from "react-icons/tb";
import SliderItems from './SliderItems';

const Slider = ({isToggle, page}) => {
  const data = [
  {
    icon : FaHome,
    title : 'Home',
    name : 'home',
  },
  {
    icon : MdDashboard,
    title : 'Dashboard',
    name : 'dashboard'
  },
  {
    icon : MdOutlineHelpOutline,
    title : 'Help',
    name : 'help',
  },
  {
    icon : FcAbout,
    title : 'Home',
    name : 'about-us'
  },
  {
    icon : TbPhoneCall,
    title : 'Contact Us',
    name : 'contact-us'
  },
];
  return (
    <div className={`duration-300 border-r absolute md:static border-gray-300 slider-height bg-gray-100 ${isToggle?' w-72 ':' w-0 '}`}>
        <div className={`scale-box ${isToggle?' flex zoom-scale-box ':' hidden '} duration-200`}>
            <div className='text-nowrap w-full flex flex-col py-5 px-2 gap-1'>
              {data.map((item, index) => (
                <SliderItems 
                  key={index} 
                  Icon={item.icon} 
                  title={item.title} 
                  name={item.name} 
                  page={page} 
                  isOpen={item.name===page.tab} 
                />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Slider