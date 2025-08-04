import ReactModal from "react-modal";
import ShareButton from "./ShareButton";
import { SHARE_TEXT, serializeGuessesForShare } from "@/util";
import Guesses from "./Guesses";

export default function ResultsModal({ modalController, guesses }) {
  return <ReactModal
    isOpen={modalController.isOpen}
    className="modal card"
    onRequestClose={modalController.closePane}
    shouldCloseOnEsc={true}
    shouldFocusAfterRender={true}
    shouldReturnFocusAfterClose={true}
    closeTimeoutMS={500}
    ariaHideApp={false}>
      <h2>Game Results</h2>
      <Guesses guesses={guesses} filterNulls={true}/>
      <ShareButton textToShare={`${serializeGuessesForShare(guesses)}\n${SHARE_TEXT}`}/>
  </ReactModal>
}