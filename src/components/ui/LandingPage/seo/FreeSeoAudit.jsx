import arroww from "@/assets/images/DigitalMarketing/arroww.svg"; // Update with correct path
import freeBg from "@/assets/images/SeoCompony/free.png"; // Update with correct background image path

const FreeSeoAudit = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat  mt-[70px] mb-[80px] rounded-[20px] px-5 py-[50px]"
      style={{ backgroundImage: `url(${freeBg})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center font-[AbroBold]">
          <h2 className="text-white text-[35px] font-[Abrobold] pb-2 max-sm:text-[26px] max-sm:pb-0">
            Get a Free SEO Audit & Proposal
          </h2>
          <p className="text-white text-[17px]  mx-auto w-[70%] max-sm:w-full max-sm:text-[14px]">
            Get an overview of your website’s SEO performance and a proposal
          </p>
          <p className="text-white text-[17px]  mx-auto w-[70%] pb-[30px] max-sm:w-full max-sm:text-[14px]">
            including our detailed SEO plan. 
          </p>
        </div>

        <form className="flex justify-center pb-10 pl-[30px] max-[700px]:pl-0 max-[700px]:flex-col items-center gap-y-5">
          <div className="w-[170px] mr-5 max-[700px]:w-[90%] max-[700px]:mr-0">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-black bg-transparent placeholder-black/70 rounded-[27px] px-5 py-2 text-white"
            />
          </div>
          <div className="w-[170px] mr-5 max-[700px]:w-[90%] max-[700px]:mr-0">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-black bg-transparent placeholder-black/70 rounded-[27px] px-5 py-2 text-white"
            />
          </div>
          <div className="w-[170px] mr-5 max-[700px]:w-[90%] max-[700px]:mr-0">
            <input
              type="text"
              placeholder="Website"
              className="w-full border border-black bg-transparent placeholder-black/70 rounded-[27px] px-5 py-2 text-white"
            />
          </div>
        </form>

        <div className="flex justify-center">
          <div className="inline-flex items-center  transition-all duration-300 group">
            <button
              type="submit"
              className="text-white py-[15px] group bg-[#7744D5]  font-[Abrobold] px-6  rounded-[10px]  flex items-center gap-2"
            >
              Get it
              <img
                src={arroww}
                alt="Icon"
                className="w-[13px] ml-2 transition-transform duration-300 group-hover:rotate-[30deg]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSeoAudit;
