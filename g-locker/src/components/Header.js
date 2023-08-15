import React, { useEffect } from 'react'
import './Header.css';
import Searchbar from '../components/Searchbar'
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai'


function Header({clicked, handleClick}) {

    const isSlideshow = window.location.pathname === '/pictures';

    // useEffect(() => {
    // }, [clicked])


  return (
    <div>
      {
        !isSlideshow && (
          <div className='header'>
          <div id= "menu" className={clicked? 'hide':''} onClick={handleClick}>
                {
                  (<AiIcons.AiOutlineMenu id="bar" className="menu-Icon"></AiIcons.AiOutlineMenu>)
                }
        </div>
          <div className='header-welcome'>
            <FcIcons.FcUnlock/>
            <p>G-LOCKER</p>
          </div>
          <Searchbar placeholder='Search'/>
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
