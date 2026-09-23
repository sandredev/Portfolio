import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Microscope, Terminal, Brain } from 'lucide-react'

const highlights = [
  {
    icon: Microscope,
    label: 'Investigación en sistemas',
    desc: 'Diseño de SO y compiladores con C/C++, Linux',
  },
  {
    icon: Terminal,
    label: 'Linux, Scripting y Bajo Nivel',
    desc: 'Líder de CILISP: formo a quienes quieren empezar',
  },
  {
    icon: Brain,
    label: 'ML & Deep Learning',
    desc: 'Estudiando y profundizando continuamente',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-primary">mí</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              Santiago es estudiante de{' '}
              <span className="text-white font-semibold">Ingeniería de Sistemas</span> en la
              Universidad del Magdalena, orientado a la{' '}
              <span className="text-white font-semibold">investigación</span>. Estudia diseño
              de <span className="text-white font-semibold">sistemas operativos</span> y{' '}
              <span className="text-white font-semibold">compiladores</span> con C/C++, además
              de <span className="text-white font-semibold">Linux</span>.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Es <span className="text-white font-semibold">presidente de Syste+</span>,
              Asociación de Estudiantes de Ingeniería de Sistemas (2026-II — 2027-I), miembro
              en formación del semillero{' '}
              <span className="text-white font-semibold">GIDSYC</span> y líder de la{' '}
              <span className="text-white font-semibold">CILISP</span>: comunidad de estudio
              de Linux, Scripting y Programación de Bajo Nivel.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              También estudia y profundiza en{' '}
              <span className="text-white font-semibold">Machine Learning y Deep Learning</span>.
              El desarrollo de páginas web es hoy un interés{' '}
              <span className="text-white font-semibold">secundario</span>. Se caracteriza por
              su liderazgo, buen rendimiento en entornos desafiantes y por ver cada fallo como
              una oportunidad de aprendizaje.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
