import Hero from './components/Hero'
import Slide from './components/Slide'
import VisualHUD from './components/VisualHUD'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <Slide
        number={1}
        title="What is AI?"
        points={[
          'Systems that perceive, reason, and act to achieve goals.',
          'From narrow assistants to general problem solvers.',
          'Powered by data, algorithms, and compute.',
        ]}
        accent="sky"
      />

      <Slide
        number={2}
        title="How it works"
        points={[
          'Neural networks learn patterns from large datasets.',
          'Optimization aligns model predictions with reality.',
          'Tools orchestrate search, memory, and interaction.',
        ]}
        accent="violet"
      />

      <VisualHUD />

      <Slide
        number={3}
        title="Where it’s used"
        points={[
          'Vision: quality checks, medical imaging, smart cities.',
          'Language: assistants, support, content, research.',
          'Decisioning: forecasting, pricing, risk, logistics.',
        ]}
        accent="emerald"
      />

      <Slide
        number={4}
        title="Risks & responsibility"
        points={[
          'Bias, misuse, hallucinations — mitigate with governance.',
          'Human-in-the-loop for critical decisions.',
          'Privacy, safety, and transparency by design.',
        ]}
        accent="amber"
      />

      <footer className="bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center text-slate-400">
          © {new Date().getFullYear()} AI Presentation
        </div>
      </footer>
    </div>
  )
}

export default App
