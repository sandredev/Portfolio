import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code2,
  Database,
  Wrench,
  Users,
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Globe,
  Terminal,
  BookOpen,
  Brain,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Lenguajes principales',
    icon: Code2,
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Sistemas y bajo nivel',
    icon: Terminal,
    skills: ['Linux', 'Bash / Scripting', 'CMake', 'Git', 'Git Flow'],
  },
  {
    title: 'CS fundamentals',
    icon: BookOpen,
    skills: ['Sistemas operativos', 'Compiladores', 'Gramáticas', 'Parsing'],
  },
  {
    title: 'ML & Data',
    icon: Brain,
    skills: ['Machine Learning (en formación)', 'Deep Learning (en formación)', 'Python científico (en formación)'],
  },
  {
    title: 'Web (secundario)',
    icon: Code2,
    skills: ['React', 'TailwindCSS', 'Supabase', 'Vercel'],
  },
  {
    title: 'Bases de datos',
    icon: Database,
    skills: ['SQLServer', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Herramientas',
    icon: Wrench,
    skills: ['GitHub', 'VS Code', 'IntelliJ IDEA'],
  },
  {
    title: 'Idiomas',
    icon: Globe,
    skills: ['Español (nativo)', 'Inglés (fluido)'],
  },
]

const softSkills = [
  { icon: Users, label: 'Liderazgo' },
  { icon: MessageCircle, label: 'Comunicación efectiva' },
  { icon: Lightbulb, label: 'Resolución de problemas' },
  { icon: RefreshCw, label: 'Adaptabilidad' },
  { icon: BookOpen, label: 'Mentalidad investigativa' },
  { icon: Terminal, label: 'Mentoría a principiantes' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <group.icon size={18} />
                </div>
                <h3 className="font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-bold text-white text-center mb-8"
        >
          Habilidades <span className="text-primary">blandas</span>
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <h4 className="text-white font-medium">{item.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
