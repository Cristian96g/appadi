import React from 'react'
import Hero from '../components/Hero'
import MissionVision from '../components/MissionVision'
import ActivitiesComponent from '../components/ActivitiesComponent'
import SocialMedia from '../components/SocialMedia'

const Home = () => {
    return (
        <div>
            <Hero />
            <MissionVision />
            <ActivitiesComponent />
            <SocialMedia />
        </div>
    )
}

export default Home