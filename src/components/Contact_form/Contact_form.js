import React from 'react';
import './Contact_form.css';
import { FaUser, FaPhone, FaBuilding, FaEnvelope, FaClipboardList } from 'react-icons/fa';

const Contact_form = () => {
  return (
    <div className="contact-form-containe">
      <h1 >Give Your Brand The Easy My Shipping Edge</h1>
      <p>
        Create a winning edge over your competition by scaling up your brand with our expertise in the field of distribution, warehousing, and logistics. Get in touch with us now!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label>
            <FaUser className="icon" />
            <input type="text" placeholder="Name" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaPhone className="icon" />
            <input type="text" placeholder="Phone Number" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaBuilding className="icon" />
            <input type="text" placeholder="Company Name" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Business Email Address" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaClipboardList className="icon" />
            <input type="text" placeholder="Product Category" required />
          </label>
        </div>
        <div className="form-group recaptcha">
          <div className="g-recaptcha" data-sitekey="your_site_key"></div>
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact_form;
