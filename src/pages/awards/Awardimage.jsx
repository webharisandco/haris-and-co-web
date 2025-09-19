import React from "react";
import awardImage from "../../../../src/assets/images/awards/awardimage1.png";

const AwardsBanner = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px 0", // large top/bottom padding like Figma
      }}
    >
      <img
        src={awardImage}
        alt="awards"
        style={{
          width: "70%",
          maxWidth: "900px",
          height: "auto",
          objectFit: "contain",
          background: "#000",
          display: "block",
          boxShadow: "0 0 0 0", // no shadow
        }}
      />
    </div>
  );
};

export default AwardsBanner;
