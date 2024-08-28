import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Domestic.css';
import Homepage from '../HomePage/Homepagetmp';
import retail_banner from '../image/retial-banner.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Domestic = () => {
  const reasons = [
    {
      title: "Speed and Efficiency",
      description: "We offer same-day, next-day, and standard delivery options, ensuring your shipments reach their destination as quickly as possible. Our optimized routing system ensures the fastest and most efficient delivery across the country."
    },
    {
      title: "Extensive Coverage",
      description: "With a vast network spanning every major city and region, we guarantee comprehensive coverage nationwide. No matter where your package needs to go, we’ve got it covered."
    },
    {
      title: "Real-Time Tracking",
      description: "Stay informed with our state-of-the-art tracking technology. Monitor your shipment’s journey in real-time, from pick-up to delivery, using our user-friendly online portal or mobile app."
    },
    {
      title: "Door-to-Door Convenience",
      description: "We offer convenient door-to-door service, picking up your parcel from your location and delivering it directly to the recipient's doorstep. You don’t need to step out—let us handle everything for you."
    },
    {
      title: "Secure and Safe Handling",
      description: "Your shipment’s safety is our top priority. We use secure packaging methods and handle each parcel with the utmost care, ensuring it arrives in perfect condition."
    },
    {
      title: "Flexible Shipping Options",
      description: "Whether you're a business shipping hundreds of parcels daily or an individual sending a one-off package, we offer flexible shipping options to suit your specific needs. Choose from standard, express, or customized solutions."
    },
    {
      title: "Competitive Pricing",
      description: "Our services are competitively priced to offer you the best value for your money. We provide transparent pricing with no hidden fees, ensuring that you know exactly what you're paying for."
    }
  ];

  // State to keep track of the clicked card
  const [clickedCard, setClickedCard] = useState(null);
  const [clickedRightCard, setClickedRightCard] = useState(null);

  // Function to handle the card click
  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };

  // Function to handle the right-side card click
  const handleRightCardClick = (index) => {
    setClickedRightCard(clickedRightCard === index ? null : index);
  };

  return (
    <Homepage>
      <div className="b2b-section">
        <div className="b2b-content">
          <h1>Swift and Reliable Nationwide Delivery</h1>
          <p>At Ease My Shipping, we are partners with Bluedart and Movin and we understand the importance of timely and reliable delivery within the country. Whether you're sending documents, parcels, or larger freight, our domestic logistics courier services are designed to meet your needs with precision and care.</p>
          <Link to="/Contact_us">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
        <div className="b2b-image">
          <img src={retail_banner} alt="B2B Illustration" />
        </div>
      </div>

      <div className="carousel-container">
        <h2>Why Choose Our Services?</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          dynamicHeight={true}
          swipeable={true}
        >
          {reasons.map((reason, index) => (
            <div key={index} className="carousel-slide">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="App">
        <div className="content">
          <div className="left-side">
            <h2>Specialized Services</h2>
            <div
              className={`card ${clickedCard === 0 ? 'rotated' : ''}`}
              onClick={() => handleCardClick(0)}
            >
              <h3>1. Document Courier</h3>
              <p>Send important documents with confidence. We offer secure and speedy delivery of documents, with options for same-day or next-day service.</p>
            </div>
            <div
              className={`card ${clickedCard === 1 ? 'rotated' : ''}`}
              onClick={() => handleCardClick(1)}
            >
              <h3>2. E-commerce Fulfillment</h3>
              <p>For online retailers, our logistics courier service seamlessly integrates with your operations, providing efficient order fulfillment and delivery to your customers.</p>
            </div>
            <div
              className={`card ${clickedCard === 2 ? 'rotated' : ''}`}
              onClick={() => handleCardClick(2)}
            >
              <h3>3. Bulk Shipment Solutions</h3>
              <p>For businesses needing to ship large volumes of goods, we offer bulk shipping solutions that are cost-effective and reliable. Our logistics experts will work with you to streamline the process and ensure timely delivery.</p>
            </div>
          </div>
          <div className="right-side">
            <h2>How It Works</h2>
            <div
              className={`card ${clickedRightCard === 0 ? 'rotated' : ''}`}
              onClick={() => handleRightCardClick(0)}
            >
              <h3>1. Schedule a Pickup</h3>
              <p>Easily schedule a pickup online, by phone, or through our app. Provide us with the necessary details, and we'll handle the rest.</p>
            </div>
            <div
              className={`card ${clickedRightCard === 1 ? 'rotated' : ''}`}
              onClick={() => handleRightCardClick(1)}
            >
              <h3>2. Track Your Shipment</h3>
              <p>Use our real-time tracking system to monitor your package’s journey. You’ll receive updates at every stage of the delivery process.</p>
            </div>
            <div
              className={`card ${clickedRightCard === 2 ? 'rotated' : ''}`}
              onClick={() => handleRightCardClick(2)}
            >
              <h3>3. Delivery Confirmation</h3>
              <p>Once delivered, you’ll receive a confirmation notification, ensuring peace of mind that your shipment has arrived safely.</p>
            </div>
            <div className="get-started-container">
      <h3>Get Started Today</h3>
      <p>
        Whether you're a business or an individual, Ease My Shipping is here to meet all your domestic courier needs. Experience the convenience, reliability, and efficiency of our services.
      </p>
      <p>
        Contact us today to learn more or to schedule your next delivery!
      </p>
      <Link to="/Contact_us">
      <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
          </div>
        </div>
      </div>
    </Homepage>
  );
};

export default Domestic;
