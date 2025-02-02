import React from "react";
import Branding1 from "../../assets/images/branding/Branding1.svg";

function Banner() {
  return (
    <div className=" px-[16px] lg:px-[80px] pt-[200px] ">
      <div className=" flex flex-col gap-[35px]">
        <p className="text-white/50 text-[20px] font-[thin]">Branding </p>
        <p className="text-[55px] 2xl:text-[64px] text-white font-[helvetica-medium]">
          Partnering with Toalla De tela
        </p>
        <p className="text-white/50 text-[38px] font-[thin] ">
          Branding & Identity, Websites <br /> & Digital Platforms
        </p>
      </div>
      <div className="w-full flex justify-center mt-[100px]">
        <img className="w-fit h-fit" src={Branding1} alt="" />
      </div>
      <div className="flex justify-between w-full items-center ">
        <div className="w-8/12 my-[70px] pt-[80px] pr-[80px] border-r border-white">
          <p className="text-[26px] lg:text-[26px] 2xl:text-[32px] text-white font-[thin]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <div className="w-3/12">
          <ul className="text-white flex flex-col gap-[20px] text-[22px]">
            <li>Visual Identity Design</li>
            <li>Brand Messaging and Voice</li>
            <li>Brand Guidelines</li>
            <li>Packaging and Collateral Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
