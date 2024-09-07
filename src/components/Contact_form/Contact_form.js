import React, { useState, useRef } from 'react';
import './Contact_form.css';
import { FaUser, FaPhone, FaBuilding, FaEnvelope, FaClipboardList } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact_form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    category: ''
  });

  // Initialize emailJS
  emailjs.init('FzEIxAhpYWKLu_uYT'); // Replace with your actual public key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m5tmddl', 'template_z8hyhga', form.current, 'ltgaiHK8mpW8QttCw')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("Form Submit successfully")
          setFormData({
            name: '',
            phone: '',
            company: '',
            email: '',
            category: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h1 className='head1'>CONTACT FOR MORE DETAILSS</h1>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
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
  );
};

export default Contact_form;
