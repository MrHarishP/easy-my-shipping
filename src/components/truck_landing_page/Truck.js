import React,  { useEffect, useState } from 'react'
import truck_img from '../image/landing_page.jpg'
import Typewriter from 'react-typewriter-effect';
import './Truck.css';

const Truck = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);
  
  const phrases = [
    { text: 'Import your business with Ease My Shipping', color: 'Red' }, // Red color
    { text: 'Export your business with Ease My Shipping', color: '#F5841A' }  // choose color as per your self
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting 
        ? currentPhrase.text.substring(0, text.length - 1)
        : currentPhrase.text.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase.text) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(50);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const currentPhrase = phrases[loopNum % phrases.length];

  return (
    <div className="truck-container">
    <img src={truck_img} className="img-responsive" alt="Truck" />
    <div className="search-bar-container">
      <input
        type="text"
        value={text}
        readOnly
        className="search-bar"
        style={{ color: currentPhrase.color }} // Apply the current phrase color
      />
    </div>
  </div>
  )
}

export default Truck
