import React from 'react'
import './GameCard.css'
import Rating from './Rating';
import WishlistButton from './WishlistButton';

function GameCard({game}) {
  const placeholderImage = 'https://publicsectornetwork.com/wp-content/uploads/2020/06/placeholder.jpg';

  return (
    <div className='game-card'>
      <div className='card-image' style={{backgroundImage: `url(${game.background_image}), url(${placeholderImage})`}}></div>
      <div className='card-details'>
        <div className='card-title'>{game.name}</div>
        <div className='card-genres'>
            {game.genres.map((genre, index) => {
                return <div key={index} id='genre'>
                        {genre.name}
                        </div>
            })}
        </div>
      </div>
      <div className='card-actions'>
        <Rating rating={game.metacritic}/>
        <WishlistButton/>
    </div>
    </div>
  )
}

export default GameCard
