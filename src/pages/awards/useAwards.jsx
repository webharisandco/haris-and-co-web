import React from "react";
import image1 from "@/assets/images/awards/image1.png";
import image2 from "@/assets/images/awards/image2.png";
import image3 from "@/assets/images/awards/image3.png";
import image4 from "@/assets/images/awards/image4.png";
import image5 from "@/assets/images/awards/image5.png";
// import image6 from "@/assets/images/awards/award6.jpg";
// import image5 from "@/assets/images/awards/pepper-award.JPG";
import brand from "@/assets/images/awards/brand.png";


export default function useAwards() {
  const awardContent = [
    {
      image: image1,
      title: "Afaqs! startup brands Silver",
      date: "2023",
      desc: "Love was in the air, and so was our Valentine’s Day Campaign for Haris&Co! The content struck a chord with audiences, making hearts smile and feeds light up with joy. All that love earned us the silver award from Afaqs! for ‘Best Use of Video on Social Media’, a recognition that celebrated the playful spirit and emotional connect of the campaign.",
      brandImg: brand,
    },
    {
      image: image2,
      title: "Afaqs! startup brands Silver",
      date: "2023",
      desc: "Mother’s Day felt extra special for us thanks to our campaign for Craftise, a crafting materials supplier. It captured the little handmade moments and the joy of gifting that make mothers feel truly appreciated. All that love translated into a silver award for ‘Best Branded Content’.",
      brandImg: brand,
    },
    {
      image: image3,
      title: "Afaqs! startup brands - Silver ",
      date: " 2023",
      desc: "Every woman runs her own race, and our Women’s Day campaign for Femisafe honored that journey with honesty and emotion. The campaign sparked conversations, built connection, and was awarded the silver for ‘Best Moment Marketing’.",

      brandImg: brand,
    },

    
    {
      image: image4,
      title: "Pepper Awards - Silver",
      date: "2023",
      desc: "A little Pepper only made us stronger. Our work for Femisafe also impressed the jury at the prestigious Pepper Awards, earning a silver award that celebrated creativity, precision, and the power of meaningful campaigns.",

      brandImg: brand,
    },

     {
      image: image5,
      title: "Brand Storyz - Bronze",
      date: "2023",
      desc: "Our campaign for Kiddiebus, an English learning platform for kids, turned learning into an adventure, generating over 7,000 leads with playful, engaging content. The result? It secured the bronze award for ‘Best Lead Generation Campaign’ from Afaqs!.",
      brandImg: brand,
    },

     {
      image: image5,
      title: "Afaqs! Startup Brands - Bronze",
      date: "2023",
      desc: "And the love kept rolling in for Femisafe- our Women’s Day campaign also earned the bronze award for ‘Best Social Media Campaign’. Strong message, flawless execution, happy audiences- proof that creativity with heart always wins.",
      brandImg: brand,
    },
   
  ];

  <p><strong>Every award is a milestone, a recognition of creativity, strategy, and execution. And this is just the beginning. Our shelf is filling up, our ambition is growing, and the best work is still ahead. Here's to winning more hearts and accolades alike.</strong></p>

  return { awardContent };
}
