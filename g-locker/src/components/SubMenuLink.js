import React from 'react'
import 'SubMenuLink.css';
import {SideBarData} from './SideBarData'


function SubMenuLink({link}) {
  return (
    <div>
        <ul className='subMenuList' >
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
  )
}

export default SubMenuLink
