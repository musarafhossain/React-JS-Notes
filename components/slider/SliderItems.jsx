import React from 'react'

const SliderItems = ({Icon, title, name, page, isOpen}) => {
  const handleClick = () => {
    page.setTab(name)
  }
  return (
    <div className={`${isOpen ? ' bg-white shadow text-blue-400 ' : ''}hover:bg-white hover:shadow rounded-lg hover:text-blue-400 duration-300`}>
        <button onClick={handleClick} className='w-full flex items-center gap-3 px-3 py-2 cursor- relative'>
            <Icon className='h-7 w-7'/>
            <div className='font-semibold text-lg '>
                {title}
            </div> 
        </button>
    </div>
  )
}

export default SliderItems