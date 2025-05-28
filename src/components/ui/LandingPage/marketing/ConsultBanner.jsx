
import { ArrowUpRight } from 'lucide-react'


const ConsultBanner = () => {
  return (
    <div className=" px-[16px] py-[50px] md:px-[80px] lg:px-[50px]">
      <div   className="bg-[#F1C644] w-full rounded-[10px] md:rounded-[30px] lg:rounded-[40px] flex justify-center md:justify-between px-[16px] md:px-[50px] lg:px-[70px] py-[30px] items-center gap-10 flex-col md:flex-row">
        <p className="md:text-[60px] w-[55%]  text-[40px] bebas-neue-regular font-bold text-white text-center md:text-start">
          Let's Discuss How We Can Grow Your Business
        </p>
        <a
          href="https://wa.me/919876543210" // Replace with your actual number
          target="_blank"
          rel="noopener noreferrer"
          className={`group bg-[#7744D5] hover:bg-[#7744D5]/50 text-white py-[15px] px-[20px] rounded-xl flex justify-center gap-[10px] transition-all duration-300 font-[Abroregular] w-full sm:w-auto `}
        >
          <span className="whitespace-nowrap">Consult Us</span>
          <span>
     
              <ArrowUpRight
                className="group-hover:rotate-45 transition-all duration-300"
                size={23}
              />
            
          </span>
        </a>
      </div>
    </div>
  );
};

export default ConsultBanner;
