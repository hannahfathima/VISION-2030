import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from  './Hero/Hero'
import WelcomToFirstLogic from './WelcomToFirstLogic/WelcomToFirstLogic'
import AboutSection from './AboutSection/AboutSection'
import OurAim from './OurAim/OurAim'
import FifthSection from './FifthSection/FifthSection'
import WeAreSection from './WeAreSection/WeAreSection'
import Footer from './Footer/Footer'
import FloatingBar from './FloatingBar/FloatingBar'


const IndexPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <WelcomToFirstLogic/>
      <AboutSection/>
      <OurAim/>
      <FifthSection/>
      <WeAreSection/>
      <FloatingBar/>
      <Footer/>
    </div>
  )
}

export default IndexPage
