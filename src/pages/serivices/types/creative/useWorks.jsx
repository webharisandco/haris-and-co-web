import Image1 from "@/assets/images/workSection/blogs/img1.svg";
import Image2 from "@/assets/images/workSection/blogs/img2.svg";
import Image3 from "@/assets/images/workSection/blogs/img3.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function useWorks() {
  const [currentService, setCurrentService] = useState(null);

  const location = useLocation();
  const pathSegments = location.pathname?.split("/");
  const service = pathSegments[pathSegments?.length - 1]; // Get last part of URL

  console.log("Current URL Service:", service);


  const allServices = [
    {
      link: "branding",
      subHeading: "Branding is not just about a logo.",
      description:
        "Our bespoke branding solutions tell a story about your brand, creating a complete brand experience, making it unforgettable, encouraging loyalty, and driving conversions. For companies starting from scratch and brands looking to refresh, we cater to them all.",
      adsImages: {
        desktop: "/images/services/Branding.png",
        // mobile: "/images/services/SM (1).png",
      },
      statistics: [
        "X+ Stories Crafted",
        "X+ Projects launched in India & the GCC",
        "X+ Awards",
      ],
      offerings: [
        {
          title: "Website Development",
          description:
            "We build websites that are fast, reliable, and easy to navigate. Each site is structured to deliver information clearly while supporting your business objectives and keeping visitors engaged.",
          link: "/contact",
        },
        {
          title: "Ecommerce Development",
          description:
            "Our team creates online stores that simplify shopping and boost sales. From product listings to secure checkout processes, every element is designed to enhance the customer experience.",
          link: "/contact",
        },
        {
          title: "Website Auditing",
          description:
            "We evaluate your website’s performance, structure, and user experience to identify areas that need improvement. Audits help ensure your site runs efficiently and meets user expectations.",
          link: "/contact",
        },
        {
          title: "Website Optimization",
          description:
            "Through careful tuning of speed, layout, and content, we enhance how your website performs. Optimized sites load faster, retain visitors longer, and make it easier for people to find what they need.",
          link: "/contact",
        },
        {
          title: "UI/UX Design",
          description:
            "We create interfaces that feel intuitive and enjoyable. Clear navigation, thoughtful layouts, and cohesive visuals make your website or app a place users want to explore.",
          link: "/contact",
        },
        {
          title: "App Development",
          description:
            "From concept to launch, we develop mobile and web applications that solve real problems. Apps are designed to be smooth, responsive, and aligned with your business goals.",
          link: "/contact",
        },
      ],
    },



    {
      link: "web-development",
      subHeading: "Welcome your users to the digital home of your brand.",
      description:
        "Give your audience a unique brand experience from the first click with our custom scroll-worthy layouts and smooth user experience. Drive customer retention, loyalty, conversions, and revenue with us.",
            adsImages: {
        desktop: "/images/services/web.png",
        // mobile: "/images/services/SM (1).png",
      },
        statistics: [
        "X+ Happy Brands",
        "X+ Websites Built",
        "X+ Generated in Revenue",
      ],
      offerings: [
        {
          title: "On-Page SEO",
          description:
            "We fine-tune the essentials within your website, such as titles, tags, URLs, and keyword placement, to improve clarity and visibility in search results. This ensures your content is easily discovered and relevant to the right audience.",
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "Off-Page SEO",
          description:
            "We strengthen your online presence beyond your website by building links, publishing on PR platforms, and creating directory listings that enhance credibility and authority.",
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "Technical SEO",
          description:
            "Our team handles behind-the-scenes improvements like site speed, security, and architecture. A technically sound site performs better, loads faster, and provides a smoother experience for visitors.",
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "UI/UX Design",
          description:
            "A well-designed site keeps visitors engaged. Through thoughtful use of layouts, typography, and colours, we create a digital space that feels attractive and easy to navigate.",
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "Conversion Rate Optimisation",
          description:
            "We review the customer journey, identify barriers, and adjust key elements to increase the likelihood that visitors take action, whether it is making a purchase, signing up, or getting in touch.",
          link: "/ae/services/web-development-company-in-dubai",
        },
        {
          title: "Content Development",
          description:
            "We produce content that informs and engages while guiding readers toward becoming customers. Each piece is shaped to reflect your brand’s voice and connect with your audience in a meaningful way.",
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
            adsImages: {
        desktop: "/images/services/SM (1).png",
        // mobile: "/images/services/SM (1).png",
      },
      statistics: [
        "X+ Brands Worked With",
        "X+ Revenue Generated",
        "X+ Platforms Catered To",
      ],
      offerings: [
        {
          title: "Advertising & Marketing Projects",
          description:
            "We create commercials, digital ads, branded content, and product launch films that capture attention and communicate messages effectively. From television to social platforms, our campaigns are built to connect with audiences where they are most active.",
          link: "/contact",
        },
        {
          title: "Entertainment & Broadcast Projects",
          description:
            "Our team produces music videos, show promos, and OTT content support. We also work on documentaries, providing both creative direction and technical execution for broadcast storytelling.",
          link: "/contact",
        },
        {
          title: "Corporate & Industrial Projects",
          description:
            "We produce training videos, investor films, industrial showcases, and event coverage. These projects are designed to educate, inform, and strengthen communication with employees, stakeholders, and customers.",
          link: "/contact",
        },
        {
          title: "Event & Experiential Projects",
          description:
            "From concerts to corporate summits, we cover live events and brand activations with dynamic visuals. We also create experiential marketing videos that document campaigns and bring case studies to life.",
          link: "/contact",
        },
        {
          title: "Specialized Creative Projects",
          description:
            "Our creative team develops photography campaigns, animation, VFX, and immersive AR and VR experiences. We also manage shoots with celebrities and brand ambassadors, ensuring standout content for every medium.",
          link: "/contact",
        },
         {
          title: "Line Production Services",
          description:
            "We provide on-ground support for agencies, production houses, and brands, covering everything from local crew and vendors to logistics, permissions, and location management.",
          link: "/contact",
        },
         {
          title: "Retainer & Long-Term Partnerships",
          description:
            "For brands looking for ongoing content support, we offer retainer models and exclusive tie-ups. This ensures consistency in brand storytelling and a dedicated team to manage creative needs over time.",
          link: "/contact",
        },
      ],
    },



    {
      link: "performance",
      subHeading: "Drive engagement & results with us.",
      description:
        "We are growth geeks focused on results. We provide customized strategies, ad placements, and audience targeting to help you get the numbers that matter.",
            adsImages: {
        desktop: "/images/services/PM.png",
        // mobile: "/images/services/SM (1).png",
      },
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
            adsImages: {
        desktop: "/images/services/seo.png",
        // mobile: "/images/services/SM (1).png",
      },
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
            adsImages: {
        desktop: "/images/services/influencer marketing.png",
        // mobile: "/images/services/SM (1).png",
      },
        statistics: ["X+ Creators", "X+ Total Views", "X+ Engagements"],
      offerings: [
        {
          title: "Brand Identity",
          description:
            "We design the visual and verbal elements that define a brand, including logos, colours, typography, and tone of voice, ensuring consistency across every platform.",
          link: "/contact",
        },
        {
          title: "Campaigns",
          description:
            "From concept to execution, we create integrated campaigns that carry a brand’s message across multiple channels, building visibility and recognition.",
          link: "/contact",
        },
        {
          title: "OOH",
          description:
            "Our team develops out-of-home advertising such as billboards, transit ads, and outdoor displays that reach audiences in public spaces with strong, memorable visuals.",
          link: "/contact",
        },
        {
          title: "Brand Activations",
          description:
            "We design interactive experiences that bring a brand to life, encouraging direct engagement and creating lasting connections with customers.",
          link: "/contact",
        },
        {
          title: "Brand Strategy",
          description:
            "Through research and planning, we define positioning, messaging, and long-term direction, giving brands a clear path to grow and remain relevant.",
          link: "/contact",
        },
        {
          title: "Digital Experiences",
          description:
            "We craft online experiences, from interactive content to web campaigns, that merge creativity with technology to keep audiences engaged.",
          link: "/contact",
        },
        {
          title: "Event Branding",
          description:
            "Our event branding work ensures that conferences, launches, and live experiences reflect the identity of the brand at every touchpoint.",
          link: "/contact",
        },
        {
          title: "Package Design",
          description:
            "We create packaging that not only protects and presents the product but also communicates the brand’s personality and attracts attention on the shelf.",
          link: "/contact",
        },
        {
          title: "Ad Films",
          description:
            "We produce ad films that tell a brand’s story with impact, whether for television, digital platforms, or internal use.m ",
          link: "/contact",
        },
      ],
    },

    {
      link: "social-media",
      subHeading: "Make your brand go viral!",
      description:
        "Take your brand to where more than half the world is! In an increasingly online world, you need newer, more compelling ways to stay on top. Let us help you turn your social media platforms into powerful marketing tools.",
            adsImages: {
        desktop: "/images/services/SM (1).png",
        // mobile: "/images/services/SM (1).png",
      },
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
            adsImages: {
        desktop: "/images/services/production.png",
        // mobile: "/images/services/SM (1).png",
      },
        statistics: ["X+ Creators", "X+ Total Views", "X+ Engagements"],
      offerings: [
        {
          title: "Influencer Marketing",
          description:
            "We connect brands with influencers who align with their values and audience. By leveraging trusted voices on social platforms, we create authentic visibility and engagement.",
          link: "/contact",
        },
        {
          title: "Brand Launch",
          description:
            "We design launch strategies that introduce new brands with impact. Through targeted campaigns, we build awareness, define identity, and establish a strong market presence.",
          link: "/contact",
        },
        {
          title: "Event Marketing",
          description:
            "We use influencer partnerships and digital channels to generate interest in events. Whether it is a conference, launch, or festival, our campaigns drive attendance and participation.",
          link: "/contact",
        },
        {
          title: "Product Launch",
          description:
            "Our campaigns build anticipation around new products and services. By combining influencer reach with creative communication, we encourage engagement and early adoption.",
          link: "/contact",
        },
        {
          title: "Creators Management",
          description:
            "We handle the relationships with creators, from selection to campaign delivery. This includes evaluating demographics and portfolios, vetting credibility, coordinating production, and ensuring content is delivered on time.",
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
