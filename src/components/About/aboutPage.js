import React from 'react';
import Price from '../../assets/customer.png';
import AboutDesImg from '../../assets/aboutDes.jpg';
import './aboutPage.css';

const AboutPage = () => {
  return (
    <div className='about'>
      <h1>Why Choose Us</h1>
      <p>These popular destinations have a lot to offer</p>
      <div className='aboutCard'>
        <div className='cards'>
          <div className='image-about'>
            <img src={Price} alt='price'/>
          </div>
          <h4>Best Price Guarantee</h4>
          <p>Book with confidence knowing you're getting the best deal. Our Best Price Guarantee ensures that you'll always find the lowest prices on our website. If you find a lower rate elsewhere within 24 hours of booking, we'll match it and refund you the difference.</p>        
        </div>
        <div className='cards'>
          <div className='image-about'>
             <img src={Price} alt='price'/>
          </div>
         <h4>Easy & Quick Booking</h4>
          <p>Book with confidence knowing you're getting the best deal. Our Best Price Guarantee ensures that you'll always find the lowest prices on our website. If you find a lower rate elsewhere within 24 hours of booking, we'll match it and refund you the difference.</p>
        </div>
        <div className='cards'>
          <div className='image-about'>
            <img src={Price} alt='price'/>
           </div>
          <h4>Customer Care 24/7</h4>
          <p>Book with confidence knowing you're getting the best deal. Our Best Price Guarantee ensures that you'll always find the lowest prices on our website. If you find a lower rate elsewhere within 24 hours of booking, we'll match it and refund you the difference.</p>
        </div>
      </div>
      <div className='about-des'>
         <div className='about-des-text'>
           <h2>About JourneyJoy</h2>
           <p className='para1'>These popular destinations have a lot to offer</p>
           <p className='para2'>London is a shining example of a metropolis at the highest peak of modernity and boasts an economy and cultural diversity that’s the envy of other global superpowers.</p>
           <p className='para3'>Take the opportunity to acquaint yourself with its fascinating history chronicled by institutions like the British Museum as well as see how far it has come by simply riding the Tube and passing by celebrated landmarks like Buckingham Palace, Westminster Abbey, and marvels like Big Ben, the London Eye, and the Tower Bridge.</p>
         </div>
         <div className='about-des-img'>
             <img src={AboutDesImg} alt='about-des'/>
           </div>
      </div>
    </div>
  )
}

export default AboutPage;