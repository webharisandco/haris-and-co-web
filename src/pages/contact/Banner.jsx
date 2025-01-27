import React from "react";
import img from "../../assets/images/contact/contactBanner.png";

function Banner() {
  return (
    <div className=" px-[80px] pt-[150px] pb-[150px]">
      <div className="grid grid-cols-2">
        <div className=" flex flex-col gap-[35px]">
          <p className="text-[64px] text-white poppins-semibold">
            Let’s Connect
          </p>
          <p className="text-white/50 text-[40px]">
            We'd love to learn more about you and
            what we can design and build together.
          </p>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
