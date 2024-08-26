// src/components/RateCalculator.js

import React, { useState } from 'react';
import './Rate_calculator.css';

const Rate_calculator = () => {
  // Define pricing for different zones (per kg)
  const pricing = {
    '1': 10, // Zone 1
    '2': 15, // Zone 2
    '3': 20, // Zone 3
    '4': 25, // Zone 4
    '5': 10, // Zone 5
    '6': 15, // Zone 6
    '7': 20, // Zone 7
    '8': 25, // Zone 8
    '9': 10, // Zone 9
    '10': 15, // Zone 10
    
  };

  const [zone, setZone] = useState('');
  const [weight, setWeight] = useState('');
  const [rate, setRate] = useState(null);

  const calculateRate = () => {
    const zonePrice = pricing[zone] || 0; // Get the price for the selected zone
    const calculatedRate = zonePrice * weight; // Calculate the rate based on weight and zone
    setRate(calculatedRate);
  };

  return (
    <div className="container">
      <h1>Rate Calculator</h1>
      <form onSubmit={(e) => { e.preventDefault(); calculateRate(); }}>
        <label>
          Zone:
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          >
            <option value="">Select Zone</option>
            <option value="1">Zone 1</option>
            <option value="2">Zone 2</option>
            <option value="3">Zone 3</option>
            <option value="4">Zone 4</option>
          </select>
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="0"
            step="0.01"
          />
        </label>
        <button type="submit">Calculate Rate</button>
      </form>
      {rate !== null && (
        <div className="results">
          <h2>Rate</h2>
          <p>Calculated Rate: ${rate.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Rate_calculator;
