import React from 'react';
import './Fulfilment.css';
import Homepage from '../HomePage/Homepagetmp.js';
import Fulimage from '../image/india_map.png'
import team_icon from '../image/team.png'
import '@fortawesome/fontawesome-free/css/all.css';

const Fulfilment = () => {
  const services = [
    { title: "B2B & B2C Fulfilment", icon: {team_icon} },
    { title: "Dedicated Warehousing", icon: "path/to/icon2.png" },
    { title: "Frozen, Refrigerated & Chilled Warehouse Capacity", icon: "path/to/icon3.png" },
    { title: "Cross Docking", icon: "path/to/icon4.png" },
    { title: "Forward Stocking", icon: "path/to/icon5.png" },
    { title: "Retail Distribution", icon: "path/to/icon6.png" },
    { title: "Custom Packaging", icon: "path/to/icon7.png" },
    { title: "Kitting & Other VAS", icon: "path/to/icon8.png" },
    { title: "Freight Transportation (FTL, LTL)", icon: "path/to/icon9.png" },
    { title: "Pallet In, Pallet Out", icon: "path/to/icon10.png" },
    { title: "Control Tower Dashboard", icon: "path/to/icon11.png" },
    { title: "ERP, Sales Channels & WMS Integrations", icon: "path/to/icon12.png" },
  ];
  return (
    <Homepage>
      <div className="Fulfilment-section">
        <div className="Fulfilment-content">
          <h1>Enterprise Grade Warehousing Infrastructure</h1>
          <p>
            Get access to the best-in-class warehousing network, infrastructure, and fulfilment services with Prozo to fulfill your B2B, B2C, and D2C demand!
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="Fulfilment-image">
          <img src={Fulimage} alt="Transportation" />
        </div>
      </div>
      <div className="services-offered">
        <h2>Fulfilment Services Offered</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
    </Homepage>
  );
};

export default Fulfilment;
