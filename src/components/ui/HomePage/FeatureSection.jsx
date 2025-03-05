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
    { name: "Branding", howerPathName: "branding", path: "/services/branding" },
    { name: "Web Development & UI/UX", howerPathName: "web", path: "/services/web-development" },
    { name: "Creative & Communication", howerPathName: "creative", path: "/services/creative" },
    { name: "Digital PR & Communication", howerPathName: "digital", path: "/services/digital" },
    { name: "Performance Marketing", howerPathName: "performance", path: "/services/performance" },
    { name: "Production", howerPathName: "production", path: "/services/production" },
    { name: "SEO", howerPathName: "seo", path: "/services/seo" },
    { name: "Social Media", howerPathName: "social", path: "/services/social-media" },
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
            className="mt-0"
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
        {isHovered === "branding" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={BrandImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : isHovered === "web" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={WebImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : isHovered === "creative" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={CreativeImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : isHovered === "digital" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={DigitalImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : isHovered === "performance" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={PerformanceImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : isHovered === "production" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={ProductionImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : isHovered === "seo" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={SeoImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : isHovered === "social" ? (
          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
            <img
              src={SocialImg}
              alt="Branding"
              className="w-full h-full featureGradient object-cover"
            />
          </div>
        ) : (
          <TextReveal3D />
        )}
      </div>
    </div>
  );
}
