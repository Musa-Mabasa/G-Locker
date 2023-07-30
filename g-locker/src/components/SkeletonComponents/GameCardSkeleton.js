import React from 'react';
import './GameCardSkeleton.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function GameCardSkeleton() {
  return (
    <div className='skeleton-game-card'>
        <Skeleton/>
      <div className='skeleton-card-image'>
        <Skeleton height={140} />
      </div>
      <div className='skeleton-card-details'>
        <Skeleton height={20} count={2}/> 
      </div>
      <div className='skeleton-card-actions'>
        <Skeleton/>
        <Skeleton/>
    </div>
    </div>
  )
}

export default GameCardSkeleton
