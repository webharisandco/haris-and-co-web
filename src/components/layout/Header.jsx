import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Haris&Co.svg';
import menuIcon from '@/assets/images/icons/menu.svg';
import ContactButton from '../ui/HomePage/ContactButton';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0.175);
  const [logoSize, setLogoSize] = useState(0);
  const [scrollY, setScrollY] = useState(0);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.body.style.height = "100vh"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
      document.body.style.height = "auto"; // Prevent scrolling
    }
  };

  // Calculate logo size based on viewport width
  const calculateLogoSize = React.useCallback(() => {
    if (window.innerWidth >= 1024) return 66;
    if (window.innerWidth >= 768) return 50;
    return 30;
  }, []);

  // Handle scroll events with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          const scrollRange = 200;
          const newProgress = Math.max(0.175, Math.min(window.scrollY / scrollRange, 1));
          setScrollProgress(newProgress);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initialize logo size
    setLogoSize(calculateLogoSize());

    // Handle resize events
    const handleResize = () => {
      setLogoSize(calculateLogoSize());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    //   window.removeEventListener('resize', handleResize);
    // };
  }, [calculateLogoSize, window, window.scrollY]);
  // Calculate scaled logo size
  const getScaledLogoSize = (mobileSize = 0.15) => {
    const scaleFactor = logoSize === 30 ? mobileSize : logoSize === 50 ? 0.2 : 0;
    return logoSize / (scaleFactor + scrollProgress);
  };

  // Calculate header height to prevent layout shifts
  const headerHeight = getScaledLogoSize() + 70;



  const containerRef = React.useRef(null);
  const isCompactHeader = scrollY < (logoSize === 30 ? 20 : 35);


  // In your render logic:
  return (
    <div style={{ height: `${headerHeight}px` }}>
      <header className="fixed z-10 px-[16px] md:px-[40px] lg:px-[80px] py-[35px] w-full bg-[#141414]  flex justify-between items-center flex-wrap" style={{ translateY: '-1000px', }}>
        <div ref={containerRef} className={`max-w-fit ${window.scrollY < (logoSize == 30 ? 20 : 35) && 'w-full'}`}>
          <img
            src={Logo}
            alt="Haris & Co."
            className={window.scrollY < (logoSize == 30 ? 20 : 35) && 'w-full h-[100%!important]'}
            style={{
              height: `${Math.min(getScaledLogoSize(0), containerRef.current?.clientHeight || 100)}px`,
              // maxWidth: '100%',

            }}
          />
        </div>
        <div className={` items-center gap-[49px] hidden lg:flex ms-auto flex-nowrap justify-between  ${window.scrollY < (logoSize == 30 ? 20 : 35) && 'w-full'}  `} style={{ gap: 49 + (window.innerWidth / ((window.innerWidth > 1800 ?  100 : window.innerWidth > 1280 ?200 - (20 - ((1300 - window.innerWidth) / 5)) : 100) * scrollProgress)) }}>
          <div className={"flex justify-between gap-[30px] xl:gap-[40px] text-white *:font-light  "} style={{ gap: 20 + (window.innerWidth / ((window.innerWidth > 2200 ?  60 : window.innerWidth > 1800 ?  80 : window.innerWidth > 1280 ? 200 - (20 - ((1300 - window.innerWidth) / 5)) : 90) * scrollProgress)) }}>
            <Link to="/services" className="text-[18px] font-[thin]">Services</Link>
            <Link to="/works" className="text-[18px] font-[thin]">Works</Link>
            <Link to="/clients" className="text-[18px] font-[thin]">Clients</Link>
            <Link to="/awards" className="text-[18px] font-[thin]">Awards</Link>
            <Link to="/about" className="text-[18px] font-[thin] text-nowrap">About us</Link>
            <Link to="/blogs" className="text-[18px] font-[thin]">Blogs</Link>
            <Link to="/career" className="text-[18px] font-[thin]">Careers</Link> 
          </div>
          <div className="hidden xl:flex">
            <ContactButton text='Contact Us' href='/contact' />
          </div>
        </div>

        <div className="lg:hidden flex ms-auto max-w-fit">
          <button onClick={toggleMenu}>
            {/* {menuIcon ? */}
            {/* // <img src={menuIcon} alt="Menu Icon" className="" /> */}
            <button
              className="relative z-50 flex flex-col items-end justify-center w-10 h-10 gap-1 md:gap-1.5 bg-transparent border-none cursor-pointer md:w-15 md:h-15"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-[2px] w-6 md:w-9 bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
              ></span>
              <span
                className={`block h-[2px] w-5 md:w-[30px] bg-white rounded-sm transition-opacity duration-300  ${menuOpen ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block h-[2px]  bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] md:-translate-y-[7.5px] -rotate-45 w-6 md:w-9" : "w-4 md:w-6"
                  }`}
              ></span>
            </button>
            {/* :
          <img src={menuIcon} alt="Menu Icon" className="" /> */}
            {/* } */}
          </button>
          <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>


      </header>
    </div>
  );
}