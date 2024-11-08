import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="p-4 md:p-8 lg:p-[2rem]">
      <div className="flex flex-col items-center p-4 md:p-6 lg:p-[4rem]">
        <h1 className="text-2xl md:text-3xl lg:text-[4rem] text-center mb-4">Our Clients</h1>
        <p className="text-base md:text-xl lg:text-2xl text-center">Hear firsthand how our solutions have</p>
        <p className="text-base md:text-xl lg:text-2xl text-center">boosted online success for users like you.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-4">
        <div className="relative flex items-center justify-center bg-background-blur w-full md:w-[400px] lg:w-[550px] h-[300px] md:h-[400px] lg:h-[500px] bg-cover rounded-2xl">
          <Image
            src="/assets/Images/testimonial.png"
            alt="testimonial"
            width={217}
            height={217}
            className="w-[150px] md:w-[180px] lg:w-[217px] h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-center md:text-left">This product has completely</h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-center md:text-left">transformed how I manage my</h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-center md:text-left">projects and deadlines.</h1>
          <p className="text-center md:text-left p-2 md:p-4 mt-4">Talia Taylor</p>
          <p className="text-center md:text-left p-2 md:p-4 opacity-55">Digital Marketing Director @Quantum</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
