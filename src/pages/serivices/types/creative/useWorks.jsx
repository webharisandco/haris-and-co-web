import Image1 from "@/assets/images/workSection/blogs/img1.svg";
import Image2 from "@/assets/images/workSection/blogs/img2.svg";
import Image3 from "@/assets/images/workSection/blogs/img3.svg";
import { all } from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
function useWorks() {
  const [currentService, setCurrentService] = useState([]);

  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1]; // Get last part of URL

  console.log("Current Service:", service);

  const allServices = [
    {
      link: "branding",
      subHeading: "Branding is not just about a logo.",
      description:
        "Our bespoke branding solutions tell a story about your brand, creating a complete brand experience, making it unforgettable, encouraging loyalty, and driving conversions. For companies starting from scratch and brands looking to refresh, we cater to them all.",
      statistics: [
        "X+ Stories Crafted",
        "X+ Projects launched in India & the GCC",
        "X+ Awards",
      ],
      offerings: [
        {
          title: "Brand Identity Design",
          description:
            "If you’re a brand starting from scratch or a brand looking to refresh, our Brand Identity solutions help you stand out. We help weave a cohesive brand story across all your touchpoints.",
        },
        {
          title: "Basic Collaterals",
          description:
            "Make an impactful impression with basic brand collaterals embodying your brand essence. From physical collaterals like business cards and letterheads to packaging and signage, we provide custom solutions.",
        },
        {
          title: "Marketing Collaterals",
          description:
            "For your potential audience, leave an impactful impression with marketing collaterals designed just for your brand. From promotional souvenirs to tailored video content and ads, bring your brand to life.",
        },
        {
          title: "Logo Design",
          description:
            "Though branding extends beyond a logo, your unique logo is the instantaneous first impression you leave on your audience. Let us engineer a logo encapsulating every facet of your brand, laying the foundation for an impactful and lasting narrative.",
        },
        {
          title: "Product Design",
          description:
            "Just like your brand has a unique image, every one of your products needs a design that speaks for itself. We craft memorable product designs, handling everything from naming to package design.",
        },
      ],
    },
    {
      link: "web-development",
      subHeading: "Welcome your users to the digital home of your brand.",
      description:
        "Give your audience a unique brand experience from the first click with our custom scroll-worthy layouts and smooth user experience. Drive customer retention, loyalty, conversions, and revenue with us.",
      statistics: [
        "X+ Happy Brands",
        "X+ Websites Built",
        "X+ Generated in Revenue",
      ],
      offerings: [
        {
          title: "Web Development",
          description:
            "One of your brand’s crucial touchpoints is a website. With a custom design aligned with your industry, audience, goals, and objectives, we set the stage for growth. Our designs are based on strategies that optimize user interactions & SERPs, increase traffic, and more.",
        },
        {
          title: "eCommerce Solutions",
          description:
            "Set up stunning digital storefronts for your business with Haris&Co. From eCommerce migration to tailored websites, scale your online presence with strategies designed to scale. Our solutions create dynamic, secure, reliable platforms with seamless user experience.",
        },
        {
          title: "App Development",
          description:
            "Increase user engagement and conversions with mobile applications modeled for your brand. We provide result-oriented solutions with enhanced user experience and suitable features aligned with your industry.",
        },
        {
          title: "UI/UX Designing",
          description:
            "The experience you provide your users matters. Bespoke user-centered UI/UX can help you reverse low conversion rates, high drop-offs, and design-related confusion. Give a butter-smooth user experience that drives conversions.",
        },
      ],
    },
    {
      link: "creative",
      subHeading: "You know a lot about your brand. But your customers don’t.",
      description: `Attention comes first. 
      Every brand has its own creative way of getting attention. 
      A way that increases the chance of getting your brand noticed 
      instead of getting ignored. A way that makes it hard for your 
      competitors (big or small) to win against you. And we know a lot of those ways.
      
      Want to see some of those ways? 
      Great. Pay attention. Or don’t. Either way, it will get your attention.`,
      statistics: [
        "X+ Brands Worked With",
        "X+ Revenue Generated",
        "X+ Platforms Catered To",
      ],
      offerings: [
        {
          title: "Strategization",
          description:
            "Customized marketing strategies that align with industry trends.",
        },
        {
          title: "Creatives Development",
          description:
            "Engaging content to drive conversions and audience interaction.",
        },
        {
          title: "Campaign Initiation",
          description:
            "Unique campaigns based on brand goals, audience, and platforms.",
        },
        {
          title: "Conversion Rate Optimization",
          description:
            "Turn traffic into revenue with targeted CRO strategies.",
        },
        {
          title: "WhatsApp Marketing",
          description:
            "Leverage WhatsApp for direct and efficient marketing engagement.",
        },
      ],
    },
    {
      link: "performance",
      subHeading: "Drive engagement & results with us.",
      description:
        "We are growth geeks focused on results. We provide customized strategies, ad placements, and audience targeting to help you get the numbers that matter.",
      statistics: [
        "X+ Brands Worked With",
        "X+ Revenue Generated",
        "X+ Platforms Catered To",
      ],
      offerings: [
        {
          title: "Strategization",
          description:
            "While other agencies give you strategies that work, we give you customized strategies that are in trend with your industry.  We don’t just bring in potential audiences but focus on strategies that retain your existing user base.",
        },
        {
          title: "Creatives Development",
          description:
            "Keep your audience engaged with authentic and captivating content that drives conversions and sales. We constantly adjust our strategies based on evolving trends among your audience.",
        },
        {
          title: "Campaign Initiation",
          description:
            "We craft campaigns unique to your brand based on your goals, target audience, and platforms. Our creative campaigns bring out your brand message that resonates with your audience.",
        },
        {
          title: "Conversion Rate Optimization",
          description:
            "Turn your traffic into revenue with strategies that drive conversions. CRO strategies look different for each brand and we craft strategies tailored to your goals.",
        },
        {
          title: "WhatsApp Marketing",
          description:
            "Make the world’s top messaging app your best ally in marketing. With our personalized strategies, you can forge better and more efficient ties with your audience.",
        },
      ],
    },
    {
      link: "seo",
      subHeading: "Don’t just rank higher. Drive growth!",
      description:
        "We are a result-oriented agency, unlike the others. Our SEO solutions are designed to target your prospective audience, increase visibility by ranking you higher, and get you the best results for the money you invest.",
      statistics: [
        "10,000+ Top 10 Keywords on Google",
        "50,000+ Leads Generated",
        "8M+ Total Website Clicks",
      ],
      offerings: [
        {
          title: "On-Page SEO",
          description:
            "Our SEO team makes sure that you are visible online to your users. With extensive keyword research, we help you integrate keywords into your title tags, meta tags, and more that help your users find you easily.",
        },
        {
          title: "Off-Page SEO",
          description:
            "Increase your site reputation, ranking, and credibility with our Off-Page SEO efforts. We post blogs on PR sites, list on directories, stay active on social media, and more to boost visibility.",
        },
        {
          title: "Technical SEO",
          description:
            "The infrastructure of your website impacts ranking and that’s why you’ve got us. Our technical SEO solutions help you attract organic traffic and convert it via auditing and adjusting the technical aspects for enhanced performance.",
        },
        {
          title: "UI/UX Design",
          description:
            "A smooth and easy user experience makes or breaks your website. We craft a web design tailored to your brand to make it immersive and easy to navigate for your potential audience.",
        },
        {
          title: "Conversion Rate Optimization",
          description:
            "Our seasoned team constantly reviews the UI/UX for improvements and adjusts the elements that help convert your potential audience. All our CRO strategies are crafted according to your industry, goals, and audience.",
        },
        {
          title: "Content Development",
          description:
            "Keep your audience entertained with creative and relatable content that engages and ultimately converts. We help you stay in trend and scale revenue.",
        },
      ],
    },
    {
      link: "social-media",
      subHeading: "Get influencer-approved!",
      description:
        "Partner with leading industry influencers to keep up with trends. Connect with new audiences and engage with your existing followers with creative content on the world’s most popular social media platforms.",
      statistics: ["X+ Creators", "X+ Total Views", "X+ Engagements"],
      offerings: [
        {
          title: "Influencer Marketing",
          description:
            "Thousands of influencers are on the scene but which one is right for you? We at Haris&Co., help you collaborate with personalities that are the best fit for your brand. After a detailed analysis of your brand, goals, and target audience we reach out to influencers best suited for you.",
        },
        {
          title: "Offline Influencer Activation Campaigns",
          description:
            "Our marketing efforts are not just on your screens. With the help of well-known influencers we build hype and increase attendance for events, launches and more.",
        },
        {
          title: "Campaign Planning",
          description:
            "Launch ad campaigns on your platforms with internet personalities. Every campaign that we conduct for your brand is an effort made after detailed research on audience, industry, and current trends.",
        },
        {
          title: "Podcast",
          description:
            "One of the most viral modes of entertainment is podcasts. We help your brand get heard and seen on the most listened to podcasts in your industry.",
        },
        {
          title: "Casting",
          description:
            "Want a familiar face in your ads? We’ve got you covered. We help you connect with the top internet celebrities in your video content.",
        },
      ],
    },
  ];
  const services = [
    {
      titile: "UGC",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Brand Naming",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Branding Strategy",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Social Media Communication",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Paid ads Creative StrategyC",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Creative Consulting",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Hoardings/OOH",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Ad Films",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
    {
      titile: "Ad Campaign 360",
      description:
        "At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers.",
    },
  ];

  const blogs = [
    {
      img: Image1,
      titile: "Web Development & UI/UX",
      link: "Styling an online presence for Disha Creationz!",
      date: "November 07, 2024   .   6  min read ",
    },
    {
      img: Image2,
      titile: "Web Development & UI/UX",
      link: "Styling an online presence for Disha Creationz!",
      date: "November 07, 2024   .   6  min read ",
    },
    {
      img: Image3,
      titile: "Web Development & UI/UX",
      link: "Styling an online presence for Disha Creationz!",
      date: "November 07, 2024   .   6  min read ",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
    const selectedService = allServices.find((s) => s.link === service);
    if (selectedService) {
      setCurrentService(selectedService);
    }
  }, [service]);

  if (!currentService) {
    return <p>Service not found!</p>;
  }
  return { services, blogs, currentService };
}

export default useWorks;
