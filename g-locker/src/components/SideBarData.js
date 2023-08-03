import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

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
        subNav: [
            {
                title: 'Action',
                icon: <AiIcons.AiFillTags/>,
                link: '/genre/action',
            },
            {
                title: 'Adventure',
                icon: <AiIcons.AiFillTags/>,
                link: '/genre/adventure',
            },
            {
                title: 'RPG',
                icon: <AiIcons.AiFillTags/>,
                link: '/genre/rpg',
            },
            {
                title: 'Sports',
                icon: <AiIcons.AiFillTags/>,
                link: '/genre/sports',
            }
        ]
    },
    {
        title: 'Platform',
        icon: <AiIcons.AiFillPlayCircle/>,
        link: '/platform',
        color: 'rgb(103, 103, 16)',
        subNav: [
            {
                title: 'PC',
                icon: <BsIcons.BsMicrosoft/>,
                link: '/platform/pc',
            },
            {
                title: 'Playstation',
                icon: <BsIcons.BsPlaystation/>,
                link: '/platform/playstation',
            },
            {
                title: 'Xbox',
                icon: <BsIcons.BsXbox/>,
                link: '/platform/xbox',
            }
        ]
    },
]


