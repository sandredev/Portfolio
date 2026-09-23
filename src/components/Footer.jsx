export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Santiago Torres. Todos los derechos reservados.
        </p>
        <p className="text-gray-600 text-xs">
          Hecho con React, TailwindCSS y{' '}
          <span className="text-primary">Framer Motion</span>
        </p>
      </div>
    </footer>
  )
}
