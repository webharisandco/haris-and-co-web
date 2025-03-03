import React from "react";
import Banner from "./Banner";
import BrandImages from "./BrandImages";
import useTypes from "./useTypes";

function Branding() {
  const { services } = useTypes();
  return (
    <div className="bg-[#0E0E0E]">
      <Banner services={services} />
      <BrandImages/>
    </div>
  );
}

export default Branding;
