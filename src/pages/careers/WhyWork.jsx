import React from 'react'

export default function WhyWork() {
    return (
        <div className='bg-white px-[100px] py-[80px] flex flex-col items-center gap-[70px]'>
            <h2 className="text-[36px] font-medium">Why work with us ?</h2>
            <div className="flex justify-between gap-10">
                <div className="flex gap-2">
                    <div className="text-[31px] font-[boldtext]">01.</div>
                    <div className="flex flex-col gap-2">
                        <h3 className='text-[25px] leading-snug font-medium'>Collaborative and Creative Environment</h3>
                        <p className='font-[thin]'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="text-[31px] font-[boldtext]">02.</div>
                    <div className="flex flex-col gap-2">
                        <h3 className='text-[25px] leading-snug font-medium'>Opportunities for Growth and Development</h3>
                        <p className='font-[thin]'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="text-[31px] font-[boldtext]">03.</div>
                    <div className="flex flex-col gap-2">
                        <h3 className='text-[25px] leading-snug font-medium'>Impactful Work with Leading Brands</h3>
                        <p className='font-[thin]'>Crafting a roadmap that defines your brand’s purpose, positioning, and long-term vision.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
