import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as LuIcons from 'react-icons/lu';
import * as MdIcons from 'react-icons/md';

export const SideBarData = [
    {
        id: 1,
        title: 'Home',
        icon: <AiIcons.AiFillHome/>,
        link: '/',
        color: '#186fbc'
    },
    {
        id: 2,
        title: 'New Releases',
        icon: <AiIcons.AiFillPlusSquare/>,
        link: '/newReleases',
        color: 'orange',
    },
    {
        id: 3,
        title: 'Featured',
        icon: <AiIcons.AiFillStar/>,
        link: '/featured',
        color: 'rgb(156, 32, 32)',
    },
    {
        id: 4,
        title: 'Trending',
        icon: <AiIcons.AiFillFire/>,
        link: '/trending',
        color: 'green',
    },
    {
        id: 5,
        title: 'Genre',
        icon: <AiIcons.AiFillTags/>,
        link: '/genre/action',
        color: 'indigo',
        subNav: [
            {
                id: 1,
                title: 'Action',
                icon: <AiIcons.AiOutlineFire/>,
                link: '/genre/action',
            },
            {
                id: 2,
                title: 'Adventure',
                icon: <LuIcons.LuMountain/>,
                link: '/genre/adventure',
            },
            {
                id: 3,
                title: 'Indie',
                icon: <LuIcons.LuSwords/>,
                link: '/genre/indie',
            },
            {
                id: 4,
                title: 'Sports',
                icon: <MdIcons.MdOutlineSportsTennis/>,
                link: '/genre/sports',
            }
        ]
    },
    {
        id: 6,
        title: 'Platform',
        icon: <AiIcons.AiFillPlayCircle/>,
        link: '/platform/pc',
        color: 'rgb(103, 103, 16)',
        subNav: [
            {
                id: 1,
                title: 'PC',
                icon: <BsIcons.BsMicrosoft/>,
                link: '/platform/pc',
            },
            {
                id: 2,
                title: 'Playstation',
                icon: <BsIcons.BsPlaystation/>,
                link: '/platform/playstation',
            },
            {
                id: 3,
                title: 'Xbox',
                icon: <BsIcons.BsXbox/>,
                link: '/platform/xbox',
            }
        ]
    },
]


