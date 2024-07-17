import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center md:col-span-1">
            <a href="#" className="text-xl font-bold">
              MySite
            </a>
          </div>
          <div className="flex flex-col items-center md:col-span-2 md:flex-row md:justify-end space-y-4 md:space-y-0">
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Home</a>
              <a href="#" className="hover:text-gray-400">About</a>
              <a href="#" className="hover:text-gray-400">Services</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
