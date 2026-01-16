import { useState } from "react";

function GuessGame() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const userGuess = Number(guess);

    if (!userGuess) return;

    setAttempts(attempts + 1);

    if (userGuess < randomNumber) {
      setMessage("🔽 Too Low!");
    } else if (userGuess > randomNumber) {
      setMessage("🔼 Too High!");
    } else {
      setMessage(`🎉 Correct! You guessed in ${attempts + 1} tries.`);
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="game">
      <h2>🎯 Number Guessing Game</h2>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number"
      />

      <br />

      <button onClick={handleGuess}>Guess</button>
      <button onClick={resetGame}>Reset</button>

      <p>{message}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default GuessGame;
