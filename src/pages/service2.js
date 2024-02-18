import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Hotel from '../components/Hotels/hotel';
import Footer from '../components/Footer/footer';
import HotelImg from '../assets/adven1.jpg';




const Service2 = () => {
  return (
    <div>
      <Navbar/>
      <Header pName="header-mid"
      Image={HotelImg}
      title="Book your next trip"
      text="The time is now for it be okay to be great. People in this world shun people for being nice."
      btnClass="hide"
     />
     <Hotel/>
     <Footer/>
    </div>
  )
}

export default Service2;
