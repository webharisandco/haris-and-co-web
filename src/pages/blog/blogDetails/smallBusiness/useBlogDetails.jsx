import Image1 from '@/assets/images/workSection/blogs/img1.svg'
import Image2 from '@/assets/images/workSection/blogs/img2.svg'
import Image3 from '@/assets/images/workSection/blogs/img3.svg'

export default function useBlogDetails() {

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

  const blogContent = {
  title: "The Impact of Digital Marketing in Healthcare",
  sections: [
    {
      heading: "Introduction",
      content: [
        "Today's healthcare journey typically begins with a Google search.",
        "Approximately 7% of all Google searches are health-related, and there are about 70,000 health-related searches per minute, every day.",
        "Search drives three times more visitors to hospital sites compared to non-search channels, making a robust digital presence crucial.",
        "This shift has transformed how healthcare providers connect with communities and manage patient relationships.",
        "Source: Invoca Blog"
      ]
    },
    {
      heading: "Building Trust Through Digital Channels",
      content: [
        "Healthcare decisions are personal and trust-based. Digital marketing helps build and maintain trust.",
        "Strategies include:",
        [
          "Engage patients with educational content",
          "Highlight medical expertise and patient success stories",
          "Provide transparent information about treatments and procedures",
          "Address common health questions and concerns",
          "Offer virtual tours of facilities",
          "Enable online appointment scheduling and telemedicine"
        ]
      ]
    },
    {
      heading: "Strategic Digital Marketing Tools in Healthcare",
      subsections: [
        {
          subtitle: "Search Engine Optimization (SEO)",
          content: [
            "SEO boosts visibility, builds trust, and connects patients with providers.",
            "Why SEO Matters in Healthcare:",
            [
              "Increased Visibility",
              "Targeted Traffic",
              "Authority Building"
            ],
            "Quote: 'Good SEO ensures the right patients connect with the right providers.' - Arunima, Lead SEO Analyst"
          ],
          caseStudy: {
            client: "Leading home care provider in Abu Dhabi",
            strategy: "Targeted SEO for nursing, babysitting, and home care",
            results: [
              "babysitter in Abu Dhabi - 1st Position",
              "home nursing services Abu Dhabi - 2nd Position",
              "home care services in Abu Dhabi - 3rd Position"
            ]
          }
        },
        {
          subtitle: "Social Media Marketing (SMM)",
          content: [
            "Social media builds trust and fosters community engagement.",
            "41% of people said social media affects their choice of doctor, hospital, or facility.",
            "The Role of Social Media:",
            [
              "Patient Engagement",
              "Educational Content",
              "Community Building"
            ],
            "Best Practices:",
            [
              "Platform-specific strategies",
              "Compliance awareness (HIPAA/GDPR)",
              "Interactive content"
            ]
          ],
          caseStudy: {
            client: "Prominent pharmacy chain in Qatar",
            strategy: "Brand identity + culturally relevant content + reels + contests + influencer marketing",
            results: [
              "Followers increased: 3,000 → 12,500",
              "Engagement rate: 10% → 85%"
            ]
          }
        },
        {
          subtitle: "Performance Marketing",
          content: [
            "Performance marketing ensures precision targeting and measurable ROI.",
            "Why it works:",
            [
              "Targeted Campaigns",
              "Cost Efficiency (PPC/PPA)",
              "Real-Time Analytics"
            ],
            "Strategies:",
            [
              "Search Ads",
              "Display Ads",
              "Retargeting"
            ]
          ],
          caseStudy: {
            client: "Whey product lineup",
            results: {
              adSpend: "16.7k AED",
              sales: "236k AED",
              ROAS: "14x"
            }
          }
        }
      ]
    },
    {
      heading: "Measuring Success in Healthcare Digital Marketing",
      metrics: [
        "Patient engagement metrics",
        "Website traffic and conversion rates",
        "Appointment scheduling analytics",
        "Patient feedback and reviews",
        "Social media engagement rates",
        "Return on marketing investment"
      ]
    },
    {
      heading: "The Future of Healthcare Digital Marketing",
      trends: [
        "AI-powered patient communication tools",
        "Virtual reality facility tours",
        "Mobile-first healthcare platforms",
        "Personalised patient content",
        "Telemedicine integration"
      ]
    },
    {
      heading: "Final Words",
      content: [
        "Digital marketing is a cornerstone of modern healthcare delivery.",
        "SEO, social media, and performance marketing form a strong framework for growth.",
        "By investing in these strategies, healthcare providers can enhance reach, foster trust, educate patients, and ensure measurable growth.",
        "Partner with Haris&Co. for healthcare marketing success."
      ]
    }
  ]
};

  return { blogs,blogContent };
}




