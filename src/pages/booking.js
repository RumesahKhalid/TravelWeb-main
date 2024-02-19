import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import BookingPage from '../components/Booking/BookingPage';
import Footer from '../components/Footer/footer';
import BlogImg from '../assets/blog.jpg';

const Booking = () => {
  return (
    <div>
       <Navbar/>
       <Header pName="header-mid"
       Image={BlogImg}
       title="Blog"
       btnClass="hide"
      />
      <BookingPage/>
      <Footer/>
    </div>
  )
}

export default Booking;