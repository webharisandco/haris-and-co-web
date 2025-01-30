import React from "react";
import Banner from "./Banner";
import Works from "./Works";
import AllWorks from "./AllWorks";
import useClients from "./useClients";

function Clients() {
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
      <Works />={" "}
    </div>
  );
}

export default Clients;
