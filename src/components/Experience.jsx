import { useEffect, useState } from "react"

const experience = [
  {
    role: "Profesional de Soporte TIC",
    company: "Universidad Santo Tomás",
    date: "2022 – 2024",
    desc: "Soporte técnico, administración de servidores, gestión de plataformas institucionales y automatización de procesos.",
  },
  {
    role: "Analista de Sistemas",
    company: "Sector Energético",
    date: "2024 – Actual",
    desc: "Automatización de procesos, análisis de datos, desarrollo de soluciones internas y soporte a sistemas críticos.",
  },
]

export default function Experience() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <section
      id="experience"
      className="bg-card py-20 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-neon mb-14">
          Experiencia
        </h2>

        <div className="relative border-l border-white/10 pl-10">
          {experience.map((item, i) => (
            <div
              key={i}
              className={`mb-12 relative transition-all duration-700 ${
                show
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Dot */}
              <span className="absolute -left-[14px] top-1 w-4 h-4 rounded-full bg-neon shadow-[0_0_12px_#38BDF8]" />

              <div className="bg-bg rounded-xl p-6 hover:border hover:border-neon transition">
                <h3 className="text-xl font-semibold">
                  {item.role}
                </h3>
                <p className="text-sm text-muted mb-2">
                  {item.company} · {item.date}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
