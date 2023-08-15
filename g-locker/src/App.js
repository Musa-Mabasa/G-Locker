import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import SideBar from './components/SideBar';
import Featured from './pages/Featured'
import Home from './pages/Home'
import NewReleases from './pages/NewReleases'
import Trending from './pages/Trending'
import Slideshow from './components/Slideshow'
import Header from './components/Header'

function App() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    console.log(clicked);
    setClicked(!clicked);
  };

  return (
    <Router>
      <div className='App'>
      <SkeletonTheme baseColor="#0d171f" highlightColor="#555555">
        <SideBar clicked={clicked} handleClick={handleClick}/>
        <Header clicked={clicked} handleClick={handleClick}/>
        <Main/>
     </SkeletonTheme>
     </div>
    
</Router>
  );
}

export default App;
