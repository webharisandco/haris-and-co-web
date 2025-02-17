import React from 'react'
import Button from '../../components/ui/common/Button'

export default function JobCard({className}) {
    return (
        <div className={'bg-white shadow-md p-6  flex flex-col justify-between gap-10 3xl:gap-24 ' + className}>
            <div className="">
                <div className="flex justify-between items-center">
                    <h6 className='text-[25px] 3xl:text-[36px] '>Graphic Designer</h6>
                    <p className='3xl:text-[20px]'>Onsite</p>
                </div>
                <p className='text-black/50 font-[thin] 3xl:text-[20px]'>Kozhikode, Kerala</p>
            </div>
            <Button text='Apply' className="text-black" />
        </div>
    )
}
