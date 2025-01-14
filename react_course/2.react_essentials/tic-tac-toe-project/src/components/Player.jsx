import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [userName, setUserName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      onChangeName(symbol, userName);
    }
  }

  function handleName(e) {
    setUserName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing && <input value={userName} onChange={handleName} />}
        {!isEditing && <span className="player-name">{userName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
