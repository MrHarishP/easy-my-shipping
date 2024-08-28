import React from 'react';
import Navbar from '../Navbar/Navbar';
import Truck from '../truck_landing_page/Truck';
import About from '../About/About';
import Brand_section from '../Brand_section/Brand_section';
import Why_us from '../why_section/Why_us';
import Contact_form from '../Contact_form/Contact_form';
import Footer from '../Footer/Footer';
import Our_services from '../Our_services/Our_servies'
import FAQ from '../FAQ_section/FAQ'
// import Segment from './components/Segment/Segment'

export default function Homepage({ children }) {
  
  return (
    <>
      <Navbar />
      {children ? (
        children
      ) : (
        <>
          <Truck />
          <About />
          <Brand_section />
          <Why_us />
          <Our_services/>
          <FAQ/>
          {/* <Segment/> */}
        </>
      )}
      <Contact_form />
      <Footer />
    </>
  );
}
