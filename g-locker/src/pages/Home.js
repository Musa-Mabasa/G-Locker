import React from 'react'
import '../components/Main.css'
import img from '../assets/GOW.png'
// import video from 'https://www.youtube.com/embed/EE-4GvjKcfs'
import {GameData} from '../components/GameData'
import Header from '../components/Header';
import Rating from '../components/Rating';
import WishlistButton from '../components/WishlistButton';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';


function Home() {
  const dataToPass = {
    images: images,
  };

  var topGenres = GameData[0].genre.split(',');
  var topPlatforms = GameData[0].platform.split(',');

  return (
    <>
      <div className='page-title'>Popular</div>
      <div className='upper-panel'>
          <div className='topGame-image'>
            <div className='popular-tag'>Popular</div>
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
                <WishlistButton/>
              </div>
            </div>
            <div className="top-game-images">
              <div className='first-image' style={{ backgroundImage: `url(${images[0].src})` }}></div>
              <Link 
                to='/pictures' 
                state={dataToPass}
              >
                <div className='second-image' style={{ backgroundImage: `url(${images[1].src})` }}>
                  <div className="overlay"></div>
                  <p>+{images.length-1}</p>
                </div>
              </Link>
            </div>
          </div>
      </div>
      <div className='card-grid'>
          {GameData.map((game, index) => (
            <GameCard key={index} game={game}/>
          ))}
      </div>
    </>
  )
}

export default Home

const images = [
  {
    src: 'https://www.shutterstock.com/image-illustration/gameplay-racing-simulator-video-game-600w-2198938111.jpg',
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/day-video-game-mockup-gameplay-600w-2117497430.jpg',
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/gameplay-racing-simulator-video-game-600w-2198938111.jpg',
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/gameplay-racing-simulator-video-game-600w-2198938111.jpg',
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/gameplay-racing-simulator-video-game-600w-2198938111.jpg',
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/gameplay-racing-simulator-video-game-600w-2198938111.jpg',
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/gameplay-racing-simulator-video-game-600w-2198938111.jpg',
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/gameplay-racing-simulator-video-game-600w-2198938111.jpg',
  },

];
