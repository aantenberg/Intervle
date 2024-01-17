import { useState } from "react";

export default function useTimerButtonController(buttonIsEnabled, setLastGuessTime) {
  const [isActivated, setIsActivated] = useState(false)
  const [startedMillis, setStartedMillis] = useState(-1)

  const onTimerStart = () => {
    setIsActivated(true);
    setStartedMillis(Date.now());
  }

  const onTimerEnd = () => {
    const currentTime = Date.now()
    const elapsedMillis = currentTime - startedMillis
    setLastGuessTime(elapsedMillis)
    setIsActivated(false)
  }

  const onKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      onEvent()
    }
  }

  const onEvent = () => {
    if (!buttonIsEnabled) {
      return
    }
    if (!isActivated) {
      onTimerStart()
    } else {
      onTimerEnd()
    }
  }
  return {onEvent, onKeyDown, isActivated}
}