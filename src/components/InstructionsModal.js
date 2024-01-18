import ReactModal from "react-modal";
import Badge from "./Badge";

export default function InstructionsModal({ instructionsController }) {
  return <ReactModal
    isOpen={instructionsController.isOpen}
    className="modal card"
    overlayClassName="overlay"
    onRequestClose={instructionsController.closePane}
    shouldCloseOnEsc={true}
    shouldFocusAfterRender={true}
    shouldReturnFocusAfterClose={true}
    ariaHideApp={false}>
    <div onClick={instructionsController.closePane}>
      <div className="instruction-1">
        <p>Guess the <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Intervle</span> in six tries.</p>
        <p>To make a guess, press the <span style={{ color: 'var(--primary)', fontWeight: 600 }}>purple circle</span> to start a timer. After the amount of time you&apos;d like to guess, press the purple circle again to end the timer.</p>
        <p>After each guess, you will receive a hint towards the Intervle target number.</p>
      </div>
      <div className="instruction-2">
        <div style={{ display: 'inline-block', margin: 'auto 0' }}><Badge padding="10px 15px"><h2 className="badge-text thin">↑</h2></Badge></div>
        <p>means the target is above your guess.</p>
        <div style={{ display: 'inline-block', margin: 'auto 0' }}><Badge padding="10px 15px"><h2 className="badge-text thin">↓</h2></Badge></div>
        <p>means the target is below your guess.</p>
      </div>
      <div>
        <div className="instruction-3">
          <div style={{ display: 'block', margin: 'auto 0', flex: 1 }}><Badge color={"var(--max-threshold)"}>
            <h2 className="badge-text" style={{ color: 'var(--max-threshold-dark)' }}>Red</h2>
          </Badge></div>
          <p style={{ margin: 15, flex: 4 }}>means you&apos;re far from the target.</p>
        </div>
        <div className="instruction-3">
          <div style={{ display: 'block', margin: 'auto 0' }}><Badge color={"var(--threshold-1)"}>
            <h2 className="badge-text" style={{ color: 'var(--threshold-1-dark)' }}>Yellow</h2>
          </Badge></div>
          <p style={{ margin: 15 }}>means you&apos;re within 2 seconds!</p>
        </div>
        <div className="instruction-3">
          <div style={{ display: 'block', margin: 'auto 0' }}><Badge color={"var(--threshold-0)"}>
            <h2 className="badge-text" style={{ color: 'var(--threshold-0-dark)' }}>Green</h2>
          </Badge></div>
          <p style={{ margin: 15 }}>means you got it!</p>
        </div>
      </div>
    </div>
  </ReactModal>
}