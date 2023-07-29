import React from 'react'
import './GameCard.css'
import {GameData} from '../components/GameData'
import Rating from './Rating';
import WishlistButton from './WishlistButton';

function GameCard() {
var topGenres = GameData[0].genre.split(',');
  return (
    <div className='game-card'>
      <div className='card-image'></div>
      <div className='card-details'>
        <div className='card-title'>God of War: Ragnarok</div>
        <div className='card-genres'>
            {topGenres.map((genre, index) => {
                return <div key={index} id='genre'>
                        {genre}
                        </div>
            })}
        </div>
      </div>
      <div className='card-actions'>
        <Rating/>
        <WishlistButton/>
    </div>
    </div>
  )
}

export default GameCard
