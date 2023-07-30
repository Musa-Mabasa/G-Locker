import React, { useEffect , useState} from 'react'
import '../components/Main.css'
// import video from 'https://www.youtube.com/embed/EE-4GvjKcfs'
// import {GameData} from '../components/GameData'
import Rating from '../components/Rating';
import WishlistButton from '../components/WishlistButton';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import API_KEY from '../models/ApiConfig';
import api from '../models/ApiURL';
import GameCardSkeleton from '../components/SkeletonComponents/GameCardSkeleton';



function Home() {
  const [GameData, setGameData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/games?key=${API_KEY}`)
    .then(res => {
      setGameData(res.data['results']);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
    <div className='page-title'>Popular</div>
        <div className='upper-panel'>
        {isLoading ? (
          <>
            <div className='skeleton-top-image-wrapper'>
              <Skeleton  className='skeleton-top-image'/>
            </div>
            <div className='skeleton-top-details-wrapper'>
              <div className='skeleton-details'>
                <Skeleton count={3} height={30} width={210} style={{marginBottom: "1.1rem"}} className='skeleton-top-details'/>
              </div>
              <div className='skeleton-actions'>
                <Skeleton height={40} className='skeleton-top-actions'/>
              </div>
            </div>
          </>
        ):(
          <>
          <div className='topGame-image' style={{backgroundImage: `url(${GameData[0].background_image})`}}>
          <div className='popular-tag'>Popular</div>
          </div>
          <div className='topGame-details'>
            <div className='details'>
              <div className='topGame-title'>
                {GameData[0].name}
              </div>
              <div className='topGame-genres'>
                {GameData[0].genres.map((genre) => {
                  return <div id='genre'>
                            {genre.name}
                          </div>
                })}
              </div>
              <div className='topGame-platforms'>
                {GameData[0].parent_platforms.map((platform) => {
                  return <div id='platform'>
                            {platform['platform'].name}
                          </div>
                })}
              </div>
              <div className='topGame-actions'>
                <Rating rating={GameData[0].metacritic}/>
                <WishlistButton/>
              </div>
            </div>
            <div className="top-game-images">
              <div className='first-image' style={{ backgroundImage: `url(${GameData[0].short_screenshots[0].image})` }}></div>
              <Link
                to='/pictures'
                state={GameData[0].short_screenshots}
              >
                <div className='second-image' style={{ backgroundImage: `url(${GameData[0].short_screenshots[1].image})` }}>
                  <div className="overlay"></div>
                  <p>+{GameData[0].short_screenshots.length-1}</p>
                </div>
              </Link>
            </div>
          </div>
          </>
          )}
        </div>

      <div className='card-grid'>
        {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <GameCardSkeleton key={index} />
            ))
          ) : (
            GameData.slice(1).map((game, index) => (
              <GameCard key={index} game={game} />
            ))
          )}
      </div>
      </>
  )
}

export default Home
