import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { MAX_GUESSES, getAnswerForDate, getGuessScore } from "@/util";

export default function useGameController() {
  const TODAY_STRING = new Date().toLocaleDateString("en-us");
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

  const onGuess = async (guess) => {
    setMoveCanBeMade(false);
    if (isGameOver) {
      return;
    }
    recordGuess(guess);
  }

  const recordGuess = async (guess) => {
    const guessInSec = Math.round(guess / 100) / 10;
    const copy = [...guesses]
    const guessObj = buildGuessObject(guessInSec);
    copy[nextGuessIndex] = guessObj;
    await delay(500);
    setGuesses(copy);
    const isWinner = await checkWinner(guessObj);
    updateCookies(copy, isWinner);
    setNextGuessIndex(nextGuessIndex + 1);
  }

  const buildGuessObject = (guess) => {
    const guessScore = getGuessScore(guess, SOLUTION);
    return { guess, guessScore }
  }

  const updateCookies = (guesses, isWinner) => {
    setCookie('intervle', { 'gameId': TODAY_STRING, guesses, lastGuessMadeIndex: nextGuessIndex, gameWasWon: isWinner })
  }

  const checkWinner = async (guessObj) => {
    const isWinner = guessObj.guessScore === 0;
    if (isWinner) {
      setGameWasWon(true);
    }
    await delay(500);
    if (nextGuessIndex === guesses.length - 1 || isWinner) {
      setIsGameOver(true);
    } else {
      setMoveCanBeMade(true);
    }
    return isWinner;
  }

  const getGuessScores = () => guesses.map(g => g?.guessScore).filter(x => x != null);

  return { moveCanBeMade, gameWasWon, onGuess, guesses, removeCookie, isGameOver, getGuessScores }
}