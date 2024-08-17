import React, { useState } from 'react';
import './FAQ.css'; 

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of services do you offer?",
      answer: "We offer a comprehensive range of logistics services, including transportation, warehousing, inventory management, supply chain consulting, customs brokerage, freight forwarding, and last-mile delivery. We tailor our services to meet the specific needs of each client."
    },
    {
      question: "How do you ensure the safety of my goods during transportation?",
      answer: "We prioritize the safety of your goods by utilizing high-quality packaging, secure handling procedures, and vehicles equipped with the latest safety technology. Additionally, our team is trained in best practices for handling various types of cargo, and we offer insurance options for added protection."
    },
    {
      question: "Can I track my shipments in real-time?",
      answer: "Yes, we provide real-time tracking for all shipments. Our advanced tracking system allows you to monitor the status and location of your goods throughout the entire journey. You can access this information through our online portal."
    },
    {
      question: "What areas do you serve?",
      answer: "We offer both domestic and international logistics services. Our global network allows us to manage shipments across multiple regions, ensuring timely delivery no matter where your goods need to go."
    },
    {
      question: "How do you handle customs clearance for international shipments?",
      answer: "Our experienced customs brokerage team manages all aspects of customs clearance, ensuring compliance with international regulations and minimizing delays. We handle the documentation, tariffs, and duties, so you can focus on your core business."
    },
    {
      question: "What are your pricing options?",
      answer: "Our pricing is customized based on the specific needs of each client, including the type of service, distance, volume, and any additional requirements. We offer competitive rates and flexible payment options. Contact us for a detailed quote tailored to your logistics needs."
    },
    {
      question: "How do you manage urgent or time-sensitive deliveries?",
      answer: "We offer expedited and express delivery services for urgent shipments. Our team is skilled in prioritizing time-sensitive deliveries and will work closely with you to ensure your goods arrive on schedule."
    },
    {
      question: "How can I request a quote or schedule a service?",
      answer: "You can request a quote or schedule a service by contacting us directly via phone, email, or through our website. Our team will gather the necessary information and provide you with a detailed proposal tailored to your logistics needs."
    }
  ];

  return (
    <div className='faq-container'>
      <h1>Frequently Asked Questions</h1>
      <div className='accordion'>
        {faqs.map((faq, index) => (
          <div key={index} className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
            >
              <div className='accordion-body'>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
