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
    <div className="relative bg-gradient-to-t from-purple-dark to-transparent p-[2rem] min-h-screen top-2">
      <div className="absolute flex flex-col ">
        <h1 className="px-[5rem] text-[5rem] capitalize">Elevate your</h1>
        <h1 className="px-[5rem] text-[5rem] capitalize">SEO efforts.</h1>
      </div>
      <div className="absolute w-[1600px] bottom-[5rem] flex flex-row items-center justify-evenly">
        <section className="w-1/3 h-[600px] flex flex-col justify-evenly px-[4rem]">
          <FeatureDescription
            icon={<IoSpeedometerSharp />}
            h1="User-friendly dashboard"
            p1="Perform complex SEO audits and"
            p2="optimization with a single click."
          />
          <FeatureDescription
            icon={<LuListTodo />}
            h1="Content Evalutaion"
            p1="Simple corrections for immediate"
            p2="improvements"
          />
          <FeatureDescription
            icon={<VscWand />}
            h1="Link optimization wizard" 
            p1="Guides you through the process"
            p2="of creating and managing links."
          />
        </section>
        <section className="w-1/3 h-[600px] flex flex-col justify-evenly px-[4rem]">
        <FeatureDescription
            icon={<FaChartLine />}
            h1="Visual Reports" 
            p1="Visual insight into your site's"
            p2="performance."
          />
        <FeatureDescription
            icon={<PiTargetBold />}
            h1="Link optimization wizard" 
            p1="Helps you set and achieve SEO goals with "
            p2="guided assistance."
          />
        <FeatureDescription
            icon={<TbClick />}
            h1="One-click optimization" 
            p1="Perform complex SEO audits and "
            p2="optimizations with a single click."
          />
        </section>
        <section className="w-1/3 h-[600px] flex flex-col justify-evenly px-[4rem]">
        <FeatureDescription
            icon={<BsStars />}
            h1="Smart Keyword Generator" 
            p1="Automatic suggestions and the best"
            p2=" keywords to target."
          />
        <FeatureDescription
            icon={<BiSolidBellRing />}
            h1="Automated alerts" 
            p1="Automatic notifications about your SEO"
            p2=" health, including quick fixes."
          />
        <FeatureDescription
            icon={<IoDocuments />}
            h1="Competitor reports" 
            p1="Provides insights into competitors’ "
            p2="keyword strategies and ranking."
          />
          </section>
      </div>
    </div>
  );
};

export default Features;
