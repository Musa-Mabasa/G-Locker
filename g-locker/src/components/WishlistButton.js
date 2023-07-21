import React from 'react'
import './WishlistButton.css'
import * as FaIcons from 'react-icons/fa'

function WishlistButton() {
  return (
    <div className='wishlist-box'>
      <button className='wishlist-btn'>
        <FaIcons.FaPlus/>
         Wishlist
      </button>
    </div>
  )
}

export default WishlistButton
