import { useEffect, useState } from "react"

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-neon/20 blur-[120px] rounded-full" />

      <div
        className={`z-10 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Dani{" "}
          <span className="text-neon drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
            Neira.dev
          </span>
        </h1>

        <p className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-8">
          Ingeniero de Sistemas · Desarrollo · Automatización · IA
        </p>
        
        <a
          href="#projects"
          className="inline-block px-8 py-3 rounded-xl bg-neon text-bg font-semibold
                     hover:bg-neondark transition shadow-lg shadow-neon/40"
        >
          Ver proyectos
        </a>
        <a
          href="/Dani_Neira_CV_v2.pdf"
          download
          className="inline-block px-8 py-3 rounded-xl bg-neon text-bg font-semibold
                     hover:bg-neondark transition shadow-lg shadow-neon/40"
        >
          Descargar CV
        </a>
      </div>
    </section>
  )
}
