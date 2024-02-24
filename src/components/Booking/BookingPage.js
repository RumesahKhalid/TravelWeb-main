import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';

const HotelBookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomType, setRoomType] = useState('');
  const [numRooms, setNumRooms] = useState(1);
  const [numGuests, setNumGuests] = useState(1);
  const [summary, setSummary] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [thankYouModal, setThankYouModal] = useState(false);

  const handleAddBooking = () => {
    const bookingSummary = `Check-in Date: ${checkInDate}\nCheck-out Date: ${checkOutDate}\nRoom Type: ${roomType}\nNumber of Rooms: ${numRooms}\nNumber of Guests: ${numGuests}`;
    setSummary(bookingSummary);
    setShowModal(true);
  };

  const handleOk = () => {
    setThankYouModal(true);
    setShowModal(false);
  };

  const handleClear = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
    setRoomType('');
    setNumRooms(1);
    setNumGuests(1);
    setSummary('');
    setShowModal(false);
  };

  return (
  <div className='booking'>
     <h2>Add Booking Information</h2>
    <div className="booking-container">
      <label>Check-in Date:</label>
      <DatePicker className='bookingdata' selected={checkInDate} onChange={date => setCheckInDate(date)} />

      <label>Check-out Date:</label>
      <DatePicker className='bookingdata' selected={checkOutDate} onChange={date => setCheckOutDate(date)} />

      <label>Room Type:</label>
      <select className='bookingdata' value={roomType} onChange={e => setRoomType(e.target.value)}>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>

      <label>Number of Rooms:</label>
      <input type="number" value={numRooms} onChange={e => setNumRooms(e.target.value)} />

      <label>Number of Guests:</label>
      <input type="number" value={numGuests} onChange={e => setNumGuests(e.target.value)} />

      <button onClick={handleAddBooking}>Add Booking</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Booking Summary</h2>
            <p>{summary}</p>
            <button onClick={handleOk}>Ok</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      )}

      {thankYouModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Thankyou for Booking!</h3>
            <button onClick={() => setThankYouModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  </div> 
  
  );
};

export default HotelBookingForm;
