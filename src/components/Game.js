import IntervalButton from "./IntervalButton";
import Guesses from "./Guesses";
import Confetti from "react-confetti"
import useGameController from "@/controller/gameController";

export default function Game() {
  const gameController = useGameController();

  return <div className="card">
    <IntervalButton setLastGuessTime={gameController.onGuess} buttonIsEnabled={gameController.moveCanBeMade} />
    <Guesses guesses={gameController.guesses} />
    {gameController.gameWasWon ? <Confetti initialVelocityX={{ min: -5, max: 5 }} initialVelocityY={{ min: -10, max: 10 }} numberOfPieces={400} recycle={false} /> : <></>}
  </div>
}