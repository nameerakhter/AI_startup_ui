'use client'
import React from "react";
import Badge from "./elements/Badge";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <div className="bg-custom-background bg-cover min-h-screen shadow-lg shadow-red-800">
      <section className="remove-scrollbar container mt-[2rem]">
        <div className="sub-container flex flex-col py-10 items-center">
          <Badge />
          <div className="flex flex-col items-center justify-center py-[2rem] gap-3 ">
            <h1 className="text-7xl ">Boost your</h1>
            <h1 className="text-7xl ">rankings with AI.</h1>
            <p>Elevate your site’s visibility effortlessly with AI, where </p>
            <p>smart technology meets user-friendly SEO tools.</p>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ delay: .1 }}>
            <Button>Start for free</Button>
          </motion.div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col items-center">
        <Image src='/assets/Images/app-widget-1.png' alt="app-widget" height={794} width={1098} />
        <div className="w-full h-[400px] absolute bottom-0 bg-gradient-to-t from-black to-transparent" ></div>
        </div>
      
      </div>
    </div>
  );
};

export default Hero;
