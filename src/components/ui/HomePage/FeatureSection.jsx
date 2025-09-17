import React, { useState } from "react";
import { Link } from 'react-router-dom';
import BrandImg from "@/assets/images/features/branding.png";
import CreativeImg from "@/assets/images/features/creative.png";
import DigitalImg from "@/assets/images/features/digital.jpeg";
import PerformanceImg from "@/assets/images/features/performance.png";
import ProductionImg from "@/assets/images/features/production.png";
import SeoImg from "@/assets/images/features/seo.png";
import SocialImg from "@/assets/images/features/social.png";
import WebImg from "@/assets/images/features/web.png";
import { RightArrow } from "@/assets/images/icons/RightArrow";
import TextReveal3D from "./TextReveal";

export default function FeatureSection() {
  const [isHovered, setIsHovered] = useState("");

  const services = [
    { name: "Social Media", howerPathName: "social", path: "/services/social-media" },
    { name: "SEO", howerPathName: "seo", path: "/services/seo" },
    { name: "Performance Marketing", howerPathName: "performance", path: "/services/performance" },
    { name: "Web Development & UI/UX", howerPathName: "web", path: "/services/web-development" },
    { name: "Production", howerPathName: "production", path: "/services/production" },
     { name: "Digital PR & Communication", howerPathName: "digital", path: "/services/digital" },
    { name: "Branding", howerPathName: "branding", path: "/services/branding" },
    { name: "Creative & Communication", howerPathName: "creative", path: "/services/creative" },
   
  
    
  
  ];
  














  return (
    <div
      className={` h-full w-full py-[40px] lg:py-[80px] px-[16px] md:px-[40px] lg:p-[80px]  flex justify-between items-center relative overflow-hidden ${
        isHovered ? "featureGradient" : ""
      }`}
    >
      <div className="flex flex-col gap-[25px]  md:gap-[50px] h-full select-none">
        {services.map((service, index) => (  
          <div
          className={`flex gap-[20px] cursor-pointer items-center ${
          
            isHovered === "branding" && "translate-x-10"
          }`}
          onMouseEnter={() => setIsHovered(service.howerPathName)}
          onMouseLeave={() => setIsHovered("")}
        >
          <Link to={service.path}>
          <p
            className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-[helvetica-medium] ${
            
              isHovered === service.howerPathName
                ? "text-white"
                : isHovered && " text-white/55"
            }`}
          >
         {service.name}
          </p>
          </Link>

          <RightArrow
            className="mt-0 hidden md:flex"
            color={
              isHovered === service.howerPathName
                ? "white"
                : isHovered
                ? "#ffffff55"
                : "black"
            }
          />
        </div>
         ))}



      </div>
      <div className="flex items-center h-full">
  <div className="absolute top-0 left-0 -z-10 w-full h-full transition-all duration-300 ease-in-out">
    <img
      src={BrandImg}
      alt="Branding"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "branding" ? "opacity-100" : "opacity-0"
      }`}
    />
    <img
      src={WebImg}
      alt="Web"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "web" ? "opacity-100" : "opacity-0"
      }`}
    />
    <img
      src={CreativeImg}
      alt="Creative"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "creative" ? "opacity-100" : "opacity-0"
      }`}
    />
    <img
      src={DigitalImg}
      alt="Digital"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "digital" ? "opacity-100" : "opacity-0"
      }`}
    />
    <img
      src={PerformanceImg}
      alt="Performance"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "performance" ? "opacity-100" : "opacity-0"
      }`}
    />
    <img
      src={ProductionImg}
      alt="Production"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "production" ? "opacity-100" : "opacity-0"
      }`}
    />
    <img
      src={SeoImg}
      alt="SEO"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "seo" ? "opacity-100" : "opacity-0"
      }`}
    />
    <img
      src={SocialImg}
      alt="Social"
      className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ease-in-out ${
        isHovered === "social" ? "opacity-100" : "opacity-0"
      }`}
    />
  </div>

  {/* Fallback animation */}
  {!isHovered && <TextReveal3D />}
</div>
    </div>
  );
}