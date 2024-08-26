import React from 'react';
import './Contact_us.css';
import Homepage from '../HomePage/Homepagetmp';
import Contact_Us from '../image/Contact_us.jpg'

const Contact_us = () => {
  return (
    <Homepage>
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">Contact Us</h2>
        <p className="about-us-description">
        804, Paras Trinity, Golf course, Ext.Road,Gurgaon-122001, Haryana
        </p>
        <p className="about-us-mission">
          <strong>Email:</strong> sales202.in@inxpress.com
        </p>
        <p className="about-us-vision">
          <strong>Mobile:</strong> +91 9871454279
        </p>
      </div>
      <div className="about-us-image">
        <img src={Contact_Us} alt="About Us" />
      </div>
    </div>
    </Homepage>
  );
};

export default Contact_us;
