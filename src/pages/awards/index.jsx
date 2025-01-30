import React from 'react'
import Banner from './banner'
import AwardSection from './AwardSection'
import useAwards from './useAwards'
import Quote from './Quote'

export default function Awards() {
    const { awardContent } = useAwards()
    console.log(awardContent)
    return (
        <div>
            <Banner />
            <div className="divide-y divide-gray-400 px-[16px] md:px-[80px] bg-white">
                {awardContent.map((item, index) => <AwardSection key={index} image={item.image} title={item.title} date={item.date} desc={item.desc} brandImg={item.brandImg} />)}
            </div>
            <Quote />
        </div>
    )
}
