import React, { useState, useEffect } from 'react';
import './form.css';
import flightImage1 from '../../assets/flightImage1.jpg';
import flightImage2 from '../../assets/flightImage2.jpg';
import flightImage3 from '../../assets/flightImage3.jpg';

const BookingForm = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [flightImage1, flightImage2, flightImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="booking-form">
        <h2>Flight Booking</h2>
        <div className="form-group">
          <label htmlFor="departure">Departure</label>
          <input type="text" id="departure" placeholder="Enter departure country" />
        </div>
        <div className="form-group">
          <label htmlFor="arrival">Arrival</label>
          <input type="text" id="arrival" placeholder="Enter arrival country" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers</label>
          <select id="passengers">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className="search-btn">Search Flights</button>
      </div>
      <div className="card">
        <img src={images[currentImageIndex]} alt={`Flight ${currentImageIndex + 1}`} />
      </div>
    </div>
  );
}

export default BookingForm;
