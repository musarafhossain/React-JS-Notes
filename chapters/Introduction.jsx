import React from 'react';

const Introduction = () => {
  return (
    <div className='h-full w-full flex flex-col gap-10 overflow-scroll p-4 md:p-10 overflow-x-hidden'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>ReactJS — Introduction</h1>
            <hr className='hr-tag'/>
            <p className='text-justify'>React is a JavaScript library developed by Facebook. It's used for building user interfaces (UIs) and is particularly well-suited for creating single-page applications where UI changes are frequent. React allows developers to create reusable UI components, which are small, self-contained units of UI that can be composed together to build complex interfaces.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>React Version</h2>
            <hr className='hr-tag'/>
            <ul className='ml-10 list-disc text-justify'>
                <li>The initial version, 0.3.0 of React was released in May 2013</li>
                <li>The latest version, <span className='font-bold'>17.0.1</span>, was released in October 2020</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>Features</h2>
            <hr className='hr-tag'/>
            <ul className='ml-10 list-disc text-justify'>
                <li>Solid base architecture</li>
                <li>Extensible architecture</li>
                <li>Component-based library</li>
                <li>JSX-based design architecture</li>
                <li>Declarative UI library</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>Benefits</h2>
            <hr className='hr-tag'/>
            <ul className='ml-10 list-disc text-justify'>
                <li>Easy to learn</li>
                <li>Easy to adapt in modern as well as legacy applications</li>
                <li>Faster way to code functionality</li>
                <li>Availability of a large number of ready-made components</li>
                <li>Large and active community</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>Applications</h2>
            <hr className='hr-tag'/>
            <ul className='ml-10 list-disc'>
                <li>Facebook, popular social media application</li>
                <li>Instagram, popular photo sharing application</li>
                <li>Netflix, popular media streaming application</li>
                <li>Code Academy, popular online training application</li>
                <li>Reddit, popular content sharing application</li>
            </ul>
        </div>
    </div>
  );
};

export default Introduction;
