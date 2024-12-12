import React, { useState } from 'react';

const RockPaperScissorsGame = () => {
  const hand = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  const [computerScore, setComputerScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [gameMessage, setGameMessage] = useState('');
  const [currentRound, setCurrentRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [choices, setChoices] = useState({ user: null, computer: null });

  /*
  Function that capitalizes the first letter while keeping the rest lowercase.
  */
  function title(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /*
  Random Number Generator function that returns 
  a number between 1 and 5 corresponsing the index of one of the choices:
  [Rock, Paper, Scissors, Lizard, Spock]
  */
  function getComputerChoice(min, max) {
    const minceil = Math.ceil(min);
    const maxfloor = Math.floor(max);
    const computerchoice =
      Math.floor(Math.random() * (maxfloor - minceil + 1) + minceil);
    return title(hand[computerchoice]);
  }

  /*
  Round function that runs one round of RPLS by 
  checking if the user's choice is within the computer choice's weaknesses
  */
  function playRound(computerChoice, userChoice) {
    // dictionary to list the strengths of each hand
    const rules = {
      Rock: ["Scissors", "Lizard"],
      Paper: ["Rock", "Spock"],
      Scissors: ["Paper", "Lizard"],
      Lizard: ["Spock", "Paper"],
      Spock: ["Rock", "Scissors"]
    };
    if (computerChoice === userChoice) return 0;
    return rules[computerChoice].includes(userChoice) ? 1 : 2;
  }

  function handleUserChoice(userChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice(0, 4);
    setChoices({ user: userChoice, computer: computerChoice });

    const result = playRound(computerChoice, userChoice);
    
    let message = `Round ${currentRound}: `;
    if (result === 0) {
      message += "Tie";
      setCurrentRound(prev => prev); // Keep same round for ties
    } else if (result === 1) {
      message += "Computer Wins";
      setComputerScore(prev => prev + 1);
      setCurrentRound(prev => prev + 1);
    } else {
      message += "User Wins";
      setUserScore(prev => prev + 1);
      setCurrentRound(prev => prev + 1);
    }
    
    setGameMessage(message);

    if (currentRound >= 3 && result !== 0) {
      setGameOver(true);
    }
  }

  const resetGame = () => {
    setComputerScore(0);
    setUserScore(0);
    setGameMessage('');
    setCurrentRound(1);
    setGameOver(false);
    setChoices({ user: null, computer: null });
  };

  return (
    <div className="game-container">
      <div className="game-card">
        <div className="game-header">
          <h1>Rock Paper Scissors Lizard Spock</h1>
        </div>
        <div className="game-content">
          <div className="score-display">
            <div>
              <p className="score">Your Score: {userScore}</p>
              <p className="choice">Your Choice: {choices.user || '-'}</p>
            </div>
            <div>
              <p className="score">Computer Score: {computerScore}</p>
              <p className="choice">Computer Choice: {choices.computer || '-'}</p>
            </div>
          </div>

          {gameMessage && (
            <div className="message-alert">
              {gameMessage}
            </div>
          )}

          <div className="choice-grid">
            {hand.map((choice) => (
              <button
                key={choice}
                onClick={() => handleUserChoice(choice)}
                disabled={gameOver}
                className="choice-button"
              >
                {choice}
              </button>
            ))}
          </div>

          {gameOver && (
            <div className="game-over">
              <h3>
                Game Over! In the best out of {computerScore + userScore}:{' '}
                {userScore === computerScore
                  ? 'Tie'
                  : userScore > computerScore
                  ? 'User Wins'
                  : 'Computer Wins'}
              </h3>
              <button onClick={resetGame} className="reset-button">
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissorsGame;