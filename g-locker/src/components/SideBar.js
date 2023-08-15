import React, { useEffect } from 'react'
import './SideBar.css';
import * as AiIcons from 'react-icons/ai'
import {SideBarData} from './SideBarData'
import { Link } from 'react-router-dom';
import * as FcIcons from 'react-icons/fc';


function SideBar({clicked, handleClick}) {
  const [activeItem, setActiveItem] = React.useState(1);
  const [activeSubItem, setActiveSubItem] = React.useState(1);

  const isSlideshow = window.location.pathname === '/pictures';

  
  return (
    <>
    {
      !isSlideshow && (
        <div className={`sidebar ${clicked ? 'active' : ''}`} id='res-sidebar'>
          <div className='sidebar-header'>
            <div id= "close" onClick={handleClick}>
                <AiIcons.AiOutlineClose id="close" className="menu-Icon"></AiIcons.AiOutlineClose>
            </div>
            <div className='welcome'>
              <FcIcons.FcUnlock/>
              <p>G-LOCKER</p>
            </div>
          </div>
            <ul className='sidebarList' >
                {SideBarData.map((item, index)=> {
                    return <div key={item.id}>
                              <Link
                              className={`row ${index === 0 ? 'original' : index === 1 ? 'orange' : index === 2 ? 'red' : index === 3 ? 'green' : index === 4 ? 'purple' : index === 5 ? 'yellow' : '' }`}
                              id={activeItem === item.id ? 'active' : ''}
                              to={item.link}
                              style={{textDecoration: 'none', backgroundColor: activeItem === item.id ? item.color : ''}}
                              onClick={() => setActiveItem(item.id)}
                              >
                                <div id='title'>{item.title}</div>
                                <div id='icon'>{item.icon}</div>
                              </Link>
                              {item.subNav && activeItem === item.id && (
                                <ul className='subMenuList'>
                                  {item.subNav.map((subItem, subIndex) => (
                                    <Link
                                      to={subItem.link}
                                      className='subMenuRow'
                                      id={window.location.pathname === subItem.link ? 'active' : ''}
                                      onClick={() => setActiveSubItem(subItem.id)}
                                    >
                                      <div id='icon' style={{color: activeSubItem === subItem.id ? item.color : ''}}>{subItem.icon}</div>
                                      <div id='title' style={{color: activeSubItem === subItem.id ? item.color : ''}}>{subItem.title}</div>
                                    </Link>
                                  ))}
                                </ul>
                  )}
                            </div>
                    
                })}
            </ul>
        </div>
    )}

    
    </>
  )
}

export default SideBar
