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
      
     <div className="absolute w-96 h-96 bg-neon/20 blur-3xl rounded-full" />

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
          className="mr-8 relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold rounded-xl group bg-[#020d31] border border-[#00f0ff] shadow-[0_0_12px_#00f0ff] transition-all duration-300"
        >
          {/* Fondo animado hover */}
          <span className="absolute inset-0 w-full h-full bg-[#ffffff] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"></span>

          {/* Texto */}
          <span className="relative text-[#00f0ff] group-hover:text-black transition-colors duration-300">
             Proyectos TI
          </span>
        </a>

        <a
          href="/Dani_Neira_CV_v2.pdf"
          download
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold rounded-xl group bg-[#020d31] border border-[#00f0ff] shadow-[0_0_12px_#00f0ff] transition-all duration-300"
        >
          {/* Fondo animado hover */}
          <span className="absolute inset-0 w-full h-full bg-[#ffffff] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"></span>

          {/* Texto */}
          <span className="relative text-[#00f0ff] group-hover:text-black transition-colors duration-300">
            Descargar CV
          </span>
        </a>

      </div>
    </section>
  )
}
