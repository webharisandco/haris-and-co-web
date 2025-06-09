import React from "react";
import img1 from "../../assets/images/marketing/1.jpg";
import img2 from "../../assets/images/marketing/2.jpg";
import img3 from "../../assets/images/marketing/3.jpg";
import img4 from "../../assets/images/marketing/4.jpg";

function Banner() {
  return (
    <div className="bg-[#0E0E0E] px-[16px] lg:px-[80px] pt-[200px] ">
      <div className=" flex flex-col gap-[35px]">
        <p className="text-[32px] lg:text-[55px] 2xl:text-[64px] text-white font-[helvetica-medium]">
          Clients
        </p>
        <p className="text-white text-[24px] lg:text-[38px] font-[thin] ">
          Meet the names that trusted us to deliver creativity, <br />{" "}
          innovation, and diligence to their success stories.
        </p>
      </div>
      <div className="w-full mt-[20px] flex flex-col lg:flex-row justify-between  items-end gap-[20px] md:gap-[52px] mb-[74px] lg:mb-[114px]">
        <img
          className=" w-full lg:w-[300px] h-fit object-cover lg:object-contain"
          src={img1}
          alt=""
        />
        <img
          className="w-full lg:w-1/6 h-fit object-cover lg:object-contain"
          src={img2}
          alt=""
        />
        <img
          className="w-full lg:w-2/6 h-fit object-cover lg:object-contain"
          src={img3}
          alt=""
        />
        <img
          className="w-full lg:w-1/6 h-fit object-cover lg:object-contain"
          src={img4}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
