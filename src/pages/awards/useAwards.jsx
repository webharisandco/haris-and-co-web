import React from "react";
import image1 from "@/assets/images/awards/image1.png";
import image2 from "@/assets/images/awards/image2.png";
import image3 from "@/assets/images/awards/image3.png";
import image4 from "@/assets/images/awards/image4.png";
import image5 from "@/assets/images/awards/pepper-award.JPG";
import brand from "@/assets/images/awards/brand.png";
import peperLogo from '@/assets/images/awards/peperLogo.jpg'

export default function useAwards() {
  const awardContent = [
    {
      image: image1,
      title: "Afaqs! startup brands ",
      date: " 2023",
      desc: "Our Valentine’s Day Campaign bagged the afaqs! Silver award under the category, ‘Best Use of Video on Social Media’.",
      brandImg: brand,
    },
    {
      image: image2,
      title: "Afaqs! startup brands ",
      date: "2023",
      desc: "The Mother’s Day campaign we crafted for Craftise, a crafting materials supplier, was loved by the audience and received the afaqs! Silver award for ‘Best Branded Content’.",
      brandImg: brand,
    },
    {
      image: image3,
      title: "Afaqs! startup brands ",
      date: "2023",
      desc: "Our impactful Women’s Day campaign for Femisafe, a women’s hygiene products company, went on to bag the afaqs! Silver award for ‘Best Moment Marketing’.",
      brandImg: brand,
    },
    {
      image: image4,
      title: "Afaqs! startup brands ",
      date: "2023",
      desc: "The Women’s Day campaign for Femisafe was so beloved that we also bagged the afaqs! Bronze award for ‘Best Social Media Campaign’.",
      brandImg: brand,
    },
    {
      image: image5,
      title: "Pepper Awards",
      date: "2023",
      desc: "Our Women’s Day campaign for Femisafe was a milestone moment as it received the Silver at the Pepper Awards, one of South India’s prestigious awards.",
      brandImg: peperLogo,
    },
    {
      image: image1,
      title: "Brand Storyz",
      date: "2023",
      desc: "Our campaign for Kiddiebus, a kid's English learning platform that generated 7k+ leads, was celebrated with a Bronze afaqs! award for ‘Best Lead Generation Campaign’.",
      brandImg: brand,
    },
  ];
  return { awardContent };
}
