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
    { name: "Branding", howerPathName: "branding", path: "/services/branding" },
    { name: "Web Development & UI/UX", howerPathName: "web", path: "/services/web-development" },
    { name: "Creative & Communication", howerPathName: "creative", path: "/services/creative" },
    { name: "Digital PR & Communication", howerPathName: "digital", path: "/services/digital" },
    { name: "Performance Marketing", howerPathName: "performance", path: "/services/performance" },
    { name: "Production", howerPathName: "production", path: "/services/production" },
    { name: "SEO", howerPathName: "seo", path: "/services/seo" },
    { name: "Social Media", howerPathName: "social", path: "/services/social-media" },
  ];

  const images = [
    { src: BrandImg, key: "branding" },
    { src: WebImg, key: "web" },
    { src: CreativeImg, key: "creative" },
    { src: DigitalImg, key: "digital" },
    { src: PerformanceImg, key: "performance" },
    { src: ProductionImg, key: "production" },
    { src: SeoImg, key: "seo" },
    { src: SocialImg, key: "social" },
  ];

  return (
    <div
      className={`w-full py-10 lg:py-20 px-4 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center relative overflow-hidden ${
        isHovered ? "featureGradient" : ""
      }`}
    >
      {/* Left: Services */}
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full lg:w-1/3 select-none">
        {services.map((service) => (
          <div
            key={service.howerPathName}
            className={`flex gap-4 cursor-pointer items-center transition-transform duration-300 ease-in-out ${
              isHovered === service.howerPathName ? "translate-x-4 lg:translate-x-10" : ""
            }`}
            onMouseEnter={() => setIsHovered(service.howerPathName)}
            onMouseLeave={() => setIsHovered("")}
          >
            <Link to={service.path}>
              <p
                className={`whitespace-nowrap text-[17px]  lg:text-[30px] font-[helvetica-medium] text-black transition-colors duration-300 ${
                  isHovered === service.howerPathName
                    ? "text-white"
                    : isHovered
                    ? "text-white/55"
                    : ""
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

      {/* Right: Images */}
      <div className="w-full lg:w-2/3 mt-6 lg:mt-0 relative flex items-center justify-center">
        <div className="absolute top-0 left-0 -z-10 w-full h-[250px] sm:h-[400px] lg:h-[600px] transition-all duration-300 ease-in-out">
          {images.map((imgObj) => (
            <img
              key={imgObj.key}
              src={imgObj.src}
              alt={imgObj.key}
              className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                isHovered === imgObj.key ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* 3D Text Reveal */}
        {!isHovered && <TextReveal3D />}
      </div>
    </div>
  );
}
