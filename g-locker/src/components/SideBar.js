import React,{useEffect} from 'react'
import './SideBar.css';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SideBarData} from './SideBarData'
import {NavLink, useLocation} from 'react-router-dom'


function SideBar() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  
  const isSlideshow = window.location.pathname === '/pictures';
  return (
    <>
    {
      !isSlideshow && (
        <div id='sidebar-container'>
        <div id= "menu" className={clicked? 'hide':''} onClick={handleClick}>
                {
                  (<AiIcons.AiOutlineMenu id="bar" className="menu-Icon"></AiIcons.AiOutlineMenu>)
                }
                
        </div>
        <div className={`sidebar ${clicked ? 'active' : ''}`} id='res-sidebar'>
          <div className='sidebar-header'>
            <div id= "close" onClick={handleClick}>
                <AiIcons.AiOutlineClose id="close" className="menu-Icon"></AiIcons.AiOutlineClose>
            </div>
            G-LOCKER
          </div>
            <ul className='sidebarList' >
                {SideBarData.map((item, index)=> {
                    return <li key={index}
                    className={`row ${index === 0 ? 'original' : index === 1 ? 'orange' : index === 2 ? 'red' : index === 3 ? 'green' : index === 4 ? 'purple' : index === 5 ? 'yellow' : '' }`}
                    id={window.location.pathname === item.link ? 'active' : ''}
                    onClick={()=> window.location.pathname = item.link}
                    style={{backgroundColor: window.location.pathname === item.link ? item.color : ''}}
                    >
                      <div id='title'>{item.title}</div>
                      <div id='icon'>{item.icon}</div>
                    </li>
                })}
            </ul>
        </div>
      </div>
    )}

    
    </>
  )
}

export default SideBar
