import React, { useState } from 'react';

export const Faq = ({ faqList }) => {
    const [isCollapsed, setIsCollapsed] = useState(0);

    return (
        <div className="flex flex-col gap-[80px] py-[50px] px-[16px] md:px-[60px] lg:px-[100px]">
            <h3 className="poppins-bold mx-auto text-[36px] md:text-[40px] lg:text-[48px]">FAQs</h3>
            <div className="space-y-2 ">
                {faqList.map((faq, index) => {
                    const isActive = isCollapsed === index;
                    return (
                        <div key={index} className="flex flex-col gap-4">
                            {/* FAQ Header */}
                            <div
                                className="border-[#D9D9D9] border-2 py-[20px] px-[45px] rounded-xl flex gap-8 cursor-pointer"
                                onClick={() => setIsCollapsed(isActive ? null : index)}
                            >
                                <div className={`transition-all duration-300 ${isActive ? 'rotate-180 ' : ''}`}>
                                    <div
                                        className={`transition-all duration-300 border-transparent border-t-[#000] border-[10px] translate-y-2 ${isActive ? '-translate-y-2 ' : ''
                                            }`}
                                    ></div>
                                </div>
                                <p className="poppins-semibold text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] font-bold">{faq.question}</p>
                            </div>
                            <div
                                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out `}
                                style={{
                                    maxHeight: isActive ? '250px' : '0',
                                }}
                            >
                                <p className="text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] poppins-regular px-4 mb-4">{faq.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
