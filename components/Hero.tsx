"use client";
import React, { useEffect, useState } from "react";
import Badge from "./elements/Badge";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const colors = ["#3b1a60", "#6e36c9"];

const Hero = () => {
  const color = useMotionValue(colors[0]);
  const background = useMotionTemplate`radial-gradient(100% 100% at 0% 100%, #331354 30%, ${color})`;
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
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

  const isMobile = windowSize.width < 768;
  const styles = {
    container: `bg-custom-background bg-cover min-h-screen shadow-lg ${
      isMobile ? 'px-4' : ''
    }`,
    heading: `text-center ${isMobile ? 'text-4xl' : 'text-7xl'}`,
    paragraph: `text-center ${isMobile ? 'text-sm px-4' : 'text-base'}`,
    videoContainer: `${isMobile ? 'w-full' : 'w-[1100px]'}`
  };
  return (
    <div className="bg-custom-background bg-cover min-h-screen shadow-lg px-4 md:px-8">
      <section className="remove-scrollbar container mt-[2rem]">
        <div className="sub-container flex flex-col py-6 md:py-10 items-center">
          <Badge />
          <div className="flex flex-col items-center justify-center py-[1.5rem] md:py-[2rem] gap-2 md:gap-3">
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-center">Boost your</h1>
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-center">rankings with AI.</h1>
            <p className="text-sm md:text-base text-center px-2 md:px-0">Elevate your site&apos;s visibility effortlessly with AI, where</p>
            <p className="text-sm md:text-base text-center px-2 md:px-0">smart technology meets user-friendly SEO tools.</p>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ delay: 0.1 }}>
            <Button>Start for free</Button>
          </motion.div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col items-center">
          <Carousel className="w-full md:max-w-[1420px]">
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 w-full">
                <div style={{ borderRadius: "25px", overflow: "hidden" }} className="md:rounded-[35px] lg:rounded-[50px]">
                  <video
                    src="/assets/videos/video.mp4"
                    autoPlay
                    muted
                    loop
                    style={{ width: "100%", height: "auto" }}
                    className="w-full"
                  ></video>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="w-full h-[100px] md:h-[150px] lg:h-[200px] absolute bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
