import React from 'react';
const HotelData = (props) => {
  const handleBookNow = () => {
    // Here you can pass the necessary booking information to the parent component
    // In this case, you might pass the hotel information along with the booking details
    // For simplicity, let's assume we're just passing the hotel name for now
    props.onBook(props.heading);
  };

  return (
    <div className='h-card'>
      <div className='h-image'>
        <img src={props.image} alt=''/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button className="book-button" onClick={handleBookNow}>Book Now</button>
    </div> 
  )
}

export default HotelData;