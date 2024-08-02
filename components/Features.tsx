import React from "react";
import FeatureDescription from "./elements/FeatureDescription";

const Features = () => {
  return (
    <div className="relative bg-gradient-to-t from-purple-950 to-transparent p-4 min-h-screen top-2">
      <div className="absolute flex flex-col ">
        <h1 className="px-[5rem] text-[5rem] capitalize">
         Elevate your 
        </h1>
        <h1 className="px-[5rem] text-[5rem] capitalize">
        SEO efforts.
        </h1>
      </div>
      <div className="absolute w-full bg-red-700 h-[600px] bottom-[5rem] p-[4rem] flex flex-row items-center gap-4">
        <section className="w-1/3 bg-red-300 h-[600px]">
        <FeatureDescription/></section>
        <section className="w-1/3 bg-red-400 h-[600px]"></section>
        <section className="w-1/3 h-[600px]"></section>
      </div>
    </div>
  );
};

export default Features;
