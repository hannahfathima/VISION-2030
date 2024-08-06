import React, { useEffect } from 'react'
import './FifthSection.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const FifthSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="fifth-section-wrapper">
      <div className="fifth-section-body">
        <div className="container-fluid">
          <div className="row fifth-row">
            <div className="col-lg-6">
              <div className="fifth-left-section" data-aos='fade-right'>
                <div className="left-section-details">
                  <h1> lorem ipsum dolor sit amet consectetur adipiscing elit.</h1>
                  <p>lorem ipsum dolor sit amet</p>
                </div>
                <div className="fifth-left-img">
                  <img src="/Images/Img 4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="fifth-right-section"  data-aos='fade-left'> 
              <img src="/Images/Img 5.jpg" alt="" />
            </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthSection