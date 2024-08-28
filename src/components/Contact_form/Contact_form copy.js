import React, { useState , useRef } from 'react';
import './Contact_form.css';
import { FaUser, FaPhone, FaBuilding, FaEnvelope, FaClipboardList } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Alert } from 'bootstrap';

const Contact_form = () => {
  const form = useRef();
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
    emailjs
      .sendForm('service_g7j4352', 'template_n0m1203', form.current, {
        publicKey: 'FzEIxAhpYWKLu_uYT',
      })
      .then(
        () => {
          alert('SUCCESS!');
          setFormData({
            name: '',
            phone: '',
            company: '',
            email: '',
            category: ''
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    

  };
  

  return (
    <div className="contact-form-container">
      <h1 className='head1'>Give Your Brand The Ease My Shipping Edge</h1>
      {/* <p>
        Create a winning edge over your competition by scaling up your brand with our expertise in the field of distribution, warehousing, and logistics. Get in touch with us now!
      </p> */}
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
      {/* <form ref={form} onSubmit={handleSubmit}> */}
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
