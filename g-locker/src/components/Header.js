import React from 'react'
import './Header.css';
import Searchbar from '../components/Searchbar'


function Header() {

    const isSlideshow = window.location.pathname === '/pictures';

  return (
    <div>
      {
        !isSlideshow && (
          <div className='header'>
          <div className='welcome'>G-LOCKER</div>
          <div className='search-bar'>
            <Searchbar placeholder='Search'/>
          </div>
          <div className='buttons'>
            <button className='login-btn'>Login</button>
            <button className='signin-btn'>Sign In</button>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Header
