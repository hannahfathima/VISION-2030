import React, { useEffect } from 'react'
import './OurAim.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';  
const OurAim = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='our-aim-wrapper'>
      <div className="aim-sub-body">
        <h1 data-aos='fade-up'>Our Aim</h1>

        <div className="container-fluid">
          <div className="row g-0 our-aim-row"data-aos='fade-up'>
            <div className="col-lg-6">
              <div className="aim-left-card">
                <h1>Global Collaboration and Growth</h1>
                <p>We believe in the power of collaboration. By 2030, we aim to foster partnerships with organizations, governments, and communities worldwide to drive collective growth and innovation. Our global network will be a testament to the power of working together towards common goals.</p><p>Technology should enhance the human experience. We are dedicated to creating solutions that are intuitive, accessible, and user-friendly. By focusing on the needs and experiences of people, we ensure that our innovations make a meaningful impact on lives around the globe.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aim-right-card">
                <img src="/Images/Img 3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OurAim
