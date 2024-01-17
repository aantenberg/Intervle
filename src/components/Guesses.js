import { AnimatePresence, motion } from "framer-motion";
import Guess from "./Guess";

export default function Guesses({ guesses, answer }) {
  let i = guesses.length;
  return <AnimatePresence mode="popLayout">
    {guesses.map(guess =>
      <motion.div key={100 * guess + i++}
        initial={{ opacity: 0, x: -10, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}>
        <Guess guess={guess} answer={answer} />
      </motion.div>)}
  </AnimatePresence>
}