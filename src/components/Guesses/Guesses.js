import React from 'react';

function Guesses({ pastGuesses }) {
  return (
    <div className="guess-results">
      <h2>Guesses</h2>

      {pastGuesses.map((guess) => (
        <p className="guess" key={guess}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
