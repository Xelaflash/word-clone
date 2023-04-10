import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = `cell ${status}`;
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  // console.log({ answer });

  const checkLetter = checkGuess(value?.guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          letter={value ? value.guess[num] : undefined}
          status={checkLetter ? checkLetter[num].status : undefined}
          key={num}
        />
      ))}
    </p>
  );
}

export default Guess;
