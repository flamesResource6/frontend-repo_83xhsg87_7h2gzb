import { motion } from 'framer-motion'

function Ring({ delay = 0, size = 300 }) {
  return (
    <motion.div
      initial={{ opacity: 0.25, scale: 0.8 }}
      animate={{ opacity: [0.25, 0.6, 0], scale: [0.8, 1.1, 1.4] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', delay }}
      className="absolute inset-0 m-auto rounded-full border border-sky-400/30"
      style={{ width: size, height: size }}
    />
  )
}

function FloatingNumber({ x, y, value, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: [0.2, 0.8, 0.2], y: [8, -4, 8] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
      className="absolute text-sky-300/80"
      style={{ left: x, top: y }}
    >
      <div className="rounded-md bg-sky-900/40 ring-1 ring-sky-300/30 px-2 py-1 text-xs font-mono tracking-wider">
        {value}
      </div>
    </motion.div>
  )
}

function Building() {
  const rows = 10
  const cols = 8
  const cells = Array.from({ length: rows * cols })
  return (
    <div className="relative mx-auto h-[320px] w-[220px] rotate-3 rounded-xl bg-slate-800/40 shadow-[0_0_80px_rgba(56,189,248,0.25)] ring-1 ring-white/10 backdrop-blur-sm">
      <div className="absolute inset-0 -skew-y-3 bg-gradient-to-br from-slate-900/60 to-slate-800/20" />
      <div className="relative z-10 grid grid-cols-8 gap-1 p-3">
        {cells.map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-[2px] bg-sky-400/20"
          >
            <motion.div
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.9, 0.15] }}
              transition={{ duration: 3 + (i % 5) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: (i % 7) * 0.1 }}
              className="h-full w-full rounded-[2px] bg-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
            />
          </div>
        ))}
      </div>
      {/* Top antenna */}
      <div className="absolute -top-6 left-1/2 h-6 w-1 -translate-x-1/2 rounded-full bg-sky-400/60 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
    </div>
  )
}

export default function VisualHUD() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-24">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.12), transparent 50%), linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          backgroundPosition: 'center, center, center',
        }}
      />

      {/* Concentric radar rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2">
        <Ring size={200} delay={0} />
        <Ring size={320} delay={0.6} />
        <Ring size={440} delay={1.2} />
        <Ring size={560} delay={1.8} />
      </div>

      {/* Rotating sweep */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 65%)' }}
      >
        <div className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, rgba(56,189,248,0.0), rgba(56,189,248,0.35) 15deg, rgba(56,189,248,0.0) 60deg)'
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6">
        <Building />

        {/* Floating numeric overlays (no words) */}
        <FloatingNumber x="18%" y="22%" value="142.7" delay={0.1} />
        <FloatingNumber x="74%" y="28%" value="87%" delay={0.4} />
        <FloatingNumber x="24%" y="68%" value="+23" delay={0.9} />
        <FloatingNumber x="68%" y="64%" value="1.204" delay={0.2} />

        {/* Corner HUD brackets */}
        <div className="pointer-events-none absolute left-10 top-10 h-10 w-10 border-l-2 border-t-2 border-sky-400/50" />
        <div className="pointer-events-none absolute right-10 top-10 h-10 w-10 border-r-2 border-t-2 border-sky-400/50" />
        <div className="pointer-events-none absolute left-10 bottom-10 h-10 w-10 border-l-2 border-b-2 border-sky-400/50" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-10 w-10 border-r-2 border-b-2 border-sky-400/50" />
      </div>
    </section>
  )
}
