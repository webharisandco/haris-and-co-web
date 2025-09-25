import { useEffect, useState } from "react";
// import tcs from '../../assets/images/ourWorks/tcs.jpeg'
import artboard from '/Users/abdulshammas/Desktop/HACA_WEB/haris-and-co-web/src/assets/images/workSection/Artboard 1.jpg'
import antiUVA from '../../assets/images/ourWorks/antiUVA.png'
import landMark from '../../assets/images/ourWorks/landMark.png'
import KairaliTMT from '../../assets/images/ourWorks/KairaliTMT.jpeg'
import allde from '../../assets/images/ourWorks/allde.jpg'
import wonderlla from '../../assets/images/ourWorks/wonderlla.png'
import littleHeros from '../../assets/images/ourWorks/littleHeros.jpeg'
import revive from '../../assets/images/ourWorks/revive.jpeg'

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
    linkIds: "branding",
    id: 1,
    image: artboard,
    heading: "Partnering with Bluetyga",
    description: "From zero to ₹6 million a month in record time",
  },
    {
      linkIds:"branding",
      id: 2,
      image: antiUVA,
      heading: "Collaborating with Med7 Online.",
      description: "See how our creative team partnered with Med7 Online, an online pharmacy delivery in the UAE, to increase their brand visibility.",
    },
    {
      linkIds:"creative",
      id: 3,
      image: landMark,
      heading: "Collaborating with Care n Cure",
      description: "We partnered with one of the UAE’s trusted healthcare brands to build a stronger digital presence. We helped boost visibility, engagement, and growth across platforms.",
    },
    {
      linkIds:"digital",
      id: 4,
      image: KairaliTMT,
      heading: "Launching Kairali TMT Online",
      description: "Branding & Identity, Websites & Digital Platforms.",
    },
    {
      linkIds:"performance",
      id: 5,
      image: allde,
      heading: " Collaborating with Allde",
      description: "We partnered with one of the UAE’s growing brands to strengthen their digital presence. We helped drive reach, engagement, and organic growth across platforms.",
    },
    {
      linkIds:"social-media",
      id: 6,
      image: wonderlla,
      heading: " Collaborating with Wonderla.",
      description: "The Wonderla OOH campaign is driving conversations and visibility in four states",
    },
    {
      linkIds:"social-media",
      id: 7,
      image: littleHeros,
      heading: " Skyrocketing sales with Walkaroo.",
      description: "We helped Walkaroo, one of India’s popular footwear brands, scale their revenue to ₹10M+ in just 6 months!",
    },{
      linkIds:"social-media",
      id: 8,
      image: revive,
      heading: " Scaling revenue to ₹ 2M+.",
      description: "We teamed with Skin Bae, a leading skincare brand offering Korean skincare, to scale their revenue and increase ROAS by 4 times.",
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
