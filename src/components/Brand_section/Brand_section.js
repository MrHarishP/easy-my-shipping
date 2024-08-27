import React from 'react';
import './Brand_section.css';
// import leftArrow from './path/to/left-arrow.png'; // Path to your left arrow image
// import rightArrow from './path/to/right-arrow.png'; // Path to your right arrow image
import brand1 from '../image/Syncotts-logo.png'; // Path to your brand images
import brand2 from '../image/TT-LIMITED-LOGO.png'
import M_J_International from '../image/Original on Transparent.webp'
import biba from '../image/BIBA.png' 
import semco_infratech from '../image/semco_infratech.png'
import Agarwal_Packers_And_Movers_Limited from '../image/Agarwal_Packers_And_Movers_Limited.png'
import stag from '../image/stag.png'
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
          <img src={M_J_International} alt="Brand 3" />
          <img src={biba} alt="Brand 3" />
          <img src={semco_infratech} alt="Brand 3" />
          <img src={Agarwal_Packers_And_Movers_Limited} alt="Brand 3" />
          <img src={stag} alt="Brand 3" />
          <img src={Agarwal_Packers_And_Movers_Limited} alt="Brand 3" />
          <img src={Agarwal_Packers_And_Movers_Limited} alt="Brand 3" />
          <img src={Agarwal_Packers_And_Movers_Limited} alt="Brand 3" />
          {/* Add other brand logos */}
        </div>
        {/* <img src={rightArrow} className="arrow right-arrow" alt="Next" /> */}
      </div>
      
    </div>
  );
};

export default BrandsSection;
