import React, { useEffect } from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';  
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    
    <div className='hero-main-wrapper'>
      <div className="hero-subbody">
        |<Navbar />

        <div className="hero-contents">
          <div className="hero-sociel-icon-container">
            <div className="sociel-left">
              <button data-aos = 'fade-right'>VISION 2030</button>
            </div>
            <div className="sociel-right" data-aos = 'fade-left'>
              <img src="/Images/Icon Banner 1.png" alt="" />
              <img src="/Images/Icon Banner 2.png" alt="" />
              <img src="/Images/Icon Banner 3.png" alt="" />
              <img src="/Images/Icon Banner 4.png" alt="" />
            </div>
          </div>
          <div className="hero-banner-img" data-aos = 'fade-left'>
            <img src="/Images/Img 1.jpg" alt="" />
          </div>

          <div className="banner-titles" data-aos = 'fade-up'>
            <h1>VISION 2030</h1>
            <h2>FIRST LOGIC INSTITUTE & <br /> FIRST LOGIC META LAB</h2>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
