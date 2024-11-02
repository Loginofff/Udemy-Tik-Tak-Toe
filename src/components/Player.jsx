import React, { useState } from "react";

export function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditCLick() { 
    setIsEditing(true)
  }

  let PlayerName = <span className="player-name">{name}</span>

  if (isEditing) {
    PlayerName = <input type="text" required />
  }

  return (
    <li>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditCLick}>Edit</button>
    </li>
  );
}

export default Player;

