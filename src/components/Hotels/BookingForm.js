// BookingForm.js

import React, { useState } from 'react';

const BookingForm = ({ onBookNow }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numRooms, setNumRooms] = useState(1);
  const [numGuests, setNumGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare booking data
    const bookingData = {
      checkInDate,
      checkOutDate,
      roomType,
      numRooms,
      numGuests
    };
    // Pass booking data to parent component
    onBookNow(bookingData);
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="checkInDate">Check-in Date:</label>
        <input type="date" id="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />

        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input type="date" id="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />

        <label htmlFor="roomType">Room Type:</label>
        <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
          <option value="">Select Room Type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>

        <label htmlFor="numRooms">Number of Rooms:</label>
        <input type="number" id="numRooms" value={numRooms} min="1" onChange={(e) => setNumRooms(e.target.value)} required />

        <label htmlFor="numGuests">Number of Guests:</label>
        <input type="number" id="numGuests" value={numGuests} min="1" onChange={(e) => setNumGuests(e.target.value)} required />

        <button type="submit" className="book-button">Add</button>
      </form>
    </div>
  );
};

export default BookingForm;
