import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [pastGuesses, setPastGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('');

  const isWinner = pastGuesses.some((guess) => guess.guess === answer);

  useEffect(() => {
    if (!isWinner) {
      setGameStatus('playing');
    }
    if (!isWinner && pastGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
    if (isWinner && pastGuesses.length <= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('win');
    }
  }, [pastGuesses, isWinner]);

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
      <GuessInput setPastGuesses={setPastGuesses} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
