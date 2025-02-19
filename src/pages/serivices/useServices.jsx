import Branding1 from '@/assets/images/servicesSection/branding1.svg';
import Branding2 from '@/assets/images/servicesSection/branding2.svg';
import Branding3 from '@/assets/images/servicesSection/branding3.svg';
import Branding4 from '@/assets/images/servicesSection/branding4.svg';
import Branding5 from '@/assets/images/servicesSection/branding5.svg';
import Branding6 from '@/assets/images/servicesSection/branding6.svg';
import Branding7 from '@/assets/images/servicesSection/branding7.svg';
import Branding8 from '@/assets/images/servicesSection/branding8.svg';
import icon from '@/assets/images/servicesSection/rightArrow.svg'

function useServices() {
    const brandingContents = [
        {
          title: "Branding",
          description:
            "Beyond a logo, within a story. Your branding journey with us is an ongoing partnership helping you tell a story that resonates and drives conversions. From logo design to constant brand revisions, our branding team makes your brand stand out.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/branding'
          },
          image: Branding1,
        },
        {
          title: "Web Development & UI/UX",
          description:
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/web-development'
          },
          image: Branding2,
        },
        {
          title: "Creative",
          description:
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/creative'
          },
          image: Branding3,
        },
        {
          title: "Digital PR & Communication",
          description:
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/digital'
          },
          image: Branding4,
        },
        {
          title: "Performance Marketing",
          description:
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/performance'
          },
          image: Branding5,
        },
        {
          title: "Production",
          description:
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/production'
          },
          image: Branding6,
        },
        {
          title: "SEO",
          description:
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/seo'
          },
          image: Branding7,
        },
        {
          title: "Social Media",
          description:
            "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
          services: [
            "Brand Consulting",
            "Logo Design",
            "Graphic Design",
            "Brand Identity",
            "Brand Collateral",
            "Product Design"
          ],
          action: {
            label: "Explore",
            icon: icon,
            link:'/services/social-media'
          },
          image: Branding8,
        }
      ];


  return {
brandingContents
  }
    
  
}

export default useServices