import React from 'react'
import '../components/Main.css'
import img from '../assets/GOW.png'
// import video from 'https://www.youtube.com/embed/EE-4GvjKcfs'
import {GameData} from '../components/GameData'
import Header from '../components/Header';
import Rating from '../components/Rating';


function Home() {
  var topGenres = GameData[0].genre.split(',');
  var topPlatforms = GameData[0].platform.split(',');
  return (
    <>
      
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
              <div className='topGame-actions'>
                <Rating/>
              </div>
            </div>
            
          </div>
      </div>
    </>
  )
}

export default Home
