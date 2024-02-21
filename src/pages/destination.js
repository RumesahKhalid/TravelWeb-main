import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import BlogImg from '../assets/blog.jpg';

const Destination = () => {
  return (
    <div>
       <Navbar/>
       <Header pName="header-mid"
       Image={BlogImg}
       title="Blog"
       btnClass="hide"
       />
       <Footer/>
    </div>
  )
}

export default Destination;