export default function Reveal({ children, className = '', style }) {
  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
