import React from "react";

// function Banner() {
//   return (
//     <div className="bg-[#0E0E0E] flex justify-center items-center px-[16px] lg:px-[80px] min-h-[432px] lg:min-h-[700px]">
//       <div  className="w-full *:lg:w-9/12 2xl:w-10/12 3xl:w-9/12 mt-20">
//         <p className="text-white text-[24px] md:text-[32px] lg:text-[48px]  lg:text-5xl leading-[40px] lg:leading-[70px] font-[helvetica-medium]">
//           Tired of all the cookie-cutter strategies?
//           <span className="text-white/50 font-[thin]">
//             {" "}
//             Discover tailored solutions
//           </span>{" "}
//           that drive growth
//         </p>

//       </div>
//     </div>

    
//   );
// }



function Banner() {
  return (
    <div className="px-4 md:px-8 min-h-[320px] md:min-h-[400px] lg:min-h-[700px] flex flex-col items-start justify-center ">
      <p className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl text-white mt-16 md:mt-32 p-10 leading-tight break-words max-w-4xl">
        Tired of all the cookie-cutter strategies?
        <span className="text-white/65">
          {" "}
          Discover tailored solutions{" "}
        </span>
        <span className="text-white/65">
          remarkable
        </span>
        {" "}that drive growth
      </p>
      {/* Uncomment and update the below if needed */}
      {/* <div className="w-full flex justify-center">
        <img
          src={awardImage}
          alt="Awards Banner"
          className="w-4/5 max-w-[300px] md:max-w-[600px] h-auto object-cover"
        />
      </div> */}
    </div>
  );
}

export default Banner;
