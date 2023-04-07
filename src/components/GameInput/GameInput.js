import React from 'react';

function GameInput() {
  const [guess, setGuess] = React.useState('');

  const handleGuess = (event) => {
    setGuess(event.target.value.toUpperCase());
    // console.log(guess);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('You typed:', guess);
    setGuess('');
  };

  return (
    <>
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
        />
      </form>
    </>
  );
}

export default GameInput;
