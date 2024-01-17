export default function ThreeStateButton({isActivated, isEnabled}) {
  const className = "big-button" + (!isEnabled ? " disabled" : (isActivated ? " activated" : ""));
  return <div className={className}></div>
}