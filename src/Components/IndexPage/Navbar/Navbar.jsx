import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-main-wrapper ${isScrolled ? 'blurred' : ''}`}>
      <div className="navbar-sub-body">
        <div className="left-nav">
          <div className="flit-logo">
            <Link to="/">
              <img src="/Images/FLIT Logo Png.png" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="right-nav">
          <Link className='navbar-lists' to='/'>Home</Link>
          <Link className='navbar-lists' to='/about'>About</Link>
          <Link className='navbar-lists' to='/contact'>Contact Us</Link>
        </div>
      </div>
      <div className="mobile-nav-bar">
        <div className="bottom-navbarr">
          <div className="nav-bar-icons">
            <div className="about-icon">
              <a href="">    <FaUsers  className='FaUser' /></a>
              <p>About</p>
            </div>
            <div className="home-icon">
              <a href="/">       <HiHome className='HiHome' /></a>
              {/* <p>home</p> */}
            </div>
            <div className="contact-icon">
          <a href="">    <MdPhone className='FaUser' /></a>
              <p>Contact Us</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
