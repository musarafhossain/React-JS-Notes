import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import TerminalCommand from '@/components/TerminalCommand';
import Image from 'next/image';
import img1 from '@/public/chapters/installation/img1.bmp'

const Installation = () => {
  return (
    <div className='h-full w-full flex flex-col gap-10 overflow-scroll p-4 md:p-10 overflow-x-hidden'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>ReactJS — Installation</h1>
            <hr className='hr-tag'/>
            <p className='text-justify'>This chapter explains the installation of React library and its related tools in your machine. Before moving to the installation, let us verify the prerequisite first.</p>
            <p className='text-justify'>React provides CLI tools for the developer to fast forward the creation, development and deployment of the React based web application. React CLI tools depends on the Node.js and must be installed in your system. Hopefully, you have installed Node.js on your machine. We can check it using the below command:</p>
            <TerminalCommand command='node --version'/>
            <p className='text-justify'>You could see the version of Nodejs you might have installed. It is shown as below for me,</p>
            <TerminalCommand command='v20.13.1'/>
            <p className='text-justify'>If Nodejs is not installed, you can download and install by visiting <a href="https://nodejs.org/en/download/" target="_blank" className='hover:text-blue-800 text-blue-500 underline font-bold'>Node JS</a>.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>Toolchain</h2>
            <hr className='hr-tag'/>
            <p className='text-justify'>React toolchain helps to create, build, run and deploy the React application. React toolchain basically provides a starter project template with all necessary code to bootstrap the application.</p>
            <p className='text-justify'>Some of the popular toolchain to develop React applications are:</p>
            <ul className='ml-10 list-disc text-justify'>
                <li><span className='font-bold'>Create React App -</span> Single Page Application (SPA) oriented toolchain</li>
                <li><span className='font-bold'>Next.js -</span> server-side rendering oriented toolchain</li>
                <li><span className='font-bold'>Gatsby -</span> Static content oriented toolchain</li>
            </ul>
            <p className='text-justify'>Tools required to develop a React application are:</p>
            <ul className='ml-10 list-disc text-justify'>
                <li>The serve, a static server to serve our application during development</li>
                <li>Babel compiler</li>
                <li>Create React App CLI</li>
            </ul>
            <p className='text-justify'>Let us learn the basics of the above mentioned tools and how to install those in this chapter.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>The serve static server</h2>
            <hr className='hr-tag'/>
            <p className='text-justify'>The serve is a lightweight web server. It serves static site and single page application. It loads fast and consume minimum memory. It can be used to serve a React application. Let us install the tool using <span className='italic'>npm</span> package manager in our system.</p>
            <TerminalCommand command='npm install serve'/>
            <p className='text-justify'>Let us create a simple static site and serve the application using serve app.</p>
            <p className='text-justify'>Open a command prompt and go to your workspace.</p>
            <TerminalCommand command='cd /go/to/your/workspace'/>
            <p className='text-justify'>Folder Structure :</p>
            <TerminalCommand command={`project-root/\n├── node_modules/\n├── static_site/\n│   ├── index.html\n├── package-lock.json\n└── package.json`}/>
            <p className='text-justify'>Create a new folder, static_site and change directory to newly created folder.</p>
            <TerminalCommand command={`mkdir static_site\ncd static_site`}/>
            <p className='text-justify'>Next, create a simple webpage inside the folder using your favorite html editor.</p>
            <CodeBlock codeString={`<!DOCTYPE html>\n <html>\n   <head>\n     <meta charset="UTF-8" />\n     <title>Static website</title>\n   </head>\n    <body>\n     <div><h1>Hello!</h1></div>\n    </body>\n </html>`} language='html'/>
            <p className='text-justify'>Next, run the serve command.</p>
            <TerminalCommand command='serve .'/>
            <p className='text-justify'>We can also serve single file, index.html instead of the whole folder.</p>
            <TerminalCommand command='serve ./index.html'/>
            <p className='text-justify'>Next, open the browser and enter <a href="http://localhost:3000" target="_blank" className='hover:text-blue-800 text-blue-500 underline font-bold italic'> http://localhost:3000</a> in the address bar and press enter. serve application will serve our webpage as shown below.</p>
            <Image src={img1} alt='Image Load Failed'/>
            <p className='text-justify'>The serve will serve the application using default port, 3000. If it is not available, it will pick up a random port and specify it.</p>
            <TerminalCommand command={`┌──────────────────────────────────────────────────┐\n│                                                  │\n│   Serving!                                       │\n│                                                  │\n│   - Local:    http://localhost:52775             │\n│   - Network:  http://192.168.93.106:52775        │\n│                                                  │\n│   This port was picked because 3000 is in use.   │\n│                                                  │\n│   Copied local address to clipboard!             │\n│                                                  │\n└──────────────────────────────────────────────────┘`}/>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>Babel compiler</h2>
            <hr className='hr-tag'/>
            <ul className='ml-10 list-disc text-justify'>
                <li>Babel is a JavaScript compiler which compiles many variant (es2015, es6, etc.,) of JavaScript into standard JavaScript code supported by all browsers.</li>
                <li>React uses JSX, an extension of JavaScript to design the user interface code.</li>
                <li>Babel is used to compile the JSX code into JavaScript code.</li>
            </ul>
            <p className='text-justify'>To install Babel and it’s React companion, run the below command:</p>
            <TerminalCommand command={`npm install babel-cli@6 babel-preset-react-app@3 \n... \n... \n\n+ babel-cli@6.26.0 \n+ babel-preset-react-app@3.1.2 \nupdated 2 packages in 8.685s`}/>
            <p className='text-justify'>Babel helps us to write our application in next generation of advanced JavaScript syntax.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl md:text-2xl font-semibold'>Create React App toolchain</h2>
            <hr className='hr-tag'/>
            <p className='text-justify'>Create React App is a modern CLI tool to create single page React application. It is the standard tool supported by React community. It handles babel compiler as well. Let us install Create React App in our local system.</p>
            <TerminalCommand command={`> npm install create-react-app\n+ create-react-app@4.0.1 added 6 packages from 4 contributors, removed 37 packages and updated 12 packages in 4.693s`}/>
            <div className='flex flex-col gap-2 md:ml-5'>
                <h3 className='text-lg md:text-xl font-semibold'>Updating the toolchain</h3>
                <hr className='hr-tag'/>
                <p className='text-justify'>React Create App toolchain uses the react-scripts package to build and run the application. Once we started working on the application, we can update the react-script to the latest version at any time using npm package manager.</p>
                <TerminalCommand command={`npm install react-scripts@latest`}/>
            </div>
            <div className='flex flex-col gap-2 md:ml-5'>
                <h3 className='text-lg md:text-xl font-semibold'>Advantages of using React toolchain</h3>
                <hr className='hr-tag'/>
                <p className='text-justify'>React toolchain provides lot of features out of the box. Some of the advantages of using React toolchain are:</p>
                <ul className='ml-10 list-disc text-justify'>
                    <li>Predefined and standard structure of the application.</li>
                    <li>Ready-made project template for different type of application.</li>
                    <li>Development web server is included.</li>
                    <li>Easy way to include third party React components.</li>
                    <li>Default setup to test the application.</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Installation;
