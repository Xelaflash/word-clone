import React from 'react';

function Guesses({ pastGuesses }) {
  return (
    <div className="guess-results">
      <h2>Guesses</h2>

      {pastGuesses.map(({ guess, id }) => (
        <p className="guess" key={id}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
