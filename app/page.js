"use client";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";
import Introduction from '@/chapters/Introduction'
import Installation from "@/chapters/Installation";
import { useState, useEffect } from "react";

export default function Home() {
  const [isToggle, setIsToggle] = useState(true);
  const [tab, setTab] = useState('installation');

  const toggleHandle = () => {
    setIsToggle(!isToggle);
  };

  // Function to check if the device is mobile
  const isMobileDevice = () => window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    // Set isToggle to false if the device is mobile
    if (isMobileDevice()) {
      setIsToggle(false);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleHandle={toggleHandle} />
      <div className="flex">
        <Slider isToggle={isToggle} page={{tab, setTab}} />
        <div className="flex w-full slider-height overflow-x-hidden overflow-auto">
          {tab === 'introduction' && (
            <Introduction/>
          )}
          {tab === 'installation' && (
            <Installation/>
          )}
          {tab === 'contact-us' && (
            <h1 className="text-4xl font-bold">This is the Contact Us page...</h1>
          )}
          {tab === 'help' && (
            <h1 className="text-4xl font-bold">This is the Help page...</h1>
          )}
          {tab === 'dashboard' && (
            <h1 className="text-4xl font-bold">This is the Dashboard page...</h1>
          )}
        </div>
      </div>
    </div>
  );
}
