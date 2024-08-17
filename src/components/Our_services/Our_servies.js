import React from 'react';
import './Our_services.css';

const Our_Services = () => {
  return (
    <div className="our-services-container">
      <h1>Our Services</h1>
      <div className="service-item">
        <h2>Courier Services</h2>
        <p>
          Fast and reliable delivery for your documents and small parcels. We ensure timely and safe delivery to your doorstep. We also help you open direct accounts with our international courier partners i.e. DHL, Aramex and Xpress Bees and domestic partners Bluedart, Movin to enable quicker services.
        </p>
      </div>
      <div className="service-item">
        <h2>Air Freight</h2>
        <p>
          When time is of the essence, our air freight services offer quick and efficient transportation of your goods, no matter the distance.
        </p>
      </div>
      <div className="service-item">
        <h2>Sea Freight</h2>
        <p>
          For larger shipments, our sea freight services provide cost-effective solutions with comprehensive tracking and handling.
        </p>
      </div>
      <div className="service-item">
        <h2>Domestic B2B and B2C Services</h2>
        <p>
          All sorts of domestic logistics services are also offered by us including B2C, D2C and B2B.
        </p>
      </div>
    </div>
  );
};

export default Our_Services;
