import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import HomeImg from '../assets/bg.jpg';
import Destination from '../components/Destination/destination';
import Trip from '../components/Trip/trip';
import Footer from '../components/Footer/footer';


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Header pName="header"
      Image={HomeImg}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination."
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
     />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home; 