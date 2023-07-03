import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Featured from '../pages/Featured'
import Home from '../pages/Home'
import NewReleases from '../pages/NewReleases'
import Trending from '../pages/Trending'


function Main() {
  return (
    <div className='main'>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/newReleases' element={<NewReleases/>}/>
                <Route path='/featured' element={<Featured/>}/>
                <Route path='/trending' element={<Trending/>}/>
                <Route path='/trending' element={<Trending/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Main
