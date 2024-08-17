import React from 'react';
import './Comercial_model.css'; // Import the CSS file
import Homepage from '../HomePage/Homepagetmp';

const Comercial_model = () => {
  return (
    <Homepage>
    <section className="promo-section">
      <div className="text-container">
        <h1>Easy My Shipping Commercial Models</h1>
        <p>Easy My Shipping offers a variety of commercial models varying from cost-plus model to pay-per-use to suit your business scale and needs.</p>
        <a href="#" className="btn-get-started">Get Started</a>
      </div>
      <div className="image-container">
        <img src="path-to-your-image.png" alt="Commercial Models" />
      </div>
    </section>
    <section className="fulfillment-section">
      <h1>Fulfilment</h1>
      <div className="cards-container">
        <div className="card">
          <h2>01. Activity Based Commercials</h2>
          <ul>
            <li>✔ Unit-wise</li>
            <li>✔ Pallet-wise</li>
            <li>✔ Order-wise</li>
          </ul>
        </div>
        <div className="card">
          <h2>02. Cost Plus</h2>
          <ul>
            <li>✔ Cost plus management fee</li>
          </ul>
        </div>
      </div>
    </section>
    </Homepage>
  );
};

export default Comercial_model;
