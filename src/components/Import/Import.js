import React from 'react';
import { Link } from 'react-router-dom';
import './Import.css'; // import the CSS file
import Homepage from '../HomePage/Homepagetmp';

import import_image_serve from '../image/import_industry_serve.png'

const public_url=process.env.REACT_APP_image_url



const B2C = () => {
    console.log("-->",public_url,process.env)
    const handleContactForm = () => {
        const Contact_form = document.getElementById('Contact_form');
        if (Contact_form) {
          Contact_form.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (        
        <Homepage>
       <div className="background-container">
      <div className="overlay-text">
        {/* Import Logistics Services */}
      </div>
      <Link to="/Contact_us">
      <button className="get-started-button" onClick={handleContactForm}>Get Started</button>
      </Link>
    </div>
    <div className="services-container">
      <h2 className="services-title">Our Import Logistics Services</h2>
      <div className="service">
        <h3>1. Customs Brokerage</h3>
        <p>
          Importing goods into any country requires adherence to strict customs regulations.
          Our experienced customs brokers handle all aspects of customs clearance, ensuring your
          shipments comply with local laws and minimizing the risk of delays or fines. We manage
          the paperwork, tariffs, duties, and coordinate with customs authorities on your behalf.
        </p>
      </div>
      <div className="service">
        <h3>2. Freight Forwarding</h3>
        <p>
          We offer reliable freight forwarding services tailored to your import needs. Whether by sea,
          air, or land, we coordinate the transportation of your goods from the point of origin to your
          desired destination. Our global network of carriers ensures timely and cost-effective delivery,
          regardless of the size or complexity of your shipment.
        </p>
      </div>
      <div className="service">
        <h3>3. Import Compliance Consulting</h3>
        <p>
          Navigating import regulations can be overwhelming. Our import compliance experts provide
          guidance on trade laws, tariffs, and documentation requirements, helping you avoid costly
          mistakes. We stay up-to-date on the latest regulations to ensure your import operations are
          always compliant.
        </p>
      </div>
      <div className="service">
        <h3>4. Insurance and Risk Management</h3>
        <p>
          Protect your valuable imports with our comprehensive cargo insurance options. We offer coverage
          tailored to the specific risks associated with international shipping, giving you peace of mind that
          your goods are protected from unforeseen events.
        </p>
      </div>
    </div>
    <div className="why-choose-us-container">
      <h2 className="section-title">Why Choose Us for Your Import Needs?</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Global Expertise</h3>
          <p>
            With years of experience in international logistics, our team has the knowledge and
            connections needed to handle imports from any part of the world.
          </p>
        </div>
        <div className="card">
          <h3>End-to-End Solutions</h3>
          <p>
            We provide a full spectrum of import logistics services, from initial consultation and planning to final delivery.
          </p>
        </div>
        <div className="card">
          <h3>Transparent and Competitive Pricing</h3>
          <p>
            We believe in offering value for money. Our pricing structure is transparent, with no hidden fees.
          </p>
        </div>
        <div className="card">
          <h3>Real-Time Tracking and Reporting</h3>
          <p>
            Stay informed with our advanced tracking systems. We provide real-time updates on the status of your shipments.
          </p>
        </div>
        <div className="card">
          <h3>Dedicated Customer Support</h3>
          <p>
            Our customer support team is here to assist you at every stage of the import process.
          </p>
        </div>
      </div>
    </div>
    <div className="industries-serve-container">
            <div className="text-left">
                <h2>Industries We Serve</h2>
                <p>We cater to a diverse range of industries</p>
            </div>
            <div className="image-right">
                <img src={import_image_serve} alt="Industries" className="industry-image" />
            </div>
        </div>
    <div className="import-confidence-container">
            <div className="text-left">
            <div className="get-started-container">
      <h3>Start Importing with Confidence</h3>
      <p>
      At Ease My Shipping, we make importing goods hassle-free and efficient. Whether you're importing for the first time or looking to streamline your existing operations, our team is here to provide expert guidance and reliable service every step of the way.      </p>
      
      
    </div>
     </div>


            <div className="text-right">
            <div className="get-started-container">
      <p>
        Contact us today to learn more or to schedule your next delivery!
      </p>
      <Link to="/Contact_us">
      <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
   </div>
        </div>
       
        </Homepage> 
  );
};

export default B2C;
