import React from 'react';
import BookingPage from './BookingPage';

const BookingDataPage = () => {
  const [bookingData, setBookingData] = useState(null);

  const handleBookNow = (data) => {
    setBookingData(data);
  };

  return (
    <div className='hotel-form'>
        <h1>Find your next stay</h1>
        <p>Search low prices on hotels, homes and much more... </p>
        <div className='Booking-data' >
           <BookingPage onClick={handleBookNow} />
           {bookingData && (
            <div className="booking-summary">
             <h2>Booking Summary</h2>
             <p>Check-in Date: {bookingData.checkInDate}</p>
             <p>Check-out Date: {bookingData.checkOutDate}</p>
             <p>Room Type: {bookingData.roomType}</p>
             <p>Number of Rooms: {bookingData.numRooms}</p>
             <p>Number of Guests: {bookingData.numGuests}</p>
            </div>
          )}
        </div> 
      </div> 
  )
}
export default BookingDataPage;