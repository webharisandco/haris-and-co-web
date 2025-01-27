import React from 'react'
import Banner from './Banner'
import JobCard from './JobCard'
import WhyWork from './WhyWork'

export default function Careers() {
    return (
        <div>
            <Banner />
            <WhyWork />
            <div className="bg-black px-[80px] py-[55px] flex">
                <JobCard />
            </div>
        </div>
    )
}
