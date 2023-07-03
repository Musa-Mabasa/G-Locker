import React from 'react'
import '../components/Main.css'
import Searchbar from '../components/Searchbar'
import img from '../assets/GOW.png'
// import video from 'https://www.youtube.com/embed/EE-4GvjKcfs'
import {GameData} from '../components/GameData'


function Home() {
  var topGenres = GameData[0].genre.split(',');
  var topPlatforms = GameData[0].platform.split(',');
  return (
    <>
      <div className='header'>
        <div className='welcome'>Hello, John</div>
        <div className='search-bar'>
          <Searchbar placeholder='Search'/>
        </div>
      </div>
      <div></div>
      <div className='upper-panel'>
          <div className='topGame-image'>
            <img 
            src={img}
            />
          </div>
          <div className='topGame-details'>
            <div className='details'>
              <div className='topGame-title'>
                {GameData[0].title}
              </div>
              <div className='topGame-genres'>
                {topGenres.map((genre, index) => {
                  return <div key={index} id='genre'>
                            {genre}
                          </div>
                })}
              </div>
              <div className='topGame-platforms'>
                {topPlatforms.map((platform, index) => {
                  return <div key={index} id='platform'>
                            {platform}
                          </div>
                })}
              </div>
            </div>
            <div className='video'>
            {/* <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            </div>
          </div>
      </div>
    </>
  )
}

export default Home
