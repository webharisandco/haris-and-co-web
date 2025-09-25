import Image1 from "@/assets/images/workSection/blogs/img1.svg";
import Image2 from "@/assets/images/workSection/blogs/img2.svg";
import Image3 from "@/assets/images/workSection/blogs/img3.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function useWorks() {
  const [currentService, setCurrentService] = useState([]);

  const location = useLocation();
  const pathSegments = location.pathname?.split("/");
  const service = pathSegments[pathSegments?.length - 1]; // Get last part of URL

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
          title: "Brand Identity",
          description:
            "We design the visual and verbal elements that define a brand, including logos, colours, typography, and tone of voice, ensuring consistency across every platform.",
          link: "/contact",
        },
        {
          title: "Basic Collaterals",
          description:
            "Make an impactful impression with basic brand collaterals embodying your brand essence. From physical collaterals like business cards and letterheads to packaging and signage, we provide custom solutions.",
          link: "/contact",
        },
        {
          title: "Marketing Collaterals",
          description:
            "For your potential audience, leave an impactful impression with marketing collaterals designed just for your brand. From promotional souvenirs to tailored video content and ads, bring your brand to life.",
          link: "/contact",
        },
        {
          title: "Logo Design",
          description:
            "Though branding extends beyond a logo, your unique logo is the instantaneous first impression you leave on your audience. Let us engineer a logo encapsulating every facet of your brand, laying the foundation for an impactful and lasting narrative.",
          link: "/contact",
        },
        {
          title: "Product Design",
          description:
            "Just like your brand has a unique image, every one of your products needs a design that speaks for itself. We craft memorable product designs, handling everything from naming to package design.",
          link: "/contact",
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
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "eCommerce Solutions",
          description:
            "Set up stunning digital storefronts for your business with Haris&Co. From eCommerce migration to tailored websites, scale your online presence with strategies designed to scale. Our solutions create dynamic, secure, reliable platforms with seamless user experience.",
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "App Development",
          description:
            "Increase user engagement and conversions with mobile applications modeled for your brand. We provide result-oriented solutions with enhanced user experience and suitable features aligned with your industry.",
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "UI/UX Designing",
          description:
            "The experience you provide your users matters. Bespoke user-centered UI/UX can help you reverse low conversion rates, high drop-offs, and design-related confusion. Give a butter-smooth user experience that drives conversions.",
          link: "/ae/services/web-development-company-in-dubai",
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
          link: "/contact",
        },
        {
          title: "Creatives Development",
          description:
            "Engaging content to drive conversions and audience interaction.",
          link: "/contact",
        },
        {
          title: "Campaign Initiation",
          description:
            "Unique campaigns based on brand goals, audience, and platforms.",
          link: "/contact",
        },
        {
          title: "Conversion Rate Optimization",
          description:
            "Turn traffic into revenue with targeted CRO strategies.",
          link: "/contact",
        },
        {
          title: "WhatsApp Marketing",
          description:
            "Leverage WhatsApp for direct and efficient marketing engagement.",
          link: "/contact",
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
          title: "Ecommerce",
          description:
            "We design marketing strategies that help online stores attract new shoppers, retain existing ones, and increase sales through targeted campaigns and customer-focused experiences.",
          link: "/services/performance-marketing-agency-in-kerala",
        },
        {
          title: "Lead Generation",
          description:
            "Our team builds campaigns that bring in prospects who are genuinely interested in your business. By reaching the right audience with the right message, we increase the chances of turning interest into action.",
          link: "/services/performance-marketing-agency-in-kerala",
        },
        {
          title: "Creative Strategy",
          description:
            "Behind every strong campaign is a clear creative direction. We develop ideas, visuals, and messaging that capture attention and connect with your audience in a lasting way.",
          link: "/services/performance-marketing-agency-in-kerala",
        },
        {
          title: "CRM Setup",
          description:
            "We implement customer relationship management systems that keep your business organised, making it easier to track interactions, manage data, and build stronger connections.",
          link: "/services/performance-marketing-agency-in-kerala",
        },
        {
          title: "Automation",
          description:
            "From follow-up emails to customer reminders, we set up systems that save time and ensure no opportunity is missed. Automation streamlines processes and keeps engagement consistent.",
          link: "/services/performance-marketing-agency-in-kerala",
        },
         {
          title: "WhatsApp Marketing",
          description:
            "We use WhatsApp as a direct, conversational channel to engage with customers, share updates, and build stronger relationships through personalised communication.",
          link: "/services/performance-marketing-agency-in-kerala",
        },
         {
          title: "Email Marketing",
          description:
            "Our email strategies go beyond promotions. They deliver useful, engaging content that keeps your audience informed and connected while driving measurable results.",
          link: "/services/performance-marketing-agency-in-kerala",
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
          link: "/services/seo-company-in-kerala",
        },
        {
          title: "Off-Page SEO",
          description:
            "Increase your site reputation, ranking, and credibility with our Off-Page SEO efforts. We post blogs on PR sites, list on directories, stay active on social media, and more to boost visibility.",
          link: "/services/seo-company-in-kerala",
        },
        {
          title: "Technical SEO",
          description:
            "The infrastructure of your website impacts ranking and that’s why you’ve got us. Our technical SEO solutions help you attract organic traffic and convert it via auditing and adjusting the technical aspects for enhanced performance.",
          link: "/services/seo-company-in-kerala",
        },
        {
          title: "UI/UX Design",
          description:
            "A smooth and easy user experience makes or breaks your website. We craft a web design tailored to your brand to make it immersive and easy to navigate for your potential audience.",
          link: "/services/seo-company-in-kerala",
        },
        {
          title: "Conversion Rate Optimization",
          description:
            "Our seasoned team constantly reviews the UI/UX for improvements and adjusts the elements that help convert your potential audience. All our CRO strategies are crafted according to your industry, goals, and audience.",
          link: "/services/seo-company-in-kerala",
        },
        {
          title: "Content Development",
          description:
            "Keep your audience entertained with creative and relatable content that engages and ultimately converts. We help you stay in trend and scale revenue.",
          link: "/services/seo-company-in-kerala",
        },
      ],
    },


    {
      link: "influencer-marketing",
      subHeading: "Get influencer-approved!",
      description:
        "Partner with leading industry influencers to keep up with trends. Connect with new audiences and engage with your existing followers with creative content on the world’s most popular social media platforms.",
      statistics: ["X+ Creators", "X+ Total Views", "X+ Engagements"],
      offerings: [
        {
          title: "Influencer Marketing",
          description:
            "Thousands of influencers are on the scene but which one is right for you? We at Haris&Co., help you collaborate with personalities that are the best fit for your brand. After a detailed analysis of your brand, goals, and target audience we reach out to influencers best suited for you.",
          link: "/contact",
        },
        {
          title: "Offline Influencer Activation Campaigns",
          description:
            "Our marketing efforts are not just on your screens. With the help of well-known influencers we build hype and increase attendance for events, launches and more.",
          link: "/contact",
        },
        {
          title: "Campaign Planning",
          description:
            "Launch ad campaigns on your platforms with internet personalities. Every campaign that we conduct for your brand is an effort made after detailed research on audience, industry, and current trends.",
          link: "/contact",
        },
        {
          title: "Podcast",
          description:
            "One of the most viral modes of entertainment is podcasts. We help your brand get heard and seen on the most listened to podcasts in your industry.",
          link: "/contact",
        },
        {
          title: "Casting",
          description:
            "Want a familiar face in your ads? We’ve got you covered. We help you connect with the top internet celebrities in your video content.",
          link: "/contact",
        },
      ],
    },

    {
      link: "social-media",
      subHeading: "Make your brand go viral!",
      description:
        "Take your brand to where more than half the world is! In an increasingly online world, you need newer, more compelling ways to stay on top. Let us help you turn your social media platforms into powerful marketing tools.",
      statistics: ["X+ Creatives", "X+ Views", "X+ Engagements"],
      offerings: [
        {
          title: "Social Media Strategy Development",
          description:
            "Our expert Social Media Marketers develop a customized strategy for content, campaigns, designs, and more for your brand. Make your content memorable and entertaining for your current and potential user base, ultimately driving conversions.",
          link: "/contact",
        },
        {
          title: "Content Creation",
          description:
            "Our copywriters and designers come together to create scroll-stopping content that keeps your audience engaged. Every content here at Haris&Co. is designed with care and love, showcasing your brand essence and relating to your audience.",
          link: "/contact",
        },
        {
          title: "Page & Community Management",
          description:
            "Just posting content is not enough for your brand. Staying in the loop with your audience is crucial for driving growth. We actively monitor and engage with your followers, providing customer support services, promoting your brand image, and sourcing user-generated content (UGC).",
          link: "/contact",
        },
        {
          title: "Analytics & Reporting",
          description:
            "We constantly analyze performance data to ensure that the content we post has made an impact and that the strategies are working. We also provide a detailed performance review report to show the difference our content makes for your brand.",
          link: "/contact",
        },
        {
          title: "AI-Powered Chat Automation",
          description:
            "With AI-assisted chats, we provide instant feedback to customers that reach out to you. We set AI-driven responses to deliver personalized messages aligned with your brand to ensure consistency and a human feel to all conversations.",
          link: "/contact",
        },
        {
          title: "Paid Campaigns",
          description:
            "Paid Ad Campaigns on social media platforms help you reach newer demographics than your existing audience. Our marketers create and manage data-driven, targeted ad campaigns across social media platforms. Our solutions drove measurable results within a given time frame.",
          link: "/contact",
        },
        {
          title: "Organic Campaigns",
          description:
            "Tap into where your user base is the most active with strategic content creation and community engagement. Our skilled marketers help build your brand presence naturally, grow an organic following, and foster authentic connections online.",
          link: "/contact",
        },
      ],
    },

    {
      link: "production",
      subHeading: "Get the creative step up to your brand!",
      description:
        "Our award-winning team blends creativity with proven strategies to create visual narratives that resonate with your audience and drive conversions. We bring life to your brand with compelling and high-impact video content tailored to you.",
      statistics: ["X+ Creators", "X+ Total Views", "X+ Engagements"],
      offerings: [
        {
          title: "Video Campaigns",
          description:
            "Tell your brand story in every frame with Haris&Co. With tailored video concepts we help your brand get seen and heard.",
          link: "/contact",
        },
        {
          title: "Theatre Ads",
          description:
            "Showcase your brand on the big screen with us. We pack a punch in our short yet highly engrossing theatre ads. Let your brand be the talk in packed cinema halls with Haris&Co.!",
          link: "/contact",
        },
        {
          title: "Digital Ads",
          description:
            "Most of the world is online and what better place than this to advertise your brand? Our digital ads are customized to display your brand to your target audience and boost conversions.",
          link: "/contact",
        },
        {
          title: "Commercials",
          description:
            "Connect with your audience with commercials that captivate and show your unique brand story. Our team brings your brand to your target audience with fun and quirky commercial ads.",
          link: "/contact",
        },
        {
          title: "UGC Content",
          description:
            "Promote your brand with visual content from real users online. User-generated content is one of the best ways to promote brand loyalty and image. Our creative team helps you connect with users and craft content that aligns with your industry and audience.",
          link: "/contact",
        },
        {
          title: "Product Photography",
          description:
            "Get dedicated product photoshoots to bring your products to the spotlight. Our product photoshoots create a visual narrative for your audience about your brand.",
          link: "/contact",
        },
        {
          title: "Fashion Photos",
          description:
            "Build your brand aesthetic with dedicated photoshoots for your fashion products. Our skilled team connects you with models who would bring your clothing line to life with unique photoshoots.",
          link: "/contact",
        },
        {
          title: "Corporate Videos",
          description:
            "Advertise and promote your company with cinematic visuals that tell your office story. Our cinematic corporate videography captures your brand identity and work culture.",
          link: "/contact",
        },
        {
          title: "Food Photography",
          description:
            "Create mouth-watering visual experiences for your customers with our custom food photography services. We create irresistible photoshoots that make your audience want more.",
          link: "/contact",
        },
        {
          title: "Personal Branding Videos",
          description:
            "Introduce your audience to your authentic and driven self with tailored video content. Our personal branding videography helps you promote trust and connect with your audience by showcasing what you bring to the table and your expertise in your field.",
          link: "/contact",
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
    const selectedService = allServices?.find((s) => s?.link === service);
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
