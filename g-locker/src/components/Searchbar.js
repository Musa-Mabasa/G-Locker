import React, { useEffect } from 'react'
import './Searchbar.css'
import * as AiIcons from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


function Searchbar() {
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);

  }

  const handleClear = () => {
    setQuery('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && query!=='') {
      navigate(`/search?query=${query}`);
      setQuery('');
    }
  };


  return (
    <div className='searchbar'>
      <div className='searchInput'>
        <input type='text' placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyPress}/>
        {query && (
            <div className='clear-button' onClick={handleClear}>
            <AiIcons.AiOutlineCloseCircle />
            </div>
        )}
        <button onClick={handleClick}><AiIcons.AiOutlineSearch/></button>
      </div>
    </div>
  )
}

export default Searchbar
