import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Casestudy.css';
import Homepage from '../HomePage/Homepagetmp';
// import CaseStudyCard from './CaseStudyCard';
// import  Manufacturing  from '../image/manufacturing.jpeg'
import image from '../image/manufacturing.jpeg'

const Casestudy = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
        title: "Manufacturing Industry: Streamlining Supply Chains",
        client: "A leading automotive parts manufacturer",
        challenge: "The client faced delays and inefficiencies in their supply chain, which impacted production timelines and customer deliveries. They needed a reliable logistics partner to streamline their operations and ensure timely delivery of critical components.",
        solution: "We implemented a near just-in-time (JIT) import delivery system that aligned perfectly with the client’s production schedule. By optimizing transportation routes and utilizing our extensive network of carriers, we reduced lead times and improved delivery accuracy. Additionally, our real-time tracking system provided the client with full visibility of their shipments, allowing for better inventory management.",
        results: [
            "20% reduction in transportation costs",
            "30% improvement in on-time deliveries",
            "Enhanced production efficiency and customer satisfaction"
        ],
        image: {image}
    },
    // Add other case studies here in the same format
];

const CaseStudyCard = ({ caseStudy }) => {
  return (
      <div className="case-study-card">
          <div className="case-study-image">
              <img src={caseStudy.image} alt={caseStudy.title} />
          </div>
          <div className="case-study-content">
              <h2 className="case-study-title">{caseStudy.title}</h2>
              <h3 className="case-study-client">Client: {caseStudy.client}</h3>
              <p className="case-study-challenge"><strong>Challenge:</strong> {caseStudy.challenge}</p>
              <p className="case-study-solution"><strong>Solution:</strong> {caseStudy.solution}</p>
              <ul className="case-study-results">
                  {caseStudy.results.map((result, index) => (
                      <li key={index}>{result}</li>
                  ))}
              </ul>
          </div>
      </div>
  );
};
  return (
    <Homepage>
    <div className="case-study-page">
            <h1 className="page-title">Delivering Success Across Industries</h1>
            <p className="page-intro">
                At Ease My Shipping, we take pride in our ability to provide tailored transportation and freight forwarding solutions that meet the unique challenges of different industries. Here are some examples of how we've helped businesses achieve their logistics goals.
            </p>
            <div className="case-studies-grid">
                {caseStudies.map((caseStudy, index) => (
                    <CaseStudyCard key={index} caseStudy={caseStudy} />
                ))}
            </div>
        </div>
    </Homepage>
  );
};

export default Casestudy;
