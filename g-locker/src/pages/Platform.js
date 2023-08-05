import React, { useEffect , useState} from 'react'
import '../components/Main.css'
import GameCard from '../components/GameCard';
import API_KEY from '../models/ApiConfig';
import api from '../models/ApiURL';
import GameCardSkeleton from '../components/SkeletonComponents/GameCardSkeleton';



function Platform({platform}) {
  const [GameData, setGameData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    var platformNum = 0;
    platform === 'PC' ? platformNum = 1 : platform === 'Playstation' ? platformNum = 2 : platform === 'Xbox' ? platformNum = 3 : platformNum = 4;
    api.get(`/games?parent_platforms=${platformNum}&&key=${API_KEY}`)
    .then(res => {
      setGameData(res.data['results']);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  }, [platform])

  return (
    <>
    <div className='page-title'>{platform}</div>
    <br></br>
    <br></br>
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

export default Platform
