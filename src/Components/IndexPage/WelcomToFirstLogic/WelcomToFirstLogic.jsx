import React, { useEffect } from 'react'
import './WelcomToFirstLogic.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';  
const WelcomToFirstLogic = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='welcome-section-wrapper'>
      <div className="welcome-sub-body">
        <h1 data-aos = 'fade-up'>Welcome to First Logic</h1>

        <p data-aos = 'fade-up'>At First Logic, our vision for 2030 is to be at the forefront of technological innovation, driving transformation and empowering businesses worldwide. As we look towards the next decade, we are committed to creating a future where technology not only supports but also inspires new possibilities.</p>
        <div className="read-more">
        <button data-aos = 'fade-up'>Read More</button>

        </div>
      </div>
    </div>
  )
}

export default WelcomToFirstLogic
