"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};
const HamburgerMenu = ({ navItems }: { navItems: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="p-2 focus:outline-none">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default  function ResponsiveNavbar ()  {
  const navItems = ['Features', 'Developers', 'Company', 'Blog', 'Changelog'];
  const size = useWindowSize();
  const isMobile = size.width < 768;

  return (
    <div className={`flex items-center justify-center ${isMobile ? 'flex-row' : 'flex-row'}`}>
      <div className='flex justify-center flex-row items-center p-2'>
        <div className='bg-purple-800 h-[45px] w-[45px] relative blur-lg'></div>
        <Image src='/assets/Images/logo.png' alt='logo' width={38} height={38} className='absolute' unoptimized/>
      </div>
      {isMobile ? (
        <HamburgerMenu navItems={navItems} />
      ) : (
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center thin-border opacity-55 rounded-full px-1 m-7 gap-7 font-thin max-w-[64rem]`}>
          {navItems.map((item, index) => (
            <div className='font-normal cursor-pointer' key={index}>{item}</div>
          ))}
        </div>
      )}
      <div className='border-1 border-white rounded-xl p-2'>
        <Button className='shad-primary-btn rounded-xl'>Join Waitlist</Button>
      </div>
    </div>
  );
};


