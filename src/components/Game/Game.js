import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [pastGuesses, setPastGuesses] = React.useState([]);
  console.log({ pastGuesses });
  return (
    <>
      <GuessResults
        pastGuesses={pastGuesses}
        setPastGuesses={setPastGuesses}
        answer={answer}
      />
      <GuessInput setPastGuesses={setPastGuesses} />
    </>
  );
}

export default Game;
