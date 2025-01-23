import Image1 from '../../assets/images/workSection/blogs/img1.svg'
import Image2 from '../../assets/images/workSection/blogs/img2.svg'
import Image3 from '../../assets/images/workSection/blogs/img3.svg'
function useWorks() {
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
  const blogs=[
    {
    img:Image1,
    titile:"Web Development & UI/UX",
    heading:"Styling an online presence for Disha Creationz!",
    date:'November 07, 2024   .   6  min read '
  },
    {
    img:Image2,
    titile:"Web Development & UI/UX",
    heading:"Styling an online presence for Disha Creationz!",
    date:'November 07, 2024   .   6  min read '
  },
    {
    img:Image3,
    titile:"Web Development & UI/UX",
    heading:"Styling an online presence for Disha Creationz!",
    date:'November 07, 2024   .   6  min read '
  },
]
  return { services,blogs };
}

export default useWorks;
