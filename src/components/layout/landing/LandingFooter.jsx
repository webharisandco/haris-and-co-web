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


const LandingFooter = () => {
    return (
        <div className='bg-black px-[18px] md:px-[50px] lg:px-[80px] py-[50px] text-white space-y-5 poppins-medium'>
            <div className=" md:grid-cols-[1fr_1.2fr] xl:grid-cols-[1fr_1.2fr_1.4fr_1.9fr] gap-[150px] py-[100px] hidden md:grid">
                <div className="flex flex-col ">
                    <img src={logo} className='h-[130px] w-[200px]' alt='Haris&Co Logo' />
                    <img src={googleLogo} className='mt-[50px] mb-[35px] ' alt='Google Partner Logo' />
                    <div className="flex gap-8 justify-center">
                        <img src={LinkedinLogo} alt='Linkedin Logo' />
                        <img src={FacebookLogo} alt='Facebook Logo' />
                        <img src={InstagramLogo} alt='Instagram Logo' />
                        <img src={XLogo} alt='Twitter Logo' />
                    </div>
                </div>
                <div className="space-y-10">
                    <h6 className='poppins-bold text-3xl'>Menu</h6>
                    <div className="flex flex-col gap-5 text-nowrap text-lg">
                        <Link to="/">Home</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">Culture</Link>
                        <Link to="/">Case Studies</Link>
                        <Link to="/">Contacts</Link>
                    </div>
                </div>
                <div className="space-y-10">
                    <h6 className='poppins-bold text-3xl'>Important Links</h6>
                    <div className="flex flex-col gap-5 text-nowrap text-lg">
                        <Link to="/">Case Studies</Link>
                        <Link to="/">SEO</Link>
                        <Link to="/">E-Commerce Marketing</Link>
                        <Link to="/">Lead Generation</Link>
                        <Link to="/">Social Media Marketing</Link>
                    </div>
                </div>
                <div className="space-y-10">
                    <h6 className='poppins-bold text-3xl'>Get In Touch</h6>
                    <div className=" flex flex-col text-lg gap-5 poppins-regular">
                        <div className="gap-8 flex items-start">
                            <Phone color='#333' fill='#fff' />
                            <span>+971 55 490 8107</span>
                        </div>
                        <div className="gap-8 flex items-start">
                            <Mail fill='#fff' color='#333' />
                            <span>haris@harisand.co</span>
                        </div>
                        <div className="gap-8 flex  items-start">
                            <MapPin fill='#fff' color='#333' size={65} className='w-fit h-fit' />
                            <span className=''>Abdulla Kamber Business Center, Room No 103, First Floor, Abu Baker Al Siddique St, Deira - Dubai</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" justify-center text-white/50 hidden md:flex"><span>Copyrights &copy; 2024 by Team Haris&Co.</span></div>
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