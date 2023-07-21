import React from 'react'
import * as AiIcons from 'react-icons/ai';

export const SideBarData = [
    {
        title: 'Home',
        icon: <AiIcons.AiFillHome/>,
        link: '/',
        color: '#186fbc'
    },
    {
        title: 'New Releases',
        icon: <AiIcons.AiFillPlusSquare/>,
        link: '/newReleases',
        color: 'orange',
    },
    {
        title: 'Featured',
        icon: <AiIcons.AiFillStar/>,
        link: '/featured',
        color: 'rgb(156, 32, 32)',
    },
    {
        title: 'Trending',
        icon: <AiIcons.AiFillFire/>,
        link: '/trending',
        color: 'green',
    },
    {
        title: 'Genre',
        icon: <AiIcons.AiFillTags/>,
        link: '/genre',
        color: 'indigo',
    },
    {
        title: 'Platform',
        icon: <AiIcons.AiFillPlayCircle/>,
        link: '/platform',
        color: 'rgb(103, 103, 16)',
    },
]


