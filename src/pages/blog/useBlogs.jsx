import React from 'react'
import blogImg1 from '@/assets/images/blogs/blog8.png'
import blogImg2 from '@/assets/images/blogs/blog4.png'
import blogImg3 from '@/assets/images/blogs/blog5.png'
import blogImg4 from '@/assets/images/blogs/blog6.png'
import blogImg5 from '@/assets/images/blogs/blog7.png'

export default function useBlogs() {
    const blogContent = [
        {
            img: blogImg1,
            type: "Web Development & UI/UX",
            title: "Styling an online presence for Disha Creationz!",
            date: "November 07, 2024   .   6  min read ",
        },
        {
            img: blogImg2,
            type: "Web Development & UI/UX",
            title: "Styling an online presence for Disha Creationz!",
            date: "November 07, 2024   .   6  min read ",
        },
        {
            img: blogImg3,
            type: "Web Development & UI/UX",
            title: "Styling an online presence for Disha Creationz!",
            date: "November 07, 2024   .   6  min read ",
        },
        {
            img: blogImg4,
            type: "Web Development & UI/UX",
            title: "Styling an online presence for Disha Creationz!",
            date: "November 07, 2024   .   6  min read ",
        },
        {
            img: blogImg5,
            type: "Web Development & UI/UX",
            title: "Styling an online presence for Disha Creationz!",
            date: "November 07, 2024   .   6  min read ",
        },
    ]
    return { blogContent }
}
