import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    { name: "Performance Marketing", howerPathName: "performance", path: "/services/performance" },
    { name: "SEO", howerPathName: "seo", path: "/services/seo" },
    { name: "Web Development & UI/UX", howerPathName: "web", path: "/services/web-development" },
    { name: "Production", howerPathName: "production", path: "/services/production" },
    { name: "Digital PR & Communication", howerPathName: "digital", path: "/services/digital" },
    { name: "Branding", howerPathName: "branding", path: "/services/branding" },
    { name: "Creative & Communication", howerPathName: "creative", path: "/services/creative" },
  ];

  return (
    <div
      className={`min-h-[600px] w-full py-[40px] lg:py-[80px] px-[16px] md:px-[30px] lg:px-[60px] flex justify-between items-center relative overflow-hidden bg-white ${
        isHovered ? "featureGradient" : ""
      }`}
    >
      {/* Services list */}
      <div className="flex flex-col gap-[15px] md:gap-[25px] h-full select-none">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-[12px] cursor-pointer items-center"
            onMouseEnter={() => setIsHovered(service.howerPathName)}
            onMouseLeave={() => setIsHovered("")}
          >
            <Link to={service.path}>
              <p
                className={`text-nowrap text-[18px] md:text-[24px] lg:text-[28px] text-black font-[helvetica-medium] ${
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

      {/* Hover images */}
      <div className="flex items-center h-full">
        <div className="absolute top-0 left-0 -z-10 w-full h-full transition-all duration-300 ease-in-out">
          <img
            src={BrandImg}
            alt="Branding"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "branding" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={WebImg}
            alt="Web"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "web" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={CreativeImg}
            alt="Creative"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "creative" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={DigitalImg}
            alt="Digital"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "digital" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={PerformanceImg}
            alt="Performance"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "performance" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={ProductionImg}
            alt="Production"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "production" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={SeoImg}
            alt="SEO"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "seo" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={SocialImg}
            alt="Social"
            className={`w-full h-full object-cover absolute top-0 left-0 featureGradient transition-opacity duration-500 ${
              isHovered === "social" ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Default animation */}
        {!isHovered && <TextReveal3D />}
      </div>
    </div>
  );
}
