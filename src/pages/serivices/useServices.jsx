import Branding1 from "@/assets/images/servicesSection/branding1.svg";
import Branding2 from "@/assets/images/servicesSection/branding2.svg";
import Branding3 from "@/assets/images/servicesSection/branding3.svg";
import Branding4 from "@/assets/images/servicesSection/branding4.svg";
import Branding5 from "@/assets/images/servicesSection/branding5.svg";
import Branding6 from "@/assets/images/servicesSection/branding6.svg";
import Branding7 from "@/assets/images/servicesSection/branding7.svg";
import Branding8 from "@/assets/images/servicesSection/branding8.svg";
import icon from "@/assets/images/servicesSection/rightArrow.svg";

function useServices() {
  const brandingContents = [
    {
      title: "Branding",
      description:
        "Beyond a logo, within a story. Your branding journey with us is an ongoing partnership helping you tell a story that resonates and drives conversions. From logo design to constant brand revisions, our branding team makes your brand stand out.",
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
        link: "/services/branding",
      },
      image: Branding1,
    },
    {
      title: "Web Development & UI/UX",
      description:
        "Craft a web experience for your users that is as unique as you. Our seasoned team helps you make a lasting impression with bespoke, engaging layouts and immersive interfaces. From concept creation to deployment, we’ve got your back",
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
        link: "/services/web-development",
      },
      image: Branding2,
    },
    {
      title: "Creative",
      description:
        "Looking for a way to increase your CTRs and ROI? Let our experts bring creative finesse to your brand! With captivating visuals and impactful campaigns, expand your brand reach, connect with your audience, and see results unlike before",
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
        link: "/services/creative",
      },
      image: Branding3,
    },
    {
      title: "Digital PR & Communication",
      description:
        "Getting big on social media is truly a daunting task. But at Haris & Co., we help you launch your brand online and collaborate with some of the big and trusted names in the influencer industry! Engage, captivate, and increase conversions with content and strategies tailored to you!",
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
        link: "/services/digital",
      },
      image: Branding4,
    },
    {
      title: "Performance Marketing",
      description:
        "Get personalized content and strategies for your target audience and ramp up conversions. Maximize ROI with our proven strategies, impactful ads, and campaigns, while fostering lasting customer relationships.",
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
        link: "/services/performance",
      },
      image: Branding5,
    },
    {
      title: "Production",
      description:
        "Increase brand awareness and engagement with scroll-stopping ideas and content, created just for your brand! With Haris&Co., captivate your audience with out-of-the-box content that resonates and sets the path for growth.",
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
        link: "/services/production",
      },
      image: Branding6,
    },
    {
      title: "SEO",
      description:
        "Our SEO solutions don’t just get you the numbers in rankings but in revenue! Our team handles everything from on-page SEO to CRO and content development to offer lasting and measurable results.",
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
        link: "/services/seo",
      },
      image: Branding7,
    },
    {
      title: "Social Media",
      description:
        "With Haris&Co., turn your social media platforms into a powerful marketing tool that connects you to your audience. With gripping creatives and ads, our award-winning team provides tailored strategies to your brand to propel your growth.",
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
        link: "/services/social-media",
      },
      image: Branding8,
    },
  ];

  return {
    brandingContents,
  };
}

export default useServices;
