import React, { useState } from 'react';
// import React from 'react'
import './Navbar.css';
import logo from '../image/ease_my_shipping_logo.png'
// import user from '../image/user-icon.png'
// import search from '../image/search-icon.png'
// import Fulfilment from '../Fullfilment/Fulfilment';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };


// function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo} alt="Ease My Shipping Logo" className="navbar-logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="Fulfilment" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Solution
            
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href ='/fulfilment' onClick={toggleDropdown}>FULFILLMENT </a>
            {/* {dropdownOpen && (
            <div className="dropdown-content">
              <Fulfilment />
            </div>
          )} */}
          {/* </li>
            <li><a className="dropdown-item" href="#">LOGISTICS</a></li>
            <li><a className="dropdown-item" href="#">TECHNOLOGY</a></li>
          </ul>
        </li> */} 
         {/* <li className="nav-item">
          <a className="nav-link" href="Fulfilment">Services Offered</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/domestic">Domestic</a></li>
            <li><a className="dropdown-item" href="/Import">Import</a></li>
            <li><a className="dropdown-item" href="/Export">Export</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="segment">Segment</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="Clients">CLIENT</a></li>
            <li><a className="dropdown-item" href="Casestudy">CASE STUDY </a></li>
            <li><a className="dropdown-item" href="#">HOW WE WORK</a></li>
            {/* <li><a className="dropdown-item" href="#">EASY MY SHIPPING FULFILLMENT NETWORK</a></li> */}
            <li><a className="dropdown-item" href="CareerOpportunities">CAREER OPPORTUNITIES </a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href=" Rate calculator">Ratecalculator</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
// }
export default Navbar
