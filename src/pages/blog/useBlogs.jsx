import blogImg1 from "@/assets/images/blogs/blg1.webp";
import blogImg2 from "@/assets/images/blogs/blg2.webp";
import blogImg3 from "@/assets/images/blogs/blg3.webp";

export default function useBlogs() {
  const blogContent = [
    {
      img: blogImg1,
      type: "Web Development & UI/UX",
      title:
        "What is SEO in Digital Marketing? How It Works and Why It’s Important",
      date: "May 24, 2025 ",
    },
    {
      img: blogImg2,
      type: "Web Development & UI/UX",
      title: "SEO Content Writing: What It Is, How It Works & Why It Matters",
      date: "May 24, 2025 ",
    },
    {
      img: blogImg1,
      type: "Web Development & UI/UX",
      title: "What is SEO in Digital Marketing? How It Works and Why It’s Important",
      date: "November 07, 2024 ",
    },
    {
      img: blogImg2,
      type: "Web Development & UI/UX",
      title: "SEO Content Writing: What It Is, How It Works & Why It Matters",
      date: "May 24, 2025 ",
    },
    {
      img: blogImg3,
      type: "Web Development & UI/UX",
      title: "How Digital Marketing is Transforming Real Estate",
      date: "May 24, 2025 ",
    },
  ];
  return { blogContent };
}
