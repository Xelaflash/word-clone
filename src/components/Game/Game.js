import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [pastGuesses, setPastGuesses] = React.useState([]);
  console.log({ pastGuesses });
  return (
    <>
      {pastGuesses.length > 0 && (
        <Guesses pastGuesses={pastGuesses} setPastGuesses={setPastGuesses} />
      )}
      <GameInput setPastGuesses={setPastGuesses} />
    </>
  );
}

export default Game;
