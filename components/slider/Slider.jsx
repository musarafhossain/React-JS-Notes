import React from 'react'
import SliderItems from './SliderItems';

const Slider = ({isToggle, page}) => {
  const data = [
  {
    title : '1. ReactJS — Introduction',
    name : 'introduction',
  },
  {
    title : '2. ReactJS — Installation',
    name : 'installation'
  },
  {
    title : '3. ReactJS — Architecture',
    name : 'architecture',
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