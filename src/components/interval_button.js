import React, { useState } from "react"
import ThreeStateButton from "./ThreeStateButton";

export default function IntervalButton({buttonIsEnabled, setLastGuessTime}) {
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


  return <div className="big-button-container" onClick={onEvent} onKeyDown={onKeyDown} tabIndex={0} autoFocus>
    <ThreeStateButton isActivated={isActivated} isEnabled={buttonIsEnabled} />
    </div>;
}