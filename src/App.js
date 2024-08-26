import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import Navbar from './components/Navbar/Navbar'
// import About from './components/About/About'
// import Footer from './components/Footer/Footer'
// import Truck from './components/truck_landing_page/Truck'
// import Brand_section from './components/Brand_section/Brand_section'
// import Why_us from './components/why_section/Why_us'
// import Contact_form from './components/Contact_form/Contact_form'
// import Fulfilment from './components/Fullfilment/Fulfilment'
import Homepage from './components/HomePage/Homepagetmp'; 
import Segment from './components/Segment/Segment';
// import How_we_work from './components/How-we-work/How_we_work'
import Domestic from './components/Domastics/Domestic'
import Import from './components/Import/Import'
import D2C from './components/D2C/D2C'
import Comercial_model from './components/Comercial_model/Comercial_model'
import Testimonial from './components/Clients/Testimonial'
import Casestudy from './components/CaseStudy/Casestudy'
// import Rate_calculator from './components/Rate_calculator/Rate_calculator'
function App() {
  return (
 <Router>
      <Routes>
      {/* <Route path="/" element={Homepage} /> */}
      <Route exact path="/" Component={ Homepage}/>
      {/* <Route path="/fulfilment" Component={ Fulfilment}/> */}
      <Route path = "/segment" Component={Segment}/>
      {/* <Route path='/How_we_work' Component={How_we_work}/> */}
      {/* <Route path='/B2B' Component={Domestic}/> */}
      <Route path='/Domestic' Component={Domestic}/>
      <Route path = '/Import' Component={Import}/>
      <Route path = '/d2c' Component={D2C}/>
      <Route path = '/comercial model' Component={Comercial_model}/>
      <Route path='/Clients' Component={Testimonial}/>
      {/* <Route path='/casestudy' Component={Casestudy}/> */}
      <Route path="/Casestudy" element={<Casestudy />} />
      {/* <Route path='Rate calculator' Component={Rate_calculator}/> */}
      <Route/>
          {/* <Rate_calculater/> */}
        </Routes>
        </Router>
        
       /* <Navbar/>  */
       /* <Truck/>
       <About/>
       <Brand_section/>
       <Why_us/>
       <Contact_form/>
       <Footer/> */
  )
}

export default App
