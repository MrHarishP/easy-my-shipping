// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import About_us from '../image/img-1.png'
// import './style.css'; // Import your custom CSS
// import './responsive.css';
// import 'jquery.mCustomScrollbar.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css';


const App = () => {
  

  return (
    <>
    
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 about_main">
              <h1 className="about_text">About <span style={{ color: '#f7566e' }}>Us</span></h1>
              <p className="dummy_text">Inxpress provides comprehensive warehousing, logistics, and supply chain solutions for businesses of all sizes, including large enterprises, mid-market SMEs, and emerging D2C brands. We offer scalable, multi-client, and dedicated fulfillment centers with flexible pricing models like pay-per-use or cost-plus to meet your business needs. Brands can partner with Inexpress by selecting from our wide range of services and technology solutions. </p>
              <div className="read_bt"><a href="#">Read More</a></div>
            </div>
            <div className="col-sm-8">
              <div><img src={About_us} alt="About Us" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">Copyright 2019 All Right Reserved By.
            <a href="https://html.design"> Free html Templates</a> Distributed By
            <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>
      </div> */}
    </>
  );
}

export default App;
