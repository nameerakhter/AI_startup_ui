import React from "react";
import Badge from "./elements/Badge";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-custom-background bg-cover min-h-screen shadow-lg shadow-red-800">
      <section className="remove-scrollbar container mt-[2rem]">
        <div className="sub-container flex flex-col py-10 items-center">
          <Badge />
          <div className="flex flex-col items-center justify-center py-[2rem] gap-3">
            <h1 className="text-7xl ">Boost your</h1>
            <h1 className="text-7xl ">rankings with AI.</h1>
            <p>Elevate your site’s visibility effortlessly with AI, where </p>
            <p>smart technology meets user-friendly SEO tools.</p>
          </div>
        <Button>Start for free</Button>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center">
      <Image src='/assets/Images/app-widget-1.png' alt="app-widget" height={794} width={1098} className=""/>
      </div>
    </div>
  );
};

export default Hero;
