import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, TerminalSquare, Brain, Globe, Bot } from 'lucide-react'

const focuses = [
  {
    icon: Cpu,
    title: 'Sistemas y compiladores',
    items: ['C / C++', 'Diseño de SO', 'Parsing y gramáticas'],
  },
  {
    icon: TerminalSquare,
    title: 'Linux y scripting',
    items: ['Linux', 'Bash / Scripting', 'Programación de bajo nivel'],
  },
  {
    icon: Brain,
    title: 'ML & Deep Learning',
    items: ['Estudiando y profundizando', 'Python'],
  },
  {
    icon: Bot,
    title: 'Agentes de código',
    items: ['OpenCode', 'Automatización de flujos'],
  },
  {
    icon: Globe,
    title: 'Web (secundario)',
    items: ['React', 'TailwindCSS', 'Supabase'],
  },
]

export default function TechFocus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tech-focus" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enfoque <span className="text-primary">técnico</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focuses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/10 text-center"
        >
          <p className="text-gray-300 text-lg">
            Mi prioridad es la{' '}
            <span className="text-white font-semibold">investigación en sistemas</span>:
            diseño de SO, compiladores y Linux con C/C++, al mismo tiempo que profundizo en{' '}
            <span className="text-white font-semibold">Machine Learning</span> y{' '}
            <span className="text-white font-semibold">Deep Learning</span>. El desarrollo web
            queda como un interés <span className="text-white font-semibold">secundario</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
