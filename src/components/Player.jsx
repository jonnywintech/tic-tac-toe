import React from 'react';
import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleChange = (event) => {
        setPlayerName( prev => {
            return prev = event.target.value
        })
  };

  return (
    <li>
      <span className='player'>
        {isEditing ? (
          <input type='text' required value={playerName} onChange={handleChange}/>
        ) : (
          <span className='player-name'>{ playerName }</span>
        )}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={()=>{setIsEditing(!isEditing)}}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
};

export default Player;
