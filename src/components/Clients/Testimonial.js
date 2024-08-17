import React from 'react';
import './Testimonial.css';
import image from '../image/sample.jpeg';
import Homepage from '../HomePage/Homepagetmp';

const Testimonial = () => {
  return (
    <Homepage>
      <div className="testimonial-containe">
        <div className="testimonial-top">
          <img src={image} alt="Kunal Popat" className="testimonial-image" />
          <div className="testimonial-content">
            <h2 className="testimonial-title">
              R for Rabbit is a D2C brand focused on baby’s development and safety to make parenting easy & joyful.
            </h2>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              We at R for Rabbit were managing our operations in-house when we chanced upon Prozo. The Prozo team moved
              very fast and was able to understand our pain-points, especially handling of our large & bulky products.
            </p>
            <p className="testimonial-text">
              We started with warehousing & freight operations from one location. Having seen the team's understanding
              of our operations, their tech capabilities and seamless handling of all our queries, we decided to expand
              our business with them to newer geographies. Prozo’s in-house warehousing, freight and tech-stack has
              ensured we have 100% visibility on our operations.
            </p>
            <p className="testimonial-text">
              Prozo is now our pan-India, multi-channel supply chain partner and we look forward to expanding to newer
              geographies with them!
            </p>
            <p className="testimonial-author">
              – Kunal Popat <br />
              <span className="testimonial-role">Founder, <span className="testimonial-company">R for Rabbit</span></span>
            </p>
          </div>
        </div>
      </div>

      <div className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-content">
            <h2 className="testimonial-title">
              Chai Point is an omni-channel beverage brand that brings a perfectly brewed cup of chai that is made with fresh and natural ingredients.
            </h2>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              We are impressed by how responsive Prozo’s team is to promptly respond to our queries and fulfill all urgent requests. With Prozo, we have been able to ensure best in class service to our stores and partners. They have a rigorous project management process, ensuring all SOPs are followed to the best-in-class SLAs.
            </p>
            <p className="testimonial-text">
              Prozo is serving us for B2B warehousing in NCR and we’d want to work with them in more territories going forward. Their central operations team has been quite proactive in ensuring the FC-level SLAs and TATs are adhered to. Overall, we have had a great experience working with Prozo and its team.
            </p>
            <p className="testimonial-author">
              – Sourabh Jain <br />
              <span className="testimonial-role">Director Supply Chain Management, <span className="testimonial-company">Chai Point</span></span>
            </p>
          </div>
          <img src={image} alt="Sourabh Jain" className="testimonial-image" />
        </div>
      </div>

      <div className="testimonial-container">
        <div className="testimonial">
          <img src={image} alt="Supply Chain Team" className="testimonial-image" />
          <div className="testimonial-content">
            <h2 className="testimonial-title">
              EkAnek offers 3 products: (a) Foxy – India’s first beauty social commerce app for both men & women b) Boho Botanist – d2c bodycare brand and c) DTC Platform – enabling beauty & grooming brands in setting up their own d2c e-commerce capabilities
            </h2>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              Timely delivery within an aggressively competitive ETA in all parts of the country is a must in e-commerce today. Any drop in adherence leads to higher RTO, cancellation, and drop in retention. For the supply chain team, it is imperative to work with a partner who is committed to these aggressive targets and agile and flexible to work together to create customer delight. We moved our supply chain from a traditional 3PL partner to Prozo in 2021 and are delighted to have made this choice early in our scale-up journey. Prozo stands out in the market with their tech-first approach and are committed bunch of folks who want to win in the market with all their clients.
            </p>
            <p className="testimonial-text">
              They have worked with us as a partner in this thick of things and won our trust to be our default choice for any warehousing services. Our experience with Prozo has been great. Prozo team has been able to meet and exceed our target SLAs for inwards, outwards and returns. We have found them to be very prompt in helping us solve our customer issues by providing order level packing video feeds, wherever needed. Prozo has recently been entrusted with handling part of our freight as well. We find Prozo’s on-ground team as well as senior management very responsive to our business needs. I can say we have an exceptional supply chain team in Prozo!
            </p>
            <p className="testimonial-author">
              – Supply Chain Team <br />
              <span className="testimonial-role">EkAnek</span>
            </p>
          </div>
        </div>
      </div>
    </Homepage>
  );
};

export default Testimonial;
