export default function Header({ openPane }) {
  return <div id="header-bar">
    <p className="title-word">Intervle</p>
    <button onClick={openPane}>?</button>
  </div>
}