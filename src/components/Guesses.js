import { AnimatePresence, motion } from "framer-motion";
import Guess from "./Guess";

export default function Guesses({ guesses, filterNulls = false }) {
  let i = guesses.length;
  return <AnimatePresence mode="popLayout">
    {guesses
      .filter(guess => guess != null || !filterNulls)
      .map(guess =>
        <motion.div key={100 * guess || 0 + i++}
          initial={{ opacity: 0, x: -10, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}>
          <Guess guessObj={guess} />
        </motion.div>)}
  </AnimatePresence>
}