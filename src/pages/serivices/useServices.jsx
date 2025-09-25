import Branding from "@/assets/images/servicesSection/branding5.svg";
import SEO from "@/assets/images/servicesSection/branding3.svg";
import Crtv from "@/assets/images/servicesSection/branding6.svg";
// import Branding4 from "@/assets/images/servicesSection/branding4.svg";
import Perfomance from "@/assets/images/servicesSection/branding2.svg";
import Production from "@/assets/images/servicesSection/branding4.svg";
import Seo from "@/assets/images/servicesSection/seo.png";
import SocialMedia from "@/assets/images/servicesSection/branding1.svg";
import Influencers from "@/assets/images/servicesSection/branding7.svg";
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
      id: "PERFORMANCE MARKETING",
      title: "PERFORMANCE MARKETING",
      description:
        "Our performance marketing team focuses on measurable growth. Every campaign is built with clear goals, whether it is boosting sales, generating leads, or nurturing stronger customer relationships. By combining insights with creative execution, we ensure your marketing budget delivers tangible outcomes.",      services: [
        "Ecommerce",
        "Lead Generation",
        "Creative Strategy",
        "CRM Setup",
        "Automation",
        "WhatsApp Marketing",
        "Email Marketing",
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
        "Our SEO team helps businesses stand out in search results and attract people who are already looking for what they offer. Instead of chasing empty traffic, we focus on connecting your brand with qualified visitors who are ready to engage. With specialists in every area of SEO, we develop strategies shaped around your industry and audience so your website doesn’t just rank higher but also delivers meaningful results.",
      services: [
        "On-Page SEO",
        "Off-Page SEO",
        "Technical SEO",
        "UI/UX Design",
        "Conversion Rate Optimisation",
        "Content Development",

      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "web-development",
      },
      image: SEO,
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
      id: "DIGITAL PR AND COMMUNICATION",
      title: "DIGITAL PR AND COMMUNICATION",
      description:
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.Our digital PR and communication team helps brands grow their presence through strong storytelling and influencer-driven strategies. We focus on building awareness, creating conversations, and ensuring your brand is seen by the right people in the right spaces. From launches to long-term partnerships, we manage every detail so campaigns run smoothly and deliver results.",
      services: [
        "Influencer Marketing",
        "Brand Launch",
        "Event Marketing",
        "Product Launch",
        "Creators Management",
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
        "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.Our web team turns ideas into functional, user-focused digital experiences. From websites to apps, we build platforms that perform smoothly, look professional, and guide visitors toward meaningful actions. Each project is approached with care so your online presence reflects your brand and meets your goals.",
      services: [
        "Website Development",
        "Ecommerce Development",
        "Website Auditing",
        "Website Optimization",
        "UI/UX Design",
        "App Development",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "branding",
      },
      image: Branding,
    },
    
    {
      id: "PRODUCTION",
      title: "PRODUCTION",
      description:
        "Our production house manages a wide range of creative projects, from large-scale advertising campaigns to specialised content for brands and businesses. With expertise across film, digital, broadcast, and live events, we provide end-to-end solutions that help brands tell their stories in ways that resonate.",
      services: [
        "Advertising & Marketing Projects",
        "Entertainment & Broadcast Projects",
        "Corporate & Industrial Projects",
        "Event & Experiential Projects",
        "Specialized Creative Projects",
        "Line Production Services",
        "Retainer & Long-Term Partnerships",
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
        "Our branding team helps businesses shape how they are seen and remembered. From identity design to large-scale campaigns, we create experiences that connect with people while staying true to the brand’s values. Each project is built to strengthen recognition, drive engagement, and leave a lasting impression.",
      services: [
        "Brand Identity",
        "Campaigns",
        "OOH",
        "Brand Activations",
        "Brand Strategy",
        "Digital Experiences",
        "Event Branding",
        "Package Design",
        "Ad Films",
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
