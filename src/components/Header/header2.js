import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './header.css';

const Header = (props) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        loop: true,
        autoplay: {
          delay: 5000, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Disable autoplay on user interaction
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }, []);

  return (
    <div className={props.pName}>
      <div ref={swiperRef} className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={props.Image} alt="Image 0" />
          </div>
          <div className="swiper-slide">
            <img src={props.Image1} alt="Image 1" />
          </div>
          <div className="swiper-slide">
            <img src={props.Image2} alt="Image 2" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className='header-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div> 
    </div>
  );
}

export default Header;
