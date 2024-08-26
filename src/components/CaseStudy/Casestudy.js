import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Casestudy.css';
import Homepage from '../HomePage/Homepagetmp';
// import CaseStudyCard from './CaseStudyCard';
// import  Manufacturing  from '../image/manufacturing.jpeg'
import streamlined_supply_chain from '../image/streamlined_supply_chain.jpg'
import Last_Mile_Delivery_Solution from '../image/Last_Mile_Delivery_Solution.jpg'
import Safe_Compliant_Transport from '../image/Safe_Compliant_Transport.jpg'
import technology_and_electronics from '../image/technology_and_electronics.jpg'
import Food_Logistics_Image from '../image/Food_Logistics_Image.jpg'
import Automotive_Supply_Chain_Image from '../image/Automotive_Supply_Chain_Image.jpg'
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
          image: streamlined_supply_chain
      },
      {
        title: "Retail and E-commerce: Enhancing Last-Mile Delivery",
        client: "A fast-growing online fashion retailer",
        challenge: "The retailer was experiencing rapid growth but struggled with Export transit time challenges that affected customer satisfaction. They required a logistics partner capable of handling high-volume shipments while ensuring timely and accurate deliveries to customers across the country.",
        solution: "We designed a scalable delivery solution that integrated seamlessly with the retailer’s existing ways of working. By leveraging our network of distribution centers we minimized transit times. We also introduced flexible delivery options, including same-day and next-day delivery, to meet the expectations of the retailer’s customers.",
        results: [
            "95% on-time delivery rate",
            "15% increase in customer satisfaction",
            "Scalable solution to accommodate peak seasons and promotional events"
        ],
        image: Last_Mile_Delivery_Solution
    },
    {
        title: ". Pharmaceutical and Healthcare: Ensuring Safe and Compliant Transport",
        client: "A multinational pharmaceutical company",
        challenge: "The client needed to transport temperature-sensitive vaccines and medications across multiple regions, adhering to strict regulatory requirements. Maintaining product integrity and compliance with international standards was crucial.",
        solution: "We provided a specialized cold chain logistics solution, utilizing temperature-controlled containers and monitoring systems to maintain the required conditions throughout the journey. Our team managed all regulatory documentation and compliance checks, ensuring that the shipments met the stringent requirements of various countries.",
        results: [
            "100% compliance with international pharmaceutical regulations",
            "Zero product loss due to temperature excursions",
            "Successful and timely delivery of critical healthcare products to global destinations"
        ],
        image: Safe_Compliant_Transport
    },
    {
        title: "Technology and Electronics: Managing Complex, High-Value Shipments",
        client: "A global electronics manufacturer",
        challenge: "The client needed to transport high-value electronics, including sensitive components, to multiple international markets. Ensuring the safety of the products and minimizing transit times were top priorities.",
        solution: "We developed a secure and efficient freight forwarding strategy that included specialized packaging, secure transport options, and expedited customs clearance. Our team coordinated closely with the client to schedule shipments in line with production timelines, reducing storage costs and ensuring the products reached their destinations swiftly.",
        results: [
            "25% reduction in transit times",
            "Zero incidents of product damage or loss",
            "Streamlined customs clearance process in multiple countries"
        ],
        image:technology_and_electronics
    },
    {
        title: "Food and Beverage: Supporting Growth with Scalable Logistics",
        client: "A regional organic food producer",
        challenge: "The client’s business was expanding rapidly, and they needed a logistics partner capable of scaling with their growth. They required reliable transportation and storage solutions to handle perishable goods and meet the increasing demand from retailers.",
        solution: "We provided a comprehensive logistics solution that included temperature-controlled warehousing, efficient inventory management, and fast, reliable transportation to retailers and distribution centers. Our flexible approach allowed us to scale services as the client’s business grew, ensuring they could meet market demand without compromising product quality.",
        results: [
            "40% increase in distribution capacity",
            "Improved shelf life of perishable products due to optimized cold storage",
            "Seamless scalability to support ongoing business growth"
        ],
        image:Food_Logistics_Image
    },
    {
        title: "Automotive Industry: Accelerating Global Supply Chains",
        client: "A major automotive OEM (Original Equipment Manufacturer",
        challenge: "The client required a reliable logistics partner to manage the global supply chain for their assembly plants located across multiple continents. They faced challenges with inconsistent delivery times and high transportation costs, which affected their production schedules.",
        solution: "We developed a comprehensive global logistics strategy that included multi-modal transportation (air, sea, and road), strategically placed consolidation hubs, and real-time supply chain visibility tools. By optimizing routes and consolidating shipments, we reduced transit times and costs significantly.",
        results: [
            "15% reduction in overall transportation costs",
            "25% faster delivery times to assembly plants",
            "Enhanced supply chain resilience and flexibility"
        ],
        image: Automotive_Supply_Chain_Image
    },
      // Add other case studies here in the same format
    ];

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div className="case-study-card">
    <div className="case-study-card-content">
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
