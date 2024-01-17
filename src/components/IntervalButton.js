import React from "react"
import ThreeStateButton from "./ThreeStateButton";
import useTimerButtonController from "@/controller/timerButtonController";

export default function IntervalButton({buttonIsEnabled, setLastGuessTime}) {
  const buttonController = useTimerButtonController(buttonIsEnabled, setLastGuessTime);
  
  return <div className="big-button-container" onClick={buttonController.onEvent} onKeyDown={buttonController.onKeyDown} tabIndex={0} autoFocus>
    <ThreeStateButton isActivated={buttonController.isActivated} isEnabled={buttonIsEnabled} />
    </div>;
}