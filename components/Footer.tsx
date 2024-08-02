import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="border opacity-15"></div>
      <div className="p-[1rem]">
        <div className="flex justify-center flex-row items-center p-2">
          <div className="bg-purple-800 h-[60px] w-[60px] relative blur-lg"></div>
          <Image
            src="/assets/icons/Logo.png"
            alt="logo"
            width={50}
            height={50}
            className="absolute"
          />
        </div>
        <div className="flex items-center justify-center gap-[23rem]">
          <h1 className="text-3xl py-[2rem]">Get in Touch</h1>
          <div className="h-[700px] px-[2rem] flex items-center gap-[7rem] py-[4rem] ">
        <section className="w-1/4 h-[400px]">
          <div className="flex flex-col h-full items-center justify-around">
            <h1 className="text-3xl">Product</h1>
            <p className="opacity-50">Features</p>
            <p className="opacity-50">Integration</p>
            <p className="opacity-50">Updates</p>
          </div>
        </section>
        <section className="w-1/4 h-[400px]">
          <div className="flex flex-col h-full items-center justify-around">
            <h1 className="text-3xl">Company</h1>
            <p className="opacity-50">About</p>
            <p className="opacity-50">Blog</p>
            <p className="opacity-50">Careers</p>
          </div>
        </section>
        <section className="w-1/4 h-[400px]">
          <div className="flex flex-col h-full items-center justify-around">
            <h1 className="text-3xl">Resources</h1>
            <p className="opacity-50">Examples</p>
            <p className="opacity-50">Community</p>
            <p className="opacity-50">Guides</p>
          </div>
        </section>
        <section className="w-1/4 h-[400px]">
          <div className="flex flex-col h-full items-center justify-around">
            <h1 className="text-3xl">Legal</h1>
            <p className="opacity-50">Privacy</p>
            <p className="opacity-50">Terms</p>
            <p className="opacity-50">Security</p>
          </div>
        </section>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
