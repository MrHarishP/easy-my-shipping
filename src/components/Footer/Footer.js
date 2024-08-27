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
            <p className="footer_text">At Ease My Shipping, we are dedicated to making your logistics simple and efficient. Whether you need courier services, air freight, or sea freight, our goal is to streamline the shipping process and provide you with peace of mind. Let us handle the logistics while you focus on what matters most to you!!!</p>
          </div>
          <div className="footer_section">
            <h2 className="footer_title">Quick Links</h2>
            <ul className="footer_links">
            <li><a href="/Domestic">Domestic</a></li>
              <li><a href="/Export">Export</a></li>
              <li><a href="/Import">Import</a></li>
              <li><a href="/Contact_us">Contact us</a></li>
              <li><a href="/About_us">About us</a></li>
              
            </ul>
          </div>
          <div className="footer_section">
            <h2 className="footer_title">Contact Us</h2>
            <p className="footer_text">804, Paras Trinity, Golf course,Ext.Road,Gurgaon-122001, Haryana</p>
            <p className="footer_text">Phone: 9871454279</p>
            <p className="footer_text">Email: sales202.in@inxpress.com</p>
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
