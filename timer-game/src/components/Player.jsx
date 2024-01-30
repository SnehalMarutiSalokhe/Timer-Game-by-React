import { useState, useRef } from 'react';
import './player.css';
export default function Player() {
  const playerNm = useRef();

  const [enteredPlayerNm, setEnteredPlayerNm] = useState(null);

  function handleClick() {
    setEnteredPlayerNm(playerNm.current.value);
    playerNm.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerNm ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNm} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}