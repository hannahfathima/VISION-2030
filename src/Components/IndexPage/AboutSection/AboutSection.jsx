import React, { useEffect } from 'react'
import './AboutSection.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';  
const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='about-sec-wrapper'>
      <div className="abount-section-body">
        <div className="conatiner-fluid">
          <div className="row g-0 about-row">
            <div className="col-lg-5">
              <div className="about-left-card" data-aos = 'fade-right'>
                <h1>Know About Vision 2030</h1>
                <p>By 2030, we envision a world where technology is seamlessly integrated into every aspect of life, enhancing experiences, solving complex challenges, and opening up new horizons. Our mission is to pioneer this future through relentless innovation and a dedication to excellence.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-right-card" data-aos = 'fade-left'>
                <div className="image-containers">
                  <img src="/Images/Img 2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
