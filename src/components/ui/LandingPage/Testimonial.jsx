import React, { useState, useEffect } from 'react';
import PersonIcon from '@/assets/images/landing/PersonIcon.svg';
import TestimonialIcon from '@/assets/images/landing/TestimonialIcon.svg';
import img1 from '@/assets/images/landing/testimonial/img1.jpg';
import img2 from '@/assets/images/landing/testimonial/img2.jpg';
import img3 from '@/assets/images/landing/testimonial/img3.jpg';
import { Star } from 'lucide-react';

const testimonials = [
    {
        title: 'Natya hit the great milestone.',
        content:
            '“We achieved 10 lakh revenue in the last month. Really happy to work with Haris aboobacker, Adarsh, and team. Really happy to work with you, dear. We should fly together more heights. Thankfully”',
        name: 'Kalamandalam Sivaprasad',
        position: 'Founder of Natya Arts Learning App',
        image:img1
    },
    {
        // title: 'Lorem Ipsum 2',
        content:
        '“The professionalism, attention to detail, and the quality of service you have demonstrated have been instrumental in our success. It is a pleasure to work with this team that consistently goes above and beyond expectations. Thank you for the exceptional work. We look forward to continuing our partnership and achieving even better results.”',
        name: 'Kevin Mohan',
        position: 'Marketing Head of Katara limousine',
        image:img2
    },
    {
        title: 'Hi team,',
        content:
        '“Last 2 days we collected almost 2 lakhs from admission and we are spending just 15k per day. Great work team Haris&Co”',
        name: 'Shijas',
        position: 'SkillBuss',
        image:img3  
    },
];

const Testimonial = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentTestimonialIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
                setFade(true);
            }, 500); // Wait for fade-out transition before switching content
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = testimonials[currentTestimonialIndex];

    return (
        <div className="py-[50px]">
            <div className="shadow-[0px_0px_6.63px_6.63px_#1515150D] px-[16px] md:px-[80px] lg:px-[100px] py-[50px] grid lg:grid-cols-[1fr_1.2fr] items-center gap-10 min-h-[750px] md:min-h-[600px] lg:min-h-[500px] ">
                <div>
                    <h6 className="font-[Abrobold] text-[30px] md:text-[40px] lg:text-[45px]">
                        Client Reviews
                    </h6>
                    <p className="poppins-light text-base lg:text-lg w-3/4 lg:w-1/2">
                        See why our clients love working with us
                    </p>
                    <div className="flex gap-5 mt-5">
                        <img
                            src={TestimonialIcon}
                            className="w-[40px] lg:w-[53px]"
                            alt="Testimonial Icon"
                        />
                        <div className="flex flex-col">
                            <div className="flex">
                                <Star color="white" fill="#F1C644" />
                                <Star color="white" fill="#F1C644" />
                                <Star color="white" fill="#F1C644" />
                                <Star color="white" fill="#F1C644" />
                                <Star color="white" fill="#F1C644" />
                            </div>
                            <p className="text-black/50 text-[13px] md:text-[15px]">
                                Reviews
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-[#151515] rounded-[24px] lg:rounded-[40px] p-5 lg:x-[45px] lg:pb-[40px] lg:pt-[65px] text-white flex flex-col gap-4 text-[13px] lg:text-lg transition-opacity ease-in-out duration-500 ${fade ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {currentTestimonial.title &&
                        <h6 className="poppins-semibold ">{currentTestimonial.title}</h6>}
                    <p className="poppins-regular text-[15px]">{currentTestimonial.content}</p>
                    <div className="flex gap-3 lg:gap-5 items-center text-[15px]">
                        <img
                            src={currentTestimonial.image}
                            alt="avatar icon"
                            className="w-[35px] lg:w-[60px] aspect-square rounded-full object-cover"
                        />
                        <div>
                            <p className="poppins-semibold">{currentTestimonial.name}</p>
                            <p className="poppins-regular">{currentTestimonial.position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
