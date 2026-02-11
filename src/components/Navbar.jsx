import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-neon">
          DN.dev
        </span>

        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-neon transition">
            Inicio
          </a>
          <a href="#about" className="hover:text-neon transition">
            Sobre mí
          </a>
          <a href="#projects" className="hover:text-neon transition">
            Proyectos
          </a>
          <a
            href="/Dani_Neira_CV_v2.pdf"
            download
            className="hover:text-neon transition"
            >
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}
