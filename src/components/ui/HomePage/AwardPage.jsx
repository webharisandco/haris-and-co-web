import React from "react";
import awardImage from "../../../../src/assets/images/awards/awardimage1.png";

const AwardsBanner = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <img
        src={awardImage}
        alt="awardImage"
        style={{
          width: "100%",       // full width of container
          height: "auto",      // maintain aspect ratio
          maxHeight: "80vh",   // limit height to 80% viewport height
          objectFit: "contain",
        }}
      />
      <style>
        {`
          @media (max-width: 768px) {
            img {
              maxHeight: 60vh;
            }
          }
          @media (max-width: 480px) {
            img {
              maxHeight: 50vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AwardsBanner;
