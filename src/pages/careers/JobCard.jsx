import React from 'react'
import Button from '../../components/ui/common/Button'

export default function JobCard() {
    return (
        <div className='bg-white shadow-md p-8 flex flex-col justify-between gap-10'>
            <div className="">
                <div className="flex gap-10">
                    <h6 className='text-[30px]'>Graphic Designer</h6>
                    <p>Onsite</p>
                </div>
                <p className='text-black/50 font-thin'>Kozhikode, Kerala</p>
            </div>
            <Button text='Apply' className="text-black" />
        </div>
    )
}
