export default function Guess({ guess, answer }) {

  const guessIsWinner = (guess) => {
    return Math.abs(guess - answer) < 0.51;
  }
  const fixedString = guess && guess.toFixed(1)
  return <div className="guess">
    {guess ? <h2>🕒 {guessIsWinner(guess) ? fixedString + '!' : fixedString} sec</h2> : <h2>&nbsp;</h2>}
  </div>
}