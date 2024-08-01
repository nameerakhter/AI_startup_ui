import React from "react";
import CustomCard from "./CustomCard";

const Highlights = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center text-5xl mt-[2rem] p-[5rem] font-light">
        <h1>Harness the power of AI, making</h1>
        <h1>search engine optimization intutive</h1>
        <h1>and effective for all skill levels.</h1>
      </div>
      <div className="flex flex-col items-center justify-between">
      <div className="flex flex-row items-center gap-5 max-w-[1100px]">

        <CustomCard
          src="/assets/Images/visual.png"
          alt="Visual"
          height={400}
          width={206}
          h3="SEO goal setting"
          p1="Helps you set and achieve SEO"
          p2="goals with guided assistance."
        />


        <CustomCard
          src="/assets/Images/app-widget-trim.png"
          alt="Visual"
          height={400}
          width={700}
          h3="SEO goal setting"
          p1="Helps you set and achieve SEO"
          p2="goals with guided assistance."
        />

        
      </div>
      </div>
      
    </div>
  );
};

export default Highlights;
