import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden'; // Toggle scroll on menu open/close
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''; 
    };
  }, []);

  const MenuIcon = () => (
    <div className="menu-icon" onClick={toggleMenu}>
      {isMenuOpen ? (
     <RxCross1 className='RxCross1' />

      ) : (
        // Hamburger icon (replace with your preferred icon library/SVG)
        <RxHamburgerMenu className='RxHamburgerMenu' />

      )}
    </div>
  );

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
          <MenuIcon />
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <Link className="navbar-lists" to="/">
              Home
            </Link>
            <Link className="navbar-lists" to="/about">
              About
            </Link>
            <Link className="navbar-lists" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
