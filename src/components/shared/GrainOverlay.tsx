export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998]"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(168,108,244,0.10) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
  )
}
