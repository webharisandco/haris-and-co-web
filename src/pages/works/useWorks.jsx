import { useEffect, useState } from "react";
import reveal from '../../assets/images/ourWorks/reveal.png'
import project from '../../assets/images/ourWorks/project.png'
import neverStop from '../../assets/images/ourWorks/neverStop.png'
import nationGalery from '../../assets/images/ourWorks/nationGalery.png'
import globex from '../../assets/images/ourWorks/globex.png'
import downloadNow from '../../assets/images/ourWorks/downloadNow.png'
import { useLocation } from "react-router-dom";

function useWorks() {
  const [selectedId, setSelectedId] = useState(1);
  const { hash } = useLocation();
  const [filteredElement,setFilteredElement]=useState()
  const [content, setContent] = useState(
    "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below."
  );

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        console.log(element)
        setFilteredElement(element)
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Small delay ensures smooth scrolling after navigation
      }
    }
  }, [hash]);


const OurWorksData = [
    {

      linkIds:"branding",
      id: 1,
      image: reveal, // Replace with actual image URL
      heading: " Partnering with Kairali TMT",
      description: "Branding & Identity, Websites & Digital Platforms.",
    },
    {
      linkIds:"branding",
      id: 2,
      image: project,
      heading: " Partnering with Kairali TMT",
      description: "Branding & Identity, Websites & Digital Platforms",
    },
    {
      linkIds:"creative",
      id: 3,
      image: neverStop,
      heading: " Partnering with Kairali TMT",
      description: "Branding & Identity, Websites & Digital Platforms",
    },
    {
      linkIds:"digital",
      id: 4,
      image: nationGalery,
      heading: " Partnering with Kairali TMT",
      description: "Branding & Identity, Websites & Digital Platforms",
    },
    {
      linkIds:"performance",
      id: 5,
      image: globex,
      heading: " Partnering with Kairali TMT",
      description: "Branding & Identity, Websites & Digital Platforms",
    },
    {
      linkIds:"social-media",
      id: 6,
      image: downloadNow,
      heading: " Partnering with Kairali TMT",
      description: "Branding & Identity, Websites & Digital Platforms",
    },
  ];
  
  const menuItems = [
    {
      
      id: 1,
      label: "All Works",
      link: "/works/#all",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 2,
      label: "Branding",
      link: "/works/#branding",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 3,
      label: "Web Development & UI/UX",
      link: "/works/#web-development",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 4,
      label: "Creative & Communication",
      link: "/works/#creative",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 5,
      label: "Digital PR & Communication",
      link: "/works/#digital",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 6,
      label: "Performance Marketing",
      link: "/works/#performance",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 7,
      label: "Production",
      link: "/works/#production",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 8,
      label: "SEO",
      link: "/works/#seo",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
    {
      id: 9,
      label: "Social Media",
      link: "/works/#social-media",
      content:
        "We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.",
    },
  ];

  const handleClick = (id, content) => {
    setSelectedId(id);
    setContent(content);
  };

  return { menuItems, handleClick, selectedId,  OurWorksData ,filteredElement,content};
}
export default useWorks;
