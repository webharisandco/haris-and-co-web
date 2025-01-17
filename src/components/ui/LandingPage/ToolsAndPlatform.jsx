import React from 'react'
import ToolsImg from '@/assets/images/landing/ToolsImg.png'


const ToolsAndPlatform = () => {
    return (
        <div className='text-white md:px-[100px] flex flex-col items-center py-[50px] text-center'>
            <h4 className=' font-[Abrobold] text-[30px] md:text-[40px] lg:text-[48px]'>Tools and Platforms</h4>
            <p className='poppins-light px-[18px] '>We use these tools to set up, finetune and scale the performance marketing campaigns. </p>
            <img src={ToolsImg} alt="Tools and Platforms " className='my-[60px]' />
        </div>
    )
}

export default ToolsAndPlatform