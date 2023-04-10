import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [pastGuesses, setPastGuesses] = React.useState([]);

  const isWinner = pastGuesses.some((guess) => guess.guess === answer);

  let gameStatus;
  if (!isWinner) {
    gameStatus = 'playing';
  }
  if (!isWinner && pastGuesses.length >= 6) {
    gameStatus = 'lost';
  }
  if (isWinner && pastGuesses.length <= 6) {
    gameStatus = 'win';
  }

  return (
    <>
      <GuessResults
        pastGuesses={pastGuesses}
        setPastGuesses={setPastGuesses}
        answer={answer}
      />
      {gameStatus === 'win' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {pastGuesses.length}{' '}
              {pastGuesses.length === 1 ? 'guess' : 'guesses'}
            </strong>
            .
          </p>
        </div>
      )}

      {gameStatus === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}

      <GuessInput setPastGuesses={setPastGuesses} />
    </>
  );
}

export default Game;
