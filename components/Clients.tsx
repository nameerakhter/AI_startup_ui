import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="p-[2rem] top-2 ">
      <div className="flex flex-col items-center p-[4rem]">
        <h1 className="text-[4rem]">Our Clients</h1>
        <p className="text-2xl">Hear firsthand how our solutions have</p>
        <p className="text-2xl"> boosted online success for users like you.</p>
      </div>
      <div className="flex items-center w-full">
        <div className="flex items-center justify-between bg-contain w-full">
          <div className=" relative flex items-center justify-center bg-background-blur h-[500px] w-[550px] bg-cover">
            {" "}
            {/* New wrapper div */}
            <Image
              src="/assets/Images/testimonial.png"
              alt="testimonial"
              width={217}
              height={217}
            />
          </div>{" "}
          <div className="w-1/2 absolute right-[13rem] ">
            <h1 className="text-4xl p-2 font-light">This product has completely</h1>
            <h1 className="text-4xl p-2 font-light">transformed how I manage my</h1>
            <h1 className="text-4xl p-2 font-light">projects and deadlines.</h1>
            <p className="p-4">Talia Taylor</p>
            <p className="p-4 opacity-55">Digital Marketing Director @Quantum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
