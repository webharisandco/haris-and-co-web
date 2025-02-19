import React from "react";
import Banner from "./Banner";
import WorkPartners from "./WorkPartners";
import AllWorks from "./AllWorks";
import useClients from "./useClients";

function Works() {
  const { menuItems, handleClick, selectedId, content } = useClients();
  return (
    <div className="bg-black">
      <Banner />
      <AllWorks
        menuItems={menuItems}
        handleClick={handleClick}
        content={content}
        selectedId={selectedId}
      />
      <WorkPartners />
    </div>
  );
}

export default Works;
