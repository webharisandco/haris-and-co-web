import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import PersonIcon from "@/assets/images/landing/PersonIcon.svg";
import TestimonialIcon from "@/assets/images/landing/TestimonialIcon.svg";
import img1 from "@/assets/images/landing/testimonial/img1.jpg";
import img2 from "@/assets/images/landing/testimonial/img2.jpg";
import img3 from "@/assets/images/landing/testimonial/img3.jpg";
import test1 from "@/assets/images/landing/testimonial/test1.svg";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "“We achieved 10 lakh revenue in the last month. Really happy to work with Haris aboobacker, Adarsh, and team. Really happy to work with you, dear. We should fly together more heights. Thankfully”",
    name: "Kalamandalam Sivaprasad",
    position: "Founder of Natya Arts Learning App",
    image: img1,
  },
  {
    // title: 'Lorem Ipsum 2',
    content:
      "“The professionalism, attention to detail, and the quality of service you have demonstrated have been instrumental in our success. It is a pleasure to work with this team that consistently goes above and beyond expectations. Thank you for the exceptional work. We look forward to continuing our partnership and achieving even better results.”",
    name: "Kevin Mohan",
    position: "Marketing Head of Katara limousine",
    image: img2,
  },
  {
    content:
      "“Last 2 days we collected almost 2 lakhs from admission and we are spending just 15k per day. Great work team Haris&Co”",
    name: "Shijas",
    position: "SkillBuss",
    image: img3,
  },
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [fade, setFade] = useState(true);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setFade(false);
  //       setTimeout(() => {
  //         setCurrentTestimonialIndex((prevIndex) =>
  //           prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
  //         );
  //         setFade(true);
  //       }, 500); // Wait for fade-out transition before switching content
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="pt-[50px] pb-[120px] bg-[#151515]">
      <div className="flex w-full justify-center ">
        <h6 className="font-[Abrobold] text-white text-[30px] md:text-[40px] lg:text-[45px]">
          Customers say about our service
        </h6>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {testimonials.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="shadow-[0px_0px_6.63px_6.63px_#1515150D] px-[16px] md:px-[80px] lg:px-[100px] py-[50px] grid lg:grid-cols-[1fr_1.2fr] items-center gap-[30px] min-h-[750px] md:min-h-[600px] lg:min-h-[500px]">
              <div>
                <img className="h-[400px]" src={test1} alt="" />
              </div>
              <div className="bg-[#7744D5] h-full rounded-[24px] lg:rounded-[40px] p-5 lg:px-[45px] lg:pb-[40px] lg:pt-[65px] text-white flex flex-col justify-center px-[60px] gap-[36px] text-[13px] lg:text-lg">
                <p className="poppins-regular text-[18px]">{data.content}</p>
                <div className="flex gap-3 lg:gap-5 items-center text-[15px]">
                  <img
                    src={data.image}
                    alt="avatar icon"
                    className="w-[35px] lg:w-[60px] aspect-square rounded-full object-cover"
                  />
                  <div>
                    <div className="flex flex-col">
                      <div className="flex gap-[10px]">
                        <p className="poppins-regular text-[18px]">
                          {data.name}
                        </p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="#F1C644" />
                          ))}
                        </div>
                      </div>
                      <p className="poppins-semibold text-[18px]">
                        {data.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
