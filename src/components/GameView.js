import { useEffect, useState } from "react";
import IntervalButton from "./interval_button";
import Guesses from "./Guesses";
import { useCookies } from "react-cookie";
import Confetti from "react-confetti"

export default function GameModel({ props }) {
  const { MAX_GUESSES, getAnswerForDate, TODAY_STRING } = props;
  const SOLUTION = getAnswerForDate(TODAY_STRING);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameWasWon, setGameWasWon] = useState(false);
  const [guesses, setGuesses] = useState(new Array(MAX_GUESSES).fill(null));
  const [cookies, setCookie, removeCookie] = useCookies(['guesses']);
  const [nextGuessIndex, setNextGuessIndex] = useState(0);
  const [moveCanBeMade, setMoveCanBeMade] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    if (gameWasWon) {
      setTimeout(() => {
        setGameWasWon(false);
      }, 10000);
    }
  }, [gameWasWon])

  useEffect(() => {
    // TODO: Refactor setMoveCanBeMade
    setMoveCanBeMade(true);
    const intervleCookie = cookies['intervle'];
    if (!intervleCookie) {
      return;
    }
    if (intervleCookie['gameId'] === TODAY_STRING) {
      const guessesFromCookie = intervleCookie['guesses'];
      const lastGuessFromCookie = intervleCookie['lastGuessMadeIndex'];
      setGuesses(guessesFromCookie);
      setNextGuessIndex(lastGuessFromCookie + 1)
      if (lastGuessFromCookie + 1 >= guessesFromCookie.length || intervleCookie['gameWasWon']) {
        setIsGameOver(true);
        setMoveCanBeMade(false);
      }
    } else {
      removeCookie('intervle');
    }
  }, [cookies, removeCookie, TODAY_STRING])

  const guessIsWinner = (guessInSec) => {
    return Math.abs(guessInSec - SOLUTION) < 0.51;
  }

  const onGuess = async (guess) => {
    setMoveCanBeMade(false);
    if (isGameOver) {
      return;
    }
    const guessInSec = Math.round(guess / 100) / 10;
    const copy = [...guesses]
    copy[nextGuessIndex] = guessInSec;
    await delay(500);
    setGuesses(copy);
    const isWinner = guessIsWinner(guessInSec);
    if (isWinner) {
      setGameWasWon(true);
    }
    setCookie('intervle', { 'gameId': TODAY_STRING, guesses: copy, lastGuessMadeIndex: nextGuessIndex, gameWasWon: isWinner })
    await delay(500);
    if (nextGuessIndex === guesses.length - 1 || isWinner) {
      setIsGameOver(true);
    } else {
      setMoveCanBeMade(true);
    }
    setNextGuessIndex(nextGuessIndex + 1);
  }

  return <div className="game-card">
    <IntervalButton setLastGuessTime={onGuess} buttonIsEnabled={moveCanBeMade} />
    <Guesses guesses={guesses} answer={SOLUTION} />
    {gameWasWon ? <Confetti initialVelocityX={{ min: -5, max: 5 }} initialVelocityY={{ min: -10, max: 10 }} numberOfPieces={400} recycle={false} /> : <></>}
  </div>
}