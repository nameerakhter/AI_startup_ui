import React from "react";
import FeatureDescription from "./elements/FeatureDescription";
import { IoSpeedometerSharp } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { VscWand } from "react-icons/vsc";
import { FaChartLine } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { TbClick } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { BiSolidBellRing } from "react-icons/bi";
import { IoDocuments } from "react-icons/io5";

const Features = () => {
  return (
    <>
    <div className="bg-gradient-to-t from-purple-dark to-transparent p-4 md:p-[2rem] mt-[5rem] md:mt-[10rem]">
      <div className="flex flex-col space-y-1 md:-space-y-2 mb-[4rem] md:mb-[8rem] max-w-[1100px] mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl lg:text-7xl capitalize text-center md:text-left">Elevate your</h1>
        <h1 className="text-3xl md:text-5xl lg:text-7xl capitalize text-center md:text-left">SEO efforts.</h1>
      </div>
      <div className="flex justify-center px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 w-full max-w-[1100px]">
          <FeatureDescription
            icon={<IoSpeedometerSharp />}
            h1="User-friendly dashboard"
            p1="Perform complex SEO audits and"
            p2="optimization with a single click."
          />
          <FeatureDescription
            icon={<FaChartLine />}
            h1="Visual Reports" 
            p1="Visual insight into your site's"
            p2="performance."
          />
          <FeatureDescription
            icon={<BsStars />}
            h1="Smart Keyword Generator" 
            p1="Automatic suggestions and the best"
            p2="keywords to target."
          />
          <FeatureDescription
            icon={<LuListTodo />}
            h1="Content Evaluation"
            p1="Simple corrections for immediate"
            p2="improvements"
          />
          <FeatureDescription
            icon={<PiTargetBold />}
            h1="Link optimization wizard" 
            p1="Helps you set and achieve SEO goals with"
            p2="guided assistance."
          />
          <FeatureDescription
            icon={<BiSolidBellRing />}
            h1="Automated alerts" 
            p1="Automatic notifications about your SEO"
            p2="health, including quick fixes."
          />
          <FeatureDescription
            icon={<VscWand />}
            h1="Link optimization wizard" 
            p1="Guides you through the process"
            p2="of creating and managing links."
          />
          <FeatureDescription
            icon={<TbClick />}
            h1="One-click optimization" 
            p1="Perform complex SEO audits and"
            p2="optimizations with a single click."
          />
          <FeatureDescription
            icon={<IoDocuments />}
            h1="Competitor reports" 
            p1="Provides insights into competitors'"
            p2="keyword strategies and ranking."
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Features;
