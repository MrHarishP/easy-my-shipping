import React from 'react';
import './D2C.css';
// import d2c from '../image/D2C-Banner-image.png'
import Why_choose_us from './Why_choose_us'
import Homepage from '../HomePage/Homepagetmp';
import image from '../image/Export.jpg'
import our_export_services from '../image/our_export_services.jpg'
import Industry_serve from './Industry_serve'
import { useInView } from 'react-intersection-observer';

const D2C = () => {
    const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [imgRef, imgInView] = useInView({ triggerOnce: false });
    return (
      <>

        <div className='d2c-container'>

      <Homepage>
          <div className="responsive-image-container">
            <img src={image} alt='Export Logistics Services' className="responsive-image" />
            <div className="overlay-text">
              <h1>Export Logistics Services</h1>
              <h2>Your Gateway to Global Markets</h2>
            </div>

            <button className="bottom-right-button">Get Started</button>
          </div>
          <div className="export-services-container">
            <div ref={imgRef} className={`image-section ${imgInView ? 'fade-in' : ''}`}>
              <img src={our_export_services} alt="Export Services" />
            </div>
            <div className="text-section">
              <h2>Our Export Logistics Services</h2>
              <div ref={ref1} className={`text-block ${inView1 ? 'fade-in' : ''}`}>
                <h3>1. Export Documentation and Compliance</h3>
                <p>
                  Navigating export regulations and documentation requirements can be complex. Our team of experts handles all necessary paperwork, including export declarations, certificates of origin, commercial invoices, and more. We ensure full compliance with international trade laws, reducing the risk of delays or penalties.
                </p>
              </div>
              <div ref={ref2} className={`text-block ${inView2 ? 'fade-in' : ''}`}>
                <h3>2. Freight Forwarding</h3>
                <p>
                  We offer reliable freight forwarding services tailored to your export needs. Whether you're shipping by sea or air, we manage the entire transportation process, from pick-up to delivery at the destination port. Our global network of carriers and strategic partnerships ensure timely and cost-effective delivery to any market.
                </p>
              </div>
              <div ref={ref3} className={`text-block ${inView3 ? 'fade-in' : ''}`}>
                <h3>3. Customs Clearance</h3>
                <p>
                  Efficient customs clearance is crucial for smooth export operations. Our customs experts work closely with local authorities in destination countries to ensure that your goods clear customs quickly and without complications. We handle all duties, taxes, and import regulations, so you can be confident that your products will reach their destination without delays.
                </p>
              </div>
              <div ref={ref4} className={`text-block ${inView4 ? 'fade-in' : ''}`}>
                <h3>4. Insurance and Risk Management</h3>
                <p>
                  Protect your exports against unforeseen events with our comprehensive cargo insurance options. We provide coverage tailored to the specific risks associated with international shipping, giving you peace of mind that your goods are protected from the moment they leave your facility until they reach the buyer.
                </p>
              </div>
            </div>
          </div>
          <Why_choose_us />
          <Industry_serve />
        </Homepage>
        </div>
        </>
    );
};

export default D2C;
