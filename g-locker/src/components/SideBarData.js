import React from 'react'
import * as AiIcons from 'react-icons/ai';

export const SideBarData = [
    {
        title: 'Home',
        icon: <AiIcons.AiFillHome/>,
        link: '/'
    },
    {
        title: 'New Releases',
        icon: <AiIcons.AiFillPlusSquare/>,
        link: '/newReleases'
    },
    {
        title: 'Featured',
        icon: <AiIcons.AiFillStar/>,
        link: '/featured'
    },
    {
        title: 'Trending',
        icon: <AiIcons.AiFillFire/>,
        link: '/trending'
    },
    {
        title: 'Genre',
        icon: <AiIcons.AiFillTags/>,
        link: '/genre'
    },
    {
        title: 'Platform',
        icon: <AiIcons.AiFillPlayCircle/>,
        link: '/platform'
    },
]


