import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, FlaskConical, TerminalSquare } from 'lucide-react'

const roles = [
  {
    icon: Crown,
    title: 'Presidente de Syste+',
    subtitle: 'Asociación de Estudiantes de Ingeniería de Sistemas · Univ. del Magdalena',
    period: '2026-II — 2027-I',
    description:
      'Represento y lidero a la asociación estudiantil del programa, impulsando actividades académicas, comunidad y participación estudiantil.',
  },
  {
    icon: TerminalSquare,
    title: 'Líder de CILISP',
    subtitle: 'Comunidad de Linux, Scripting y Programación de Bajo Nivel',
    period: 'Actualidad',
    description:
      'Lidero una comunidad de estudio donde promuevo la investigación en Linux, scripting y bajo nivel, acompañando a estudiantes interesados que no saben cómo empezar a aprender.',
  },
  {
    icon: FlaskConical,
    title: 'Semillero GIDSYC',
    subtitle: 'Grupo de Investigación y Desarrollo en Sistemas y Computación',
    period: 'Empezando',
    description:
      'Empezando a involucrarme en el semillero de investigación, con interés en sistemas, computación y aprendizaje automático.',
  },
]

export default function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="leadership" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Liderazgo e <span className="text-primary">investigación</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {roles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex gap-5 p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white break-words">{item.title}</h3>
                    <p className="text-sm sm:text-base text-primary font-medium">{item.subtitle}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap bg-white/5 px-2.5 sm:px-3 py-1 rounded-lg self-start">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
