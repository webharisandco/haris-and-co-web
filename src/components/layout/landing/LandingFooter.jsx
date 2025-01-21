import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/landing/LandingFooterLogo.svg'
import googleLogo from '@/assets/images/landing/googleLogo.svg'
import LinkedinLogo from '@/assets/images/landing/LinkedinLogo.svg'
import FacebookLogo from '@/assets/images/landing/FacebookLogo.svg'
import InstagramLogo from '@/assets/images/landing/InstagramLogo.svg'
import XLogo from '@/assets/images/landing/XLogo.svg'
import Logo from '@/assets/images/Haris&Co.svg';


const LandingFooter = ({ performance = false }) => {
    return (
        <div className='bg-black px-[18px] md:px-[50px] lg:px-[100px] py-[50px] text-white space-y-5 poppins-medium'>
            <div className="gap-[40px] xl:gap-[70px] py-[100px] hidden md:flex justify-between flex-col lg:flex-row">
                <div className="flex flex-col ">
                    <img src={logo} className='h-[130px] w-[200px]' alt='Haris&Co Logo' />
                    <img src={googleLogo} className='mt-[50px] mb-[35px] w-[200px]' alt='Google Partner Logo' />
                    <div className="flex gap-8 justify-start lg:justify-center">
                        <img src={LinkedinLogo} alt='Linkedin Logo' />
                        <img src={FacebookLogo} alt='Facebook Logo' />
                        <img src={InstagramLogo} alt='Instagram Logo' />
                        <img src={XLogo} alt='Twitter Logo' />
                    </div>
                </div>
                <div className="space-y-10">
                    <h6 className='poppins-bold text-xl'>Menu</h6>
                    <div className="flex flex-col gap-5  poppins-light text-nowrap">
                        <Link to="/">Home</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">Career</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Case Studies</Link>
                        <Link to="/">Contacts</Link>
                    </div>
                </div>
                <div className="space-y-10">
                    <h6 className='poppins-bold text-xl'>Important Links</h6>
                    <div className="flex flex-col gap-5 text-nowrap poppins-light">
                        <Link to="/">Digital Marketing</Link>
                        <Link to="/">SEO</Link>
                        <Link to="/">Lead Generation</Link>
                        <Link to="/">Social Media Marketing</Link>
                        <Link to="/">Web Development</Link>
                    </div>
                </div>
                <div className="space-y-10">
                    <h6 className='poppins-bold text-xl text-nowrap'>Locations We Serve</h6>
                    {performance ? <div className="flex flex-col gap-5 text-wrap poppins-light">
                        <Link to="/ae/services/performance-marketing-agency-in-dubai">Performance Marketing Agency in Dubai</Link>
                        <Link to="/ae/services/performance-marketing-agency-in-sharjah">Performance Marketing Agency in Sharjah</Link>
                        <Link to="/ae/services/performance-marketing-agency-in-abudhabi">Performance Marketing Agency in Abu Dhabi</Link>
                        <Link to="/services/performance-marketing-agency-in-kerala">Performance Marketing Agency in Kerala</Link>
                    </div>
                        :
                        <div className="flex flex-col gap-5 text-nowrap poppins-light">
                            <Link to="/ae/services/web-development-company-in-dubai">Web Development Company in Dubai</Link>
                            <Link to="/ae/services/web-development-company-in-sharjah">Web Development Company in Sharjah</Link>
                            <Link to="/ae/services/web-development-company-in-abudhabi">Web Development Company in Abu Dhabi</Link>
                        </div>}
                </div>
                <div className="space-y-10">
                    <h6 className='poppins-bold text-xl'>Get In Touch</h6>
                    <div className=" flex flex-col poppins-light gap-5 ">
                        <div className="gap-8 flex items-start">
                            <Phone color='#333' fill='#fff' />
                            <span>+971 55 490 8107</span>
                        </div>
                        <div className="gap-8 flex items-start">
                            <Mail fill='#fff' color='#333' />
                            <span>haris@harisand.co</span>
                        </div>
                        <div className="gap-8 flex  items-start">
                            <MapPin fill='#fff' color='#333' className='w-fit h-fit min-h-[40px]' />
                            <span className=''>Abdulla Kamber Business Center, Room No 103, First Floor, Abu Baker Al Siddique St, Deira - Dubai</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" justify-center text-white/50 hidden md:flex"><span>Copyrights &copy; 2025 by Team Haris&Co.</span></div>
            <div className="flex md:hidden flex-col gap-6">
                <div className="flex flex-col gap-5 px-10 justify-center text-center">
                    <img src={Logo} alt="" />
                    <p>If you didn’t find the products you are interested in or have questions?</p>
                </div>
                <div className="*:border *:border-white flex justify-between *:py-3 gap-6 *:w-full">
                    <button>Email</button>
                    <button>Contact Us</button>
                </div>
                <div className="flex gap-8 justify-center *:rounded-full *:p-4 *:border *:border-white">
                    <img src={LinkedinLogo} alt='Linkedin Logo' />
                    <img src={FacebookLogo} alt='Facebook Logo' />
                    <img src={InstagramLogo} alt='Instagram Logo' />
                    <img src={XLogo} alt='Twitter Logo' />
                </div>
                <div className="poppins-medium flex flex-wrap gap-5 text-center justify-center">
                    <p className="text-[12px]">Services</p>
                    <p className="text-[12px]">Works</p>
                    <p className="text-[12px]">Clients</p>
                    <p className="text-[12px]">About us</p>
                    <p className="text-[12px]">Awards</p>
                    <p className="text-[12px]">Careers</p>
                    <p className="text-[12px]">Digital marketing agency in kerala</p>
                </div>
            </div>
        </div>
    )
}

export default LandingFooter