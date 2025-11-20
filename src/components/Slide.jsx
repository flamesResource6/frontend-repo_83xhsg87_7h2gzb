import { motion } from 'framer-motion'

function Slide({ number, title, points, accent = 'sky', note }) {
  const accentMap = {
    sky: 'from-sky-500/30 to-sky-400/10',
    violet: 'from-violet-500/30 to-violet-400/10',
    emerald: 'from-emerald-500/30 to-emerald-400/10',
    amber: 'from-amber-500/30 to-amber-400/10',
    rose: 'from-rose-500/30 to-rose-400/10',
  }

  return (
    <section className="relative min-h-[70vh] w-full bg-slate-950 py-16">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${accentMap[accent] || accentMap.sky}`}></div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-start gap-6">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10 text-white/90 font-semibold">
            {number}
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">{title}</h2>
            <ul className="space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sky-50/90">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/60"></span>
                  <span className="text-base sm:text-lg leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            {note && <p className="mt-6 text-sm text-white/50">{note}</p>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Slide
