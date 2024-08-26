import React from 'react';
import './About_us.css';
import Homepage from '../HomePage/Homepagetmp';
import About_us from '../image/About_us.jpg'

const About_Us = () => {
  return (
    <Homepage>
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
        At Ease My Shipping, we are dedicated to making your logistics simple and efficient. Whether you need courier services, air freight, or sea freight, our goal is to streamline the shipping process and provide you with peace of mind. Let us handle the logistics while you focus on what matters most to you!!!
        </p>
        <p className="about-us-mission">
          <strong>Our Mission:</strong> To empower businesses with innovative and reliable solutions, fostering growth and success in a competitive marketplace.
        </p>
        <p className="about-us-vision">
          <strong>Our Vision:</strong> To be the leading provider of cutting-edge solutions, setting the standard for excellence in our industry.
        </p>
      </div>
      <div className="about-us-image">
        <img src={About_us} alt="About Us" />
      </div>
    </div>
    </Homepage>
  );
};

export default About_Us;
