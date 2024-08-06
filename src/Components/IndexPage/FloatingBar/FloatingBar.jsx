import React from 'react';
import './FloatingBar.scss';

const FloatingBar = () => {
    return (
        <div className="floating-bar">
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
           <img src="/Images/Icon 1 - whatsapp.png" alt="" />
            </a>
            <a href="tel:your-phone-number">
           <img src="/Images/Icon 2 - call.png" alt="" />
            </a>
            <a href="mailto:your-email@example.com">
              <img src="/Images/Icon 3 - message.png" alt="" />
            </a>
        </div>
    );
}

export default FloatingBar;
