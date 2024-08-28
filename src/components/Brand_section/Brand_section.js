import React from 'react';
import './Brand_section.css';
import brand1 from '../image/Syncotts-logo.png'; 
import brand2 from '../image/TT-LIMITED-LOGO.png';
import M_J_International from '../image/Original on Transparent.webp';
import biba from '../image/BIBA.png';
import semco_infratech from '../image/semco_infratech.png';
import Agarwal_Packers_And_Movers_Limited from '../image/Agarwal_Packers_And_Movers_Limited.png';
import stag from '../image/stag.png';
import kailash_rug_industry from '../image/kailash_rug_industry.png'
import cls from '../image/cls.png'

const BrandsSection = () => {
  const logos = [
    brand1, brand2, M_J_International, biba, ,
    Agarwal_Packers_And_Movers_Limited, 
  ];
  const logosLine2 = [
    stag, kailash_rug_industry,  semco_infratech, cls
  ];
  return (
    <div className="brands-section">
      <h2>BRAND THAT TRUST US</h2>
      <div className="brands-container">
        {/* Line 1: Scrolls Left to Right */}
        <div className="scrolling-logos scroll-left">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Brand ${index + 1}`} />
          ))}
          {/* Duplicate logos for continuous scrolling */}
          
          {logosLine2.map((logo, index) => (
            <img key={`dup2-${index}`} src={logo} alt={`Brand ${index + 1}`} />
          ))}
        </div>

        {/* Line 2: Scrolls Right to Left */}
        <div className="scrolling-logos scroll-right">
          {logosLine2.map((logo, index) => (
            <img key={index} src={logo} alt={`Brand ${index + 1}`} />
          ))}
          {/* Duplicate logos for continuous scrolling */}
          {logos.map((logo, index) => (
            <img key={`dup-${index}`} src={logo} alt={`Brand ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
