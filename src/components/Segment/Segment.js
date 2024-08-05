import React from 'react'
import './Segment.css'
// import Homepage from '../HomePage/Homepagetmp'
import truck_img from '../image/plane1.jpg'
import book from '../image/books.jpg'
import cosmatics from '../image/cosmatics.jpg'
import appreals from '../image/appreals.jpg'
import Homepage from '../HomePage/Homepagetmp'

const Segment = () => {
  return (
    <Homepage>
         <div className="segment-container">
      <div className="segment">
        <img src={cosmatics} className="segment-image" alt="Truck" />
        <div className="segment-content">
          {/* <h2 className="segment-title">Truck Title</h2> */}
          {/* <p className="segment-description">
            This is a description of the truck. It includes some information about the truck's features and benefits.
          </p> */}
          <button className="segment-button">Cosmatics</button>
        </div>
      </div>
      <div className="segment">
        <img src={book} className="segment-image" alt="book" />
        <div className="segment-content">
          {/* <h2 className="segment-title">Books</h2> */}
          {/* <p className="segment-description">
            This is a description of the truck. It includes some information about the truck's features and benefits.
          </p> */}
          <button className="segment-button">Books</button>
        </div>
      </div>
      <div className="segment">
        <img src={appreals} className="segment-image" alt="Truck" />
        <div className="segment-content">
          {/* <h2 className="segment-title">Truck Title</h2> */}
          {/* <p className="segment-description">
            This is a description of the truck. It includes some information about the truck's features and benefits.
          </p> */}
          <button className="segment-button">Appreals</button>
        </div>
      </div>
    </div>
    <div className="segment-containe">
      <div className="segment">
        <img src={truck_img} className="segment-image" alt="Truck" />
        <div className="segment-content">
          <h2 className="segment-title">Truck Title</h2>
          {/* <p className="segment-description">
            This is a description of the truck. It includes some information about the truck's features and benefits.
          </p> */}
          <button className="segment-button">Learn More</button>
        </div>
      </div>
      <div className="segment">
        <img src={truck_img} className="segment-image" alt="Truck" />
        <div className="segment-content">
          <h2 className="segment-title">Truck Title</h2>
          {/* <p className="segment-description">
            This is a description of the truck. It includes some information about the truck's features and benefits.
          </p> */}
          <button className="segment-button">Learn More</button>
        </div>
      </div>
      <div className="segment">
        <img src={truck_img} className="segment-image" alt="Truck" />
        <div className="segment-content">
          <h2 className="segment-title">Truck Title</h2>
          {/* <p className="segment-description">
            This is a description of the truck. It includes some information about the truck's features and benefits.
          </p> */}
          <button className="segment-button">Learn More</button>
        </div>
      </div>
        <div className='trusted'>
        <p className='trusted-description'>We are trusted by 75+ brands across industries to manage their supply chain efficiently!!</p>
        </div>
    </div>
    </Homepage>
  )
}

export default Segment
