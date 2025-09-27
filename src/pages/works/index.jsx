import React, { useState, useRef } from "react";
import AllWorks from "./AllWorks";
import WorkPartners from "./WorkPartners";
import useWorks from "./useWorks";

const menuItems = [
  { id: 1, label: "All Works", content: "Explore all our works below." },
  { id: 2, label: "Social Media", content: "Social Media campaigns showcase." },
  { id: 3, label: "Performance Marketing", content: "Performance Marketing campaigns showcase." },
  { id: 4, label: "Seo", content: "Seo projects showcase." },
  { id: 5, label: "Influencer Marketing ", content: "Digital PR campaigns showcase." },
  { id: 6, label: "Web Development & UI/UX", content: "Web & UI/UX projects showcase." },
  { id: 7, label: "Production", content: "Production campaigns showcase." },
  { id: 8, label: "Branding & Creative", content: "Branding & Creative projects showcase." },
];

export default function WorksPage() {
  const [selectedId, setSelectedId] = useState(1);
  const [content, setContent] = useState(menuItems[0].content);

  const worksData = useWorks(selectedId);

  // ref for WorkPartners section
  const workPartnersRef = useRef(null);

const handleClick = (id, content) => {
  setSelectedId(id);
  setContent(content);

  // scroll with offset (mt-20 ~ 80px)
  setTimeout(() => {
    if (workPartnersRef.current) {
      const topPos = workPartnersRef.current.getBoundingClientRect().top + window.pageYOffset - 150; 
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }, 100);
};


  return (
    <div>
      <AllWorks
        menuItems={menuItems}
        selectedId={selectedId}
        handleClick={handleClick}
        content={content}
      />
      <div ref={workPartnersRef}>
        <WorkPartners ourWorksData={worksData} />
      </div>
    </div>
  );
}
