import React from "react";
import CustomCard from "./CustomCard";

const Highlights = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mt-4 md:mt-[2rem] p-4 md:p-[5rem]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-center max-w-[900px] tracking-tighter">
          <span className="text-3xl md:text-5xl lg:text-6xl font-normal">Harness the power of AI</span>, <br/>
          <span className="text-white/60 text-xl md:text-2xl lg:text-3xl">making search engine optimization intuitive and effective for all skill levels.</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-[1100px]">
          <div className="md:col-span-1 md:pr-2">
            <CustomCard
              src="/assets/Images/visual-element.png"
              alt="Visual"
              height={400}
              width={400}
              h3="SEO goal setting"
              p1="Helps you set and achieve SEO"
              p2="goals with guided assistance."
            />
          </div>
          <div className="md:col-span-1">
            <CustomCard
              src="/assets/Images/app-widget-trim.png"
              alt="Visual"
              height={400}
              width={350}
              h3="SEO goal setting"
              p1="Helps you set and achieve SEO"
              p2="goals with guided assistance."
            />
          </div>
          <div className="md:col-span-1">
            <CustomCard
              src="/assets/Images/app-widget-2.png"
              alt="Visual"
              height={400}
              width={350}
              h3="SEO goal setting"
              p1="Helps you set and achieve SEO"
              p2="goals with guided assistance."
            />
          </div>
          <div className="md:col-span-1 md:pl-2">
            <CustomCard
              src="/assets/Images/cone.png"
              alt="Visual"
              height={400}
              width={400}
              h3="Smart keyword generator"
              p1="Automatic suggestions and "
              p2="the best keywords to target"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
