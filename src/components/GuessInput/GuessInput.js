import React from 'react';
import { checkGuess } from '../../game-helpers';

function GuessInput({ setPastGuesses, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  const handleGuess = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newGuess = {
      guess,
      id: `${guess}-${Math.random()}`,
    };
    setPastGuesses((pastGuesses) => [...pastGuesses, newGuess]);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>

      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuess}
        maxLength="5"
        minLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        disabled={gameStatus !== 'playing'}
      />
    </form>
  );
}

export default GuessInput;
