import React from 'react'
// import awardImg from '@/assets/images/about/awards/award.png'
import LinkWithArrow from '@/components/ui/common/LinkWithArrow';
export default function AwardsSection() {
    return (
        <div className='px-[80px]'>
            <h4>Awards</h4>
            <div className=" flex gap-5 justify-between">
                <img src={awardImg} />
                <img src={awardImg} />
                <img src={awardImg} />
                <img src={awardImg} />
                <img src={awardImg} />
            </div>
            <LinkWithArrow text="View All Awards" href="#" />
        </div>
    )
}
