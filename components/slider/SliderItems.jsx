import React from 'react'
import Link from 'next/link'

const SliderItems = ({Icon, link, title, isOpen}) => {
  return (
    <div className={`${isOpen ? ' bg-white shadow text-blue-400 ' : ''}hover:bg-white hover:shadow rounded-lg hover:text-blue-400 duration-300`}>
        <Link href={link} className='w-full flex items-center gap-3 px-3 py-2'>
            <Icon className='h-7 w-7'/>
            <div className='font-semibold text-lg '>
                {title}
            </div> 
        </Link>
    </div>
  )
}

export default SliderItems