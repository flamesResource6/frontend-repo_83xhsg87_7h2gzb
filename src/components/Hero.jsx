import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(60% 60% at 50% 20%, rgba(56,189,248,0.15) 0%, rgba(15,23,42,0) 60%)'
      }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]"
        >
          Intelligence Amplified
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg sm:text-xl text-sky-100/80"
        >
          A short, visual presentation about modern AI: what it is, how it works, and where it’s headed.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
