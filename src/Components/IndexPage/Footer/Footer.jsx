import React, { useState, useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <div className='footer-wrapper'>
            <div className="footer-sub-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        {/* Existing Footer Content */}
                        <div className="col-lg-4">
                            <div className="footer-cardds">
                                <div className="flit-logo">
                                    <img src="/Images/FLIT Logo Png.png" alt="" />
                                </div>
                                <div className='heading-foooter'><Link to="">Location</Link></div>
                                <div><p>KP Arcade, Near Tharayil Bus Stand,<br /> Bypass Road, Perinthalmanna <br /> Kerala, India - 679322</p></div>
                                <div className='footer-a'><Link to="tel">+91 751022776</Link></div>
                                <div  className='footer-a'><Link to="tel"> +91 4933 226766 </Link></div>
                                <div  className='footer-a'> <Link to="mailto:hello@firstlogicinstitute.com"> hello@firstlogicinstitute.com</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-cardds-2">
                                <div className='heading-foooter'><p>Navigations</p>
                                    <div><Link to="">Home</Link></div>
                                    <div><Link to=""> About </Link></div>
                                    <div><Link to=""> Contact </Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-cardds-3">
                                <div className="sociel-icons">
                                    <Link to=""><img src="/Images/Icon Banner 1.png" alt="" /></Link>
                                    <Link to=""><img src="/Images/Icon Banner 2.png" alt="" /></Link>
                                    <Link to=""><img src="/Images/Icon Banner 3.png" alt="" /></Link>
                                    <Link to=""><img src="/Images/Icon Banner 4.png" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-last-div">
                    <p>© 2024 First Logic Meta Lab PVT LTD. All Rights Reserved</p>
                </div>
                <button
                className="scroll-to-top"
                onClick={scrollTop}
                style={{ display: showScroll ? 'flex' : 'none' }}>
                <FaCircleArrowUp className='FaCircleArrowUp' />
            </button>
            </div>
     
        </div>
    );
}

export default Footer;
