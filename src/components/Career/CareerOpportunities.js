import React from 'react';
import './CareerOpportunities.css';
import Homepage from '../HomePage/Homepagetmp';

const CareerOpportunities = () => {
  return (
    <Homepage>
    <div className="career-container">
      <h2 className="career-heading">Career Opportunities</h2>
      <div className="career-cards">
        <div className="career-card">
          <h3 className="job-title">Software Engineer</h3>
          <p className="job-location">Location: New York, NY</p>
          <p className="job-description">
            Join our dynamic team to develop innovative software solutions. You'll work with the latest technologies to deliver cutting-edge applications.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="career-card">
          <h3 className="job-title">Data Analyst</h3>
          <p className="job-location">Location: San Francisco, CA</p>
          <p className="job-description">
            Analyze data to provide actionable insights that drive business decisions. You'll work with big data tools and collaborate with cross-functional teams.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="career-card">
          <h3 className="job-title">Product Manager</h3>
          <p className="job-location">Location: Remote</p>
          <p className="job-description">
            Lead product development from ideation to launch. You'll be responsible for defining the product vision and strategy while working with various teams.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
        {/* Add more job cards as needed */}
      </div>
    </div>
    </Homepage>
  );
}

export default CareerOpportunities;
