import { MAX_GUESSES, getAnswerForDate } from "@/constants";
import GameModel from "./GameView";

export default function Game() {
  const TODAY_STRING = new Date().toLocaleDateString("en-us");
  return <GameModel props={{ MAX_GUESSES, getAnswerForDate, TODAY_STRING }} />
}