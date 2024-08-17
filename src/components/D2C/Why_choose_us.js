import React from 'react';
import './Why_choose_us.css';
import { useInView } from 'react-intersection-observer';
import why_choose_use_image from '../image/why_choose_use_image.jpg'

const Why_choose_us = () => {
  const { ref: sectionRef1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: sectionRef2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: sectionRef3, inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: sectionRef4, inView: inView4 } = useInView({ triggerOnce: false });
  const { ref: sectionRef5, inView: inView5 } = useInView({ triggerOnce: false });
  const [imgRef, imgInView] = useInView({ triggerOnce: false });

  return (
    <div className="export-needs-container">
      <div className="text-section">
        <div ref={sectionRef1} className={`text-block ${inView1 ? 'fade-in' : ''}`}>
          <h2>1. Global Reach</h2>
          <p>
            With a robust network of partners and carriers, we offer export services to virtually any destination worldwide. Whether you're targeting established markets or emerging economies, we have the expertise and connections to get your products where they need to go.
          </p>
        </div>
        <div ref={sectionRef2} className={`text-block ${inView2 ? 'fade-in' : ''}`}>
          <h2>2. Expertise in International Trade</h2>
          <p>
            Exporting goods requires a deep understanding of international trade regulations, shipping methods, and market-specific challenges. Our team has years of experience in global logistics, ensuring that your exports are handled with the highest level of professionalism and care.
          </p>
        </div>
        <div ref={sectionRef3} className={`text-block ${inView3 ? 'fade-in' : ''}`}>
          <h2>3. Customized Solutions</h2>
          <p>
            Every business is unique, and so are its export needs. We work closely with you to develop customized logistics solutions that align with your business goals, budget, and timeline. Whether you're a small business exporting for the first time or a large corporation with complex requirements, we provide tailored services to meet your needs.
          </p>
        </div>
        <div ref={sectionRef4} className={`text-block ${inView4 ? 'fade-in' : ''}`}>
          <h2>4. Real-Time Tracking and Transparency</h2>
          <p>
            Stay informed with our advanced tracking systems. We provide real-time updates on the status of your shipments, allowing you to monitor the entire export process from departure to arrival. Our transparent reporting ensures you always know where your goods are and when they will reach their destination.
          </p>
        </div>
        <div ref={sectionRef5} className={`text-block ${inView5 ? 'fade-in' : ''}`}>
          <h2>5. Competitive Pricing</h2>
          <p>
            We offer competitive rates without compromising on quality. Our pricing is transparent, with no hidden fees, and we work with you to find cost-effective solutions that fit your budget while delivering top-notch service.
          </p>
        </div>
      </div>
      <div ref={imgRef} className={`image-section ${imgInView ? 'fade-in' : ''}`}>
        <img src={why_choose_use_image} alt="Export Services" />
      </div>
    </div>
  );
};

export default Why_choose_us;
