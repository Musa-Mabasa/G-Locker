import React from 'react'
import GameCard from '../components/GameCard'
import {GameData} from '../components/GameData'

function NewReleases() {
  return (
    <div>
      <div className='card-grid'>
          {GameData.map((game, index) => (
            <GameCard key={index} game={game}/>
          ))}
      </div>
    </div>
  )
}

export default NewReleases
