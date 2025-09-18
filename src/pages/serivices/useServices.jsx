import Branding from "@/assets/images/servicesSection/branding.png";
import Web from "@/assets/images/servicesSection/web.png";
import Crtv from "@/assets/images/servicesSection/crtv.png";
// import Branding4 from "@/assets/images/servicesSection/branding4.svg";
import Perfomance from "@/assets/images/servicesSection/perf.png";
import Production from "@/assets/images/servicesSection/prdtn.png";
import Seo from "@/assets/images/servicesSection/seo.png";
import SocialMedia from "@/assets/images/servicesSection/branding1.svg";
import Influencers from "@/assets/images/servicesSection/influencer.png";
import icon from "@/assets/images/servicesSection/rightArrow.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useServices() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });

          // window.scrollBy(0, -80);
        }, 100);
      }
    }
  }, [hash]);

  const brandingContents = [
     {
      id: "social-media",
      title: "Social Media ",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
      services: [
        "Brand Consulting",
        "Logo Design",
        "Graphic Design",
        "Brand Identity",
        "Brand Collateral",
        "Product Design",
        
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "social-media",
      },
      image: SocialMedia,
    },
    {
      id: "performance",
      title: "Performance Marketing",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",      services: [
        "Brand Consulting",
        "Logo Design",
        "Brand Identity",
        "Brand Collateral",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "performance",
      },
      image: Perfomance,
    },
    {
      id: "SEO",
      title: "SEO",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
      services: [
        "Brand Consulting",
        "Logo Design",
        "Graphic Design",
        "Brand Identity",
        "Brand Collateral",
        "Product Design",

      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "web-development",
      },
      image: Web,
    },
    // {
    //   id: "web-development",
    //   title: "Web Development & UI/UX",
    //   description:
    //     "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
    //   services: [
    //     "Brand Consulting",
    //     "Logo Design",
    //     "Graphic Design",
    //     "Brand Identity",
    //     "Brand Collateral",
    //     "Product Design",

    //   ],
    //   action: {
    //     label: "Explore",
    //     icon: icon,
    //     link: "web-development",
    //   },
    //   image: Web,
    // },
     {
      id: "Digital PR & Communication",
      title: "Digital PR & Communication",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
      services: [
        "Brand Consulting",
        "Logo Design",
        "Graphic Design",
        "Brand Identity",
        "Brand Collateral",
        "Product Design",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "production",
      },
      image: Production,
    },
    {
      id: "Web Development & UI/UX",
      title: "Web Development & UI/UX",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
      services: [
        "Brand Consulting",
        "Logo Design",
        "Graphic Design",
        "Brand Identity",
        "Brand Collateral",
        "Product Design",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "branding",
      },
      image: Branding,
    },
    
    {
      id: "Production",
      title: "Production",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
      services: [
        "Brand Consulting",
        "Logo Design",
        "Graphic Design",
        "Brand Identity",
        "Brand Collateral",
        "Product Design",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "creative",
      },
      image: Crtv,
    },
    // {
    //   id: "digital",
    //   title: "Digital PR & Communication",
    //   description:
    //     "Getting big on social media is truly a daunting task. But at Haris & Co., we help you launch your brand online and collaborate with some of the big and trusted names in the influencer industry! Engage, captivate, and increase conversions with content and strategies tailored to you!",
    //   services: [
    //     "Public Relations",
    //     "Influencer Marketing",
    //     "Crisis Management",
    //     "Social Media Engagement",
    //     "Press Releases",
    //     "Reputation Management",
    //   ],
    //   action: {
    //     label: "Explore",
    //     icon: icon,
    //     link: "digital",
    //   },
    //   image: Branding4,
    // },
    
   
    
   
    {
      id: "Branding & Creative",
      title: "Branding & Creative",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
      services: [
        "Brand Consulting",
        "Logo Design",
        "Graphic Design",
        "Brand Identity",
        "Brand Collateral",
        "Product Design",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "influencer-marketing",
      },
      image: Influencers,
    },
  ];

  return {
    brandingContents,
  };
}

export default useServices;
