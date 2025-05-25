import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutSection from '../components/AboutSection/AboutSection'
import AboutLinks from '../components/AboutLinks/AboutLinks'
import CoreValues from '../components/CoreValues/CoreValues' 
import VisionMission from '../components/VisionMission/VisionMission'
import Footer from '../components/Footer/Footer'

export default function Apropos() {
    return (
        <>
            <Navbar />
            <PageHeader />
            <AboutSection />
            <AboutLinks />
            <CoreValues /> 
            <VisionMission/>
            <Footer/>
            {/* 👈 Ajoute ce composant ici */}
        </>
    )
}
