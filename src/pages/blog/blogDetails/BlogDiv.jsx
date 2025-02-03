import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/img2.png";
import img3 from "@/assets/images/blogDetails/img3.png";

export default function BlogDiv() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        <p className="font-[thin]">
          In today’s digital-first world, creative agencies are no longer just
          about stunning visuals or catchy taglines—they’re about delivering
          user experiences that engage, inspire, and convert. At the heart of
          this transformation lies the UI/UX department, the powerhouse of
          strategy, creativity, and technical expertise. Let’s explore how this
          critical department drives success in a creative agency. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        
        {/* Expandable Content with Smooth Transition */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[1900px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <p className="font-[thin]">
            In today’s digital-first world, creative agencies are no longer just
            about stunning visuals or catchy taglines—they’re about delivering
            user experiences that engage, inspire, and convert. At the heart of
            this transformation lies the UI/UX department, the powerhouse of
            strategy, creativity, and technical expertise. Let’s explore how
            this critical department drives success in a creative agency. Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="font-[thin]">
          In today’s digital-first world, creative agencies are no longer just about stunning visuals or catchy taglines—they’re about delivering user experiences that engage, inspire, and convert. At the heart of this transformation lies the UI/UX department, the powerhouse of strategy, creativity, and technical expertise. Let’s explore how this critical department drives success in a creative agency. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. In today’s digital-first world, creative agencies are no longer just about stunning visuals or catchy taglines—they’re about delivering user experiences that engage, inspire, and convert. At the heart of this transformation lies the UI/UX department, the powerhouse of strategy, creativity, and technical expertise. Let’s explore how this critical department drives success in a creative agency. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h6 className="text-[22px] mt-5">
            Key Responsibilities of the UI/UX Department
          </h6>
          <p className="font-[thin]">
            In today’s digital-first world, creative agencies are no longer just
            about stunning visuals or catchy taglines—they’re about delivering
            user experiences that engage, inspire, and convert. At the heart of
            this transformation lies the UI/UX department, the powerhouse of
            strategy, creativity, and technical expertise. Let’s explore how
            this critical department drives success in a creative agency. Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Read More / Read Less Button (Only visible on small screens) */}
        <p
          className="flex lg:hidden z-20 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? "Read Less" : "Read More"}
        </p>
      </div>

      {/* Images Section (Hidden on small screens) */}
      <div className="w-1/3 lg:flex flex-col gap-5 hidden">
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}
