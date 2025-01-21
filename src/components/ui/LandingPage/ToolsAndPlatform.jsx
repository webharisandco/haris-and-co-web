import React from 'react';
import ToolsImg from '@/assets/images/landing/ToolsImg.png';
import image1 from '@/assets/images/landing/toolandplatform/image1.png';
import image2 from '@/assets/images/landing/toolandplatform/image2.png';
import image3 from '@/assets/images/landing/toolandplatform/image3.png';
import image4 from '@/assets/images/landing/toolandplatform/image4.png';
import image5 from '@/assets/images/landing/toolandplatform/image5.png';
import image6 from '@/assets/images/landing/toolandplatform/image6.png';
import image7 from '@/assets/images/landing/toolandplatform/image7.png';
import image8 from '@/assets/images/landing/toolandplatform/image8.png';
import image9 from '@/assets/images/landing/toolandplatform/image9.png';
import image10 from '@/assets/images/landing/toolandplatform/image10.png';

const ToolsAndPlatform = () => {
    return (
        <div className="text-white md:px-[100px] flex flex-col items-center py-[50px] text-center">
            <h4 className="font-[Abrobold] text-[30px] md:text-[40px] lg:text-[48px]">
                Tools and Platforms
            </h4>
            <p className="poppins-light px-[18px]">
                We use these tools to set up, finetune, and scale the performance marketing campaigns.
            </p>
            <div className="my-[60px]  flex flex-col gap-[20px] lg:gap-x-[30px]  md:gap-y-16 px-4 w-full overflow-hidden">
                <div className="flex justify-evenly w-full ">
                    <img
                        src={image1}
                        alt="Tool 1"
                        className="max-h-[25px] md:max-h-[75px] object-contain min-w-0"
                    />
                    <img
                        src={image2}
                        alt="Tool 2"
                        className="max-h-[25px] md:max-h-[75px] object-contain min-w-0"
                    />
                    <img
                        src={image3}
                        alt="Tool 3"
                        className="max-h-[25px] md:max-h-[75px] object-contain min-w-0"
                    />
                    <img
                        src={image4}
                        alt="Tool 4"
                        className="max-h-[25px] md:max-h-[75px] object-contain min-w-0"
                    />
                </div>
                <div className="flex justify-around w-full *:min-w-0 gap-5">
                    <img
                        src={image5}
                        alt="Tool 5"
                        className="max-h-[75px] object-contain min-w-0"
                    />

                    <img
                        src={image6}
                        alt="Tool 6"
                        className="max-h-[75px] object-contain"
                    />
                    <img
                        src={image7}
                        alt="Tool 7"
                        className="max-h-[75px] object-contain"
                    />
                    <img
                        src={image8}
                        alt="Tool 8"
                        className="max-h-[75px] object-contain"
                    />
                    <img
                        src={image9}
                        alt="Tool 9"
                        className="max-h-[75px] object-contain"
                    />
                    <img
                        src={image10}
                        alt="Tool 10"
                        className="max-h-[75px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default ToolsAndPlatform;
