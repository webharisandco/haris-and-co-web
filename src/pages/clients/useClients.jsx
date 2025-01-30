import { useState } from "react";


function useClients() {
    const [selectedId, setSelectedId] = useState(null);
    const [content, setContent] = useState(
      "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below."
    );
    const menuItems = [
      {
        id: 1,
        label: "All Works",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 2,
        label: "Branding",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 3,
        label: "Web Development & UI/UX",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 4,
        label: "Creative",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 5,
        label: "Digital PR & Communication",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 6,
        label: "Performance Marketing",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 7,
        label: "Production",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 8,
        label: "SEO",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
      {
        id: 9,
        label: "Social Media",
        content:
          "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
      },
    ];
    const handleClick = (id, content) => {
      setSelectedId(id);
      setContent(content);
    };

  return {menuItems,handleClick,selectedId,content}
}
export default useClients;