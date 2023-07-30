import React, { useEffect , useState} from 'react'
import '../components/Main.css'
// import video from 'https://www.youtube.com/embed/EE-4GvjKcfs'
// import {GameData} from '../components/GameData'
import GameCard from '../components/GameCard';
import API_KEY from '../models/ApiConfig';
import api from '../models/ApiURL';



function NewReleases() {
  const [GameData, setGameData] = useState(null);

  useEffect(() => {
    api.get(`/games?ordering=released&&key=${API_KEY}`)
    .then(res => {
      setGameData(res.data['results']);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
    { GameData && (
      <>
    <div className='page-title'>New Releases</div>
    <br></br>
    <br></br>
      <div className='card-grid'>
          {GameData.map((game, index) => (
            <GameCard key={index} game={game}/>
          ))}
      </div> 
      </>
    )}
      
    </>
  )
}

export default NewReleases
