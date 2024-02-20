import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header1';
import HomeVideo from '../assets/video.mp4';
import Destination from '../components/Destination/destination';
import Trip from '../components/Trip/trip';
import Footer from '../components/Footer/footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header 
        pName="header"
        video={HomeVideo} 
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
