import React from "react";
import image1 from "@/assets/images/awards/award2.jpeg";
import image2 from "@/assets/images/awards/award1.jpg";
import image3 from "@/assets/images/awards/award3.jpg";
import image4 from "@/assets/images/awards/award4.jpg";
// import image6 from "@/assets/images/awards/award6.jpg";
// import image5 from "@/assets/images/awards/pepper-award.JPG";
import brand from "@/assets/images/awards/brand.png";
import peperLogo from "@/assets/images/awards/peperLogo.jpg";
import afaqsLogo2 from "@/assets/images/awards/afaqsLogo2.png";

export default function useAwards() {
  const awardContent = [
    {
      image: image2,
      title: "Afaqs! startup brands - Silver ",
      date: "2023",
      desc: "Every woman runs her own race, and our Women’s Day campaign for Femisafe honored that journey with honesty and emotion. The campaign sparked conversations, built connection, and was awarded the silver for ‘Best Moment Marketing’.",
      brandImg: brand,
    },
    {
      image: image4,
      title: "Brand Storyz - Bronze ",
      date: "2023",
      desc: "Our campaign for Kiddiebus, an English learning platform for kids, transformed learning into an adventure. With playful, engaging content, we generated over 7,000 leads—earning a bronze award for ‘Best Lead Generation Campaign’ from Afaqs!.",
      brandImg: afaqsLogo2,
    },
    {
      image: image1,
      title: "Afaqs! startup brands - Silver ",
      date: " 2023",
      desc: "Love was in the air, and so was our Valentine’s Day Campaign for Haris&Co! The content struck a chord with audiences, making hearts smile and feeds light up with joy. All that love earned us the silver award from Afaqs! for ‘Best Use of Video on Social Media’, a recognition that celebrated the playful spirit and emotional connect of the campaign.",
      brandImg: brand,
    },

    
    {
      image: image3,
      title: "Pepper Awards - Silver ",
      date: "2023",
      desc: "A touch of Pepper only made us stronger. Our campaign for Femisafe won over the jury at the prestigious Pepper Awards, bringing home a Silver that celebrated creativity, precision, and the impact of meaningful storytelling.",
      brandImg: peperLogo,
    },
    
  ];
  return { awardContent };
}
