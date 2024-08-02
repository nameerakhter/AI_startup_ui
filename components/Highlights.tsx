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
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-start gap-5 max-w-[1100px] ">
          <section className="flex items-start gap-4 max-h-[500px]">
            <CustomCard
              src="/assets/Images/visual.png"
              alt="Visual"
              height={400}
              width={350}
              h3="SEO goal setting"
              p1="Helps you set and achieve SEO"
              p2="goals with guided assistance."
            />
            <CustomCard
              src="/assets/Images/app-widget-trim.png"
              alt="Visual"
              height={400}
              width={500}
              h3="SEO goal setting"
              p1="Helps you set and achieve SEO"
              p2="goals with guided assistance."
            />
          </section>

          <section className="flex items-start gap-4">
            <CustomCard
              src="/assets/Images/app-widget-2.png"
              alt="Visual"
              height={400}
              width={550}
              h3="SEO goal setting"
              p1="Helps you set and achieve SEO"
              p2="goals with guided assistance."
            />
            <CustomCard
              src="/assets/Images/cone.png"
              alt="Visual"
              height={400}
              width={310}
              h3="Smart keyword generator"
              p1="Automatic suggestions and "
              p2="the best keywords to target"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
