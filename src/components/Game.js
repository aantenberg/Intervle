import IntervalButton from "./IntervalButton";
import Guesses from "./Guesses";
import Confetti from "react-confetti"
import useGameController from "@/controller/gameController";
import useShareResultsController from "@/controller/shareController";
import ResultsModal from "./ResultsModal";

export default function Game() {
  const gameController = useGameController();
  const resultsController = useShareResultsController(gameController.isGameOver)


  return <div className="padded card">
    <IntervalButton setLastGuessTime={gameController.onGuess} buttonIsEnabled={gameController.moveCanBeMade} />
    <Guesses guesses={gameController.guesses} />
    {gameController.gameWasWon ? <Confetti initialVelocityX={{ min: -5, max: 5 }} initialVelocityY={{ min: -10, max: 10 }} numberOfPieces={400} recycle={false} /> : <></>}
    <ResultsModal modalController={resultsController} guesses={gameController.guesses}/>
  </div>
}