import React from 'react';
import { useState } from 'react';

const Player = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleChange = (event) => {
    setPlayerName((prev) => {
      return (prev = event.target.value);
    });
  };

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {isEditing ? (
          <input
            type='text'
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className='player-name'>{playerName}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
};

export default Player;
