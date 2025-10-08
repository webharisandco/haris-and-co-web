import React from "react";

// function Banner() {
//   return (
//     <div className=" px-[16px] md:px-[80px]  pt-[150px] pb-[150px] lg:pt-[180px] lg:pb-[180px] flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
//       <div className=" flex flex-col gap-[35px]">
//         <p className="text-[24px]  lg:text-5xl text-white leading-[1.1]">
//           We are dedicated to help brands scale through{" "}
//           <span className="text-white/65 ">
//             {" "}
//             creative and authentic marketing strategies, engaging designs,
//           </span>{" "}
//           and{" "}
//           <span className="text-white/65 ">
//             technology
//           </span>
//           .
//         </p>
//       </div>
//     </div>
//   );
// }

function Banner() {
  return (
    <div className="px-[24px] md:px-[32px] min-h-[400px]  lg:min-h-[700px] flex flex-col items-start  justify-center" >
      <p className="text-[15px] md:text-2xl lg:text-5xl text-white  lg:mt-32 lg:p-10  max-w-5xl">
       We are dedicated to help brands scale through
        <span className="text-white/65 ">
          {" "}
          creative and authentic marketing strategies,{" "}
        </span>{" "}
        <span className="text-white/65 ">
         engaging designs,
        </span>{" "}
         and technology.
      </p>

      {/* Awards image banner below text */}
      {/* <div className="w-full flex justify-center">
        <img
          src={awardImage}
          alt="Awards Banner"
          className="w-[70%] max-w-[900px] h-auto object-cover"
        />
      </div> */}
    </div>
  );
}


export default Banner;
