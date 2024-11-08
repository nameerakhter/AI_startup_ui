import React from "react";
import BrandCard from "./elements/BrandCard";

const Partners = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 items-center p-4">
        <div className="opacity-55 text-center">
            <p className="text-sm md:text-base">Trusted by the worlds most innovative teams</p>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-4">
        <BrandCard  src='/assets/icons/acme-corp.png' alt='acme-corp'/>
        <BrandCard src="/assets/icons/echo-valley.png" alt="echo-valley"/>
        <BrandCard src="/assets/icons/quantum.png" alt="quantum"/>
        <BrandCard src="/assets/icons/pulse.png" alt="pulse"/>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-4">
        <BrandCard src='/assets/icons/outside.png' alt='outside' />
        <BrandCard src='/assets/icons/apex.png' alt='apex'/>
        <BrandCard src='/assets/icons/celestial.png' alt='celestial'/>
        <BrandCard src='/assets/icons/2twice.png' alt='2twice'/>
      </div>
    </div>
  );
};

export default Partners;
