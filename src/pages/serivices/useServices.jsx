import Branding1 from "@/assets/images/servicesSection/branding1.svg";
import Branding2 from "@/assets/images/servicesSection/branding2.svg";
import Branding3 from "@/assets/images/servicesSection/branding3.svg";
// import Branding4 from "@/assets/images/servicesSection/branding4.svg";
import Branding5 from "@/assets/images/servicesSection/branding5.svg";
import Branding6 from "@/assets/images/servicesSection/branding6.svg";
import Branding7 from "@/assets/images/servicesSection/branding7.svg";
import Branding8 from "@/assets/images/servicesSection/branding8.svg";
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
      id: "branding",
      title: "Branding",
      description:
        "Beyond a logo, within a story. Your branding journey with us is an ongoing partnership helping you tell a story that resonates and drives conversions. From logo design to constant brand revisions, our branding team makes your brand stand out.",
      services: [
        "Brand Identity Design",
        "Basic Collaterals",
        "Marketing Collaterals",
        "Logo Design",
        "Product Design",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "branding",
      },
      image: Branding1,
    },
    {
      id: "web-development",
      title: "Web Development & UI/UX",
      description:
        "Craft a web experience for your users that is as unique as you. Our seasoned team helps you make a lasting impression with bespoke, engaging layouts and immersive interfaces. From concept creation to deployment, we’ve got your back.",
      services: [
        "Web Development",
        "eCommerce Solutions",
        "App Development",
        "UI/UX Designing",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "web-development",
      },
      image: Branding2,
    },
    {
      id: "creative",
      title: "Creative & Communication",
      description:
        "Looking for a way to increase your CTRs and ROI? Let our experts bring creative finesse to your brand! With captivating visuals and impactful campaigns, expand your brand reach, connect with your audience, and see results unlike before.",
      services: [
        "Strategization",
        "Creatives Development",
        "Campaign Initiation",
        "Conversion Rate Optimization",
        "WhatsApp Marketing",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "creative",
      },
      image: Branding3,
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
      id: "performance",
      title: "Performance Marketing",
      description:
        "Get personalized content and strategies for your target audience and ramp up conversions. Maximize ROI with our proven strategies, impactful ads, and campaigns, while fostering lasting customer relationships.",
      services: [
        "Strategization",
        "Creatives Development",
        "Campaign Initiation",
        "Conversion Rate Optimization",
        "WhatsApp Marketing",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "performance",
      },
      image: Branding5,
    },
    {
      id: "production",
      title: "Production",
      description:
        "Increase brand awareness and engagement with scroll-stopping ideas and content, created just for your brand! With Haris&Co., captivate your audience with out-of-the-box content that resonates and sets the path for growth.",
      services: [
        "Video Campaigns",
        "Theatre Ads",
        "Digital Ads",
        "Commercials",
        "UGC Content",
        "Product Photography",
        "Fashion Photos",
        "Corporate Videos",
        "Food Photography",
        "Personal Branding Videos",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "production",
      },
      image: Branding6,
    },
    {
      id: "seo",
      title: "SEO",
      description:
        "Our SEO solutions don’t just get you the numbers in rankings but in revenue! Our team handles everything from on-page SEO to CRO and content development to offer lasting and measurable results.",
      services: [
        "On-Page SEO",
        "Off-Page SEO",
        "Technical SEO",
        "UI/UX Design",
        "Conversion Rate Optimization",
        "Content Development",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "seo",
      },
      image: Branding7,
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description:
        "With Haris&Co., turn your social media platforms into a powerful marketing tool that connects you to your audience. With gripping creatives and ads, our award-winning team provides tailored strategies to your brand to propel your growth.",
      services: [
        "Social Media Strategy Development",
        "Content Creation",
        "Page & Community Management",
        "Analytics & Reporting",
        "AI-Powered Chat Automation",
        "Paid Campaigns",
        "Organic Campaigns",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "social-media",
      },
      image: Branding8,
    },
    {
      id: "influencer-marketing",
      title: "Influencer Marketing & Creator Solutions",
      description:
        "With Haris&Co., turn your social media platforms into a powerful marketing tool that connects you to your audience. With gripping creatives and ads, our award-winning team provides tailored strategies to your brand to propel your growth.",
      services: [
        "Influencer Marketing",
        "Offline Influencer Activation Campaigns",
        "Campaign Planning",
        "Podcast",
        "Casting",
      ],
      action: {
        label: "Explore",
        icon: icon,
        link: "influencer-marketing",
      },
      image: Branding8,
    },
  ];

  return {
    brandingContents,
  };
}

export default useServices;
