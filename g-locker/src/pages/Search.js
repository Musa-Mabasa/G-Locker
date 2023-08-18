import React, { useEffect , useState} from 'react'
import '../components/Main.css'
import GameCard from '../components/GameCard';
import API_KEY from '../models/ApiConfig';
import api from '../models/ApiURL';
import GameCardSkeleton from '../components/SkeletonComponents/GameCardSkeleton';
import { useLocation } from 'react-router-dom';



function Search() {
  const [GameData, setGameData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const query = queryParameters.get('query');

  useEffect(() => {
    setIsLoading(true);
    api.get(`/games?search=${query}&&key=${API_KEY}`)
    .then(res => {
      setGameData(res.data['results']);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  }, [query])

  return (
    <>
    {isLoading}
    <div className='page-title'>Results</div>
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

export default Search
