import React from 'react'
import '../App.css';
import {AiIcons} from 'react-icons/ai';
import {SideBarData} from './SideBarData'


function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        G-Locker
      </div>
        <ul className='sidebarList'>
            {SideBarData.map((item, index)=> {
                return <li key={index} className='row' 
                id={window.location.pathname == item.link ? 'active' : ''}
                onClick={()=> window.location.pathname = item.link}>
                    <div id='icon'>{item.icon}</div>{" "}
                    <div id='title'>{item.title}</div>

                </li>
            })}
        </ul>
    </div>
  )
}

export default SideBar
