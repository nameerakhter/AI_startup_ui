import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="border opacity-15"></div>
      <div className="p-4 md:p-8">
        <div className="flex justify-center items-center p-2">
          <div className="bg-purple-800 h-[60px] w-[60px] relative blur-lg"></div>
          <Image
            src="/assets/Images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="absolute"
          />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 py-8">
          <h1 className="text-2xl md:text-3xl mb-8 md:mb-0">Get in Touch</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-medium">Product</h2>
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Features</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Integration</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Updates</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-medium">Company</h2>
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">About</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Blog</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Careers</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-medium">Resources</h2>
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Examples</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Community</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Guides</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-medium">Legal</h2>
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Privacy</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Terms</p>
                <p className="text-sm md:text-base opacity-50 hover:opacity-100 cursor-pointer">Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
