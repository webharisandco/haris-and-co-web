import Image1 from '@/assets/images/workSection/blogs/img1.svg'
import Image2 from '@/assets/images/workSection/blogs/img2.svg'
import Image3 from '@/assets/images/workSection/blogs/img3.svg'

function useBlogDetails() {

  const blogs = [
    {
      img: Image1,
      titile: "Web Development & UI/UX",
      heading: "Styling an online presence for Disha Creationz!",
      date: 'November 07, 2024   .   6  min read '
    },
    {
      img: Image2,
      titile: "Web Development & UI/UX",
      heading: "Styling an online presence for Disha Creationz!",
      date: 'November 07, 2024   .   6  min read '
    },
    {
      img: Image3,
      titile: "Web Development & UI/UX",
      heading: "Styling an online presence for Disha Creationz!",
      date: 'November 07, 2024   .   6  min read '
    },
  ]
  return { blogs };
}

export default useBlogDetails;
