import React from 'react'
import './Rating.css'
import *  as HiIcons from "react-icons/hi2";

function Rating({rating}) {
  return (
    <div className='rating-box'>
      <div id='rating-icon'>
        {rating >=60 ? <HiIcons.HiFaceSmile/> : <HiIcons.HiFaceFrown/>}
        
      </div>
      <div className='rating-details'>
        <div className='rating-title'>
            <p>
                Rating
            </p>
        </div>
        <div className='rating'>
            <p>
                {rating}%
            </p>
        </div>
      </div>
      

    </div>
  )
}

export default Rating
