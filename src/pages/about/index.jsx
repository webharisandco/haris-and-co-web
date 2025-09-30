import React from 'react'
import Banner from './Banner'
import AboutSection from './AboutSection'
import OurTeam from './OurTeam'
import DepartmentHead from './DepartmentHead'
import VisionarySection from './VisionarySection'
import LifeSection from './LifeSection'

export default function About() {
    return (
        <>
            <Banner />
            <AboutSection />
            <VisionarySection />
            <OurTeam />
            <DepartmentHead />
            {/* <BusinessHeads/> */}
            <LifeSection />
            {/* <AwardsSection /> */}
        </>
    )
}
