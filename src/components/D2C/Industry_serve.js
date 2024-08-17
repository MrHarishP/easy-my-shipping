import React from 'react';
import './Industry_serve.css';
import industry_serve from '../image/Industry_serve.jpg'
import { useInView } from 'react-intersection-observer';

const Industry_serve = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: false });
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [ref6, inView6] = useInView({ triggerOnce: false });
  const [imgRef, imgInView] = useInView({ triggerOnce: false });

  return (
    <div className="industries-container">
      <div className="text-section">
        <h2 ref={headerRef} className={`header ${headerInView ? 'fade-in' : ''}`}>Industries We Serve</h2>
        <div ref={ref1} className={`text-content ${inView1 ? 'fade-in' : ''}`}>
          <p>We specialize in export logistics for a variety of industries, including:</p>
        </div>
        <div ref={ref2} className={`text-content ${inView2 ? 'fade-in' : ''}`}>
          <ul>
            <li>Manufacturing and Industrial Goods</li>
          </ul>
        </div>
        <div ref={ref3} className={`text-content ${inView3 ? 'fade-in' : ''}`}>
          <ul>
            <li>Agriculture and Food Products</li>
          </ul>
        </div>
        <div ref={ref4} className={`text-content ${inView4 ? 'fade-in' : ''}`}>
          <ul>
            <li>Consumer Goods</li>
          </ul>
        </div>
        <div ref={ref5} className={`text-content ${inView5 ? 'fade-in' : ''}`}>
          <ul>
            <li>Pharmaceuticals and Healthcare</li>
          </ul>
        </div>
        <div ref={ref6} className={`text-content ${inView6 ? 'fade-in' : ''}`}>
          <ul>
            <li>Technology and Electronics</li>
            <li>Automotive</li>
          </ul>
        </div>
      </div>
      <div ref={imgRef} className={`image-section ${imgInView ? 'fade-in' : ''}`}>
        <img src={industry_serve} alt="Industries We Serve" />
      </div>
    </div>
  );
};

export default Industry_serve;
