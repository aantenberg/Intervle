export default function Badge({ style={}, color='rgba(0, 0, 0, 0.1)', children, padding='5px 15px' }) {
  return <div style={{ backgroundColor: color, display: 'inline-block', padding: padding, borderRadius: '16px', ...style }}>
    <div>{children}</div>
  </div>
}