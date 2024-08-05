import React from 'react';
import './Brand_section.css';
// import leftArrow from './path/to/left-arrow.png'; // Path to your left arrow image
// import rightArrow from './path/to/right-arrow.png'; // Path to your right arrow image
import brand1 from '../image/brand1.jpg'; // Path to your brand images
import brand2 from '../image/brand2.jpg'
// ...import other brand images

const BrandsSection = () => {
  return (
    <div className="brands-section">
      <h2>Brands that trust us</h2>
      <div className="brands-container">
        {/* <img src={leftArrow} className="arrow left-arrow" alt="Previous" /> */}
        <div className="brands-logos">
          <img src={brand1} alt="Brand 1" />
          <img src={brand2} alt="Brand 2" />
          {/* <img src={brand3} alt="Brand 3" /> */}
          {/* Add other brand logos */}
        </div>
        {/* <img src={rightArrow} className="arrow right-arrow" alt="Next" /> */}
      </div>
      <a href="#" className="view-more">View More</a>
    </div>
  );
};

export default BrandsSection;
