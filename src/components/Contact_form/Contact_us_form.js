import React, { useState } from 'react';
import './Contact_us_form.css';
import { FaUser, FaPhone, FaBuilding, FaEnvelope, FaClipboardList } from 'react-icons/fa';
import Homepage from '../HomePage/Homepagetmp';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Contact_form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          phone: '',
          company: '',
          email: '',
          category: ''
        });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Navbar>
    
    <div className="contact-form-container">
      <h1 className='head1'>Give Your Brand The Ease My Shipping Edge</h1>
      {/* <p>
        Create a winning edge over your competition by scaling up your brand with our expertise in the field of distribution, warehousing, and logistics. Get in touch with us now!
      </p> */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaPhone className="icon" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaBuilding className="icon" />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Business Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <FaClipboardList className="icon" />
            <input
              type="text"
              name="category"
              placeholder="Product Category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group recaptcha">
          <div className="g-recaptcha" data-sitekey="your_site_key"></div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </Navbar>
       
  );
};

export default Contact_form;
