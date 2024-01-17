export default function GuessIndicator({ guessScore }) {
  const absoluteScore = Math.abs(guessScore);
  const className = "guess" + (guessScore === null ? "" : " indicator score-" + absoluteScore);
  return <div className={className}>
    <h2>{guessScore === null ? "" : absoluteScore === 0 ? "✓" : (guessScore < 0 ? "↑" : "↓")}</h2>
  </div>
}