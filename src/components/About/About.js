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
              <p className="dummy_text">At Ease My Shipping, we are dedicated to making your logistics simple and efficient. Whether you need courier services, air freight, or sea freight, our goal is to streamline the shipping process and provide you with peace of mind. Let us handle the logistics while you focus on what matters most to you!!! </p>
              <div className="read_bt"><a href="contact_form">No More</a></div>
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
