import React from 'react'
import Hero from '../components/Hero'
import MissionVision from '../components/MissionVision'
import ActivitiesComponent from '../components/ActivitiesComponent'
import Gallery from '../components/Gallery'
import JobsComponent from '../components/JobsComponent'

const Home = () => {
    return (
        <div>
            <Hero />
            <MissionVision />
            <ActivitiesComponent />
            <JobsComponent/>
            <Gallery />
        </div>
    )
}

export default Home