import React from 'react'
import { Outlet } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './Header'
import Featured from '../pages/Featured'
import Home from '../pages/Home'
import NewReleases from '../pages/NewReleases'
import Trending from '../pages/Trending'
import Slideshow from '../components/Slideshow'
import Genre from '../pages/Genre'
import Platform from '../pages/Platform'


function Main() {
  return (
    <div className='main'>
      <Header/>
      {/* <Outlet/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newReleases' element={<NewReleases/>}/>
        <Route path='/featured' element={<Featured/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/genre/action' element={<Genre genre='action'/>}/>
        <Route path='/genre/adventure' element={<Genre genre='adventure'/>}/>
        <Route path='/genre/indie' element={<Genre genre='indie'/>}/>
        <Route path='/genre/sports' element={<Genre genre='sports'/>}/>
        <Route path='/platform/pc' element={<Platform platform='PC'/>}/>
        <Route path='/platform/playstation' element={<Platform platform='Playstation'/>}/>
        <Route path='/platform/xbox' element={<Platform platform='Xbox'/>}/>
        <Route path='/pictures' element={<Slideshow/>}/>
    </Routes>
    </div>
  )
}

export default Main
