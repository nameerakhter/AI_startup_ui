import React from "react";
import BrandCard from "./elements/BrandCard";

const Partners = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
        <div className="gap-4 opacity-55">
            <p>Trusted by the worlds most innovative teams</p>
        </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <BrandCard  src='/assets/icons/acme-corp.png' alt='acme-corp'/>
        <BrandCard src="/assets/icons/echo-valley.png" alt="echo-valley"/>
        <BrandCard src="/assets/icons/quantum.png" alt="quantum"/>
        <BrandCard src="/assets/icons/pulse.png" alt="pulse"/>
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <BrandCard src='/assets/icons/outside.png' alt='outside' />
        <BrandCard src='/assets/icons/apex.png' alt='apex'/>
        <BrandCard src='/assets/icons/celestial.png' alt='celestial'/>
        <BrandCard src='/assets/icons/2twice.png' alt='2twice'/>
      </div>
    </div>
  );
};

export default Partners;
