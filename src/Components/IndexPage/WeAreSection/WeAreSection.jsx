import React, { useEffect } from 'react'
import './WeAreSection.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WeAreSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <div className='WeAreSection-wrapper'>
            <div className="we-are-body">
                <div className="we-r-conatiner"data-aos='fade-right'>
                    <h1>We Are</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg">
                            <div className="we-are-card" data-aos='fade-up'>
                               <img src="/Images/Img 6.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="we-are-card we-are-card-2" data-aos='fade-up'>
                               <img src="/Images/Img 7.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="we-are-card " data-aos='fade-up'>
                               <img src="/Images/Img 8.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="we-are-card we-are-card-2" data-aos='fade-up'>
                               <img src="/Images/Img 9.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="we-are-card" data-aos='fade-up'>
                               <img src="/Images/Img 10.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" we-r-conatiner-2"data-aos='fade-left'>
                    <h1>First Logic</h1>
                </div>
            </div>
        </div>
    )
}

export default WeAreSection