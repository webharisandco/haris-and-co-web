import React from 'react'
import Banner from './Banner'
import JobCard from './JobCard'
import WhyWork from './WhyWork'

export default function Careers() {
    return (
        <div>
            <Banner />
            <WhyWork />
            <div className="bg-black px-[80px] py-[55px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:gap-6">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}
