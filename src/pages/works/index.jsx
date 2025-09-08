import React from "react";
import Banner from "./Banner";
import WorkPartners from "./WorkPartners";
import AllWorks from "./AllWorks";
import useWorks from "./useWorks";

function Works() {
  const { menuItems, handleClick, selectedId, content,OurWorksData,filteredElement } = useWorks();
  return (
    <div className="bg-black">
      <Banner />
      <AllWorks
        menuItems={menuItems}
        handleClick={handleClick}
        content={content}
        selectedId={selectedId}
      />
      <WorkPartners ourWorksData={OurWorksData} filteredElement={filteredElement} />
    </div>
  );
}

export default Works;
