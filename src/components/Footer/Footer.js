// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_section">
            <h2 className="footer_title">About Us</h2>
            <p className="footer_text">We provide comprehensive solutions for your warehousing, logistics, and supply chain needs. Partner with us to enhance your business operations.</p>
          </div>
          <div className="footer_section">
            <h2 className="footer_title">Quick Links</h2>
            <ul className="footer_links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="footer_section">
            <h2 className="footer_title">Contact Us</h2>
            <p className="footer_text">123 Main Street, Anytown, USA</p>
            <p className="footer_text">Phone: (123) 456-7890</p>
            <p className="footer_text">Email: info@example.com</p>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="footer_bottom_text">Copyright &copy; 2024 Easy My Shipping. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
