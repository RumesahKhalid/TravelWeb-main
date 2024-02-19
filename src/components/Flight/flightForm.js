import React from 'react';
import './form.css';

const BookingForm = () => {
  return (
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
  );
}

export default BookingForm;
