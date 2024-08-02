import React, { ReactNode } from "react";
import { IoSpeedometerSharp } from "react-icons/io5";

interface FeatureDescriptionProps {
    icon: ReactNode;
    h1: string;
    p1: string;
    p2: string;
  }

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({icon, h1, p1, p2}) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-1 py-[1rem] px-[2rem]">
        {icon}
        <h1>{h1}</h1>
      </div>
      <div className="px-[2rem]">
        <p className="opacity-55">{p1} </p>
        <p className="opacity-55">{p2} </p>
      </div>
    </div>
  );
};

export default FeatureDescription;
