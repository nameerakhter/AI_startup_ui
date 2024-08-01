"use client";
import React, { useEffect } from "react";
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
  return (
    <div className="bg-custom-background bg-cover min-h-screen shadow-lg">
      <section className="remove-scrollbar container mt-[2rem]">
        <div className="sub-container flex flex-col py-10 items-center">
          <Badge />
          <div className="flex flex-col items-center justify-center py-[2rem] gap-3 ">
            <h1 className="text-7xl ">Boost your</h1>
            <h1 className="text-7xl ">rankings with AI.</h1>
            <p>Elevate your site’s visibility effortlessly with AI, where </p>
            <p>smart technology meets user-friendly SEO tools.</p>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ delay: 0.1 }}>
            <Button>Start for free</Button>
          </motion.div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col items-center">
          {/* Caraousel */}
          <Carousel className="">
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 w-[1100px]">
                
                <div style={{ borderRadius: "50px", overflow: "hidden" }}>
                  <video
                    src="/assets/videos/video.mp4"
                    autoPlay
                    muted
                    loop
                    style={{ width: "100%", height: "auto" }}
                    className="" 
                  ></video>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="w-full h-[400px] absolute bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
