import GuessIndicator from "./GuessIndicator";

export default function Guess({ guessObj }) {
  const { guess, guessScore } = guessObj || { guess: null, guessScore: null };
  const fixedString = guess && guess.toFixed(1)
  return <div className="guess-container">
    <div className="guess">
      {guessObj ? <h2 className="guess-text">🕒 {guessScore === 0 ? fixedString + '!' : fixedString} sec</h2> : <h2>&nbsp;</h2>}
    </div>
    <GuessIndicator guessScore={guessScore} />
  </div>
}