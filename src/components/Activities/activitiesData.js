import React from 'react';
import './activities.css'; // Importing CSS file

const BloggingData = (props) => {
  return (
    <div className='b-card'>
      <div className='b-card-inner'>
        <div className='b-card-front'>
          <div className='b-image'>
            <img src={props.image} alt=''/>
          </div>
          <h4>{props.heading}</h4>
        </div>
        <div className='b-card-back'>
          <h5>{props.text}</h5>
          <h4  style={{ color: 'green' }}>{props.price}</h4>
        </div>
      </div>
    </div> 
  )
}

export default BloggingData;
