const experience = [
  {
    role: "Profesional de Soporte TIC",
    company: "Universidad Santo Tomás",
    date: "2022 – 2024",
    desc: "Soporte técnico, administración de servidores, gestión de plataformas institucionales y automatización de procesos.",
    tech: ["Soporte TI", "Servidores", "Automatización", "Gestión Web"],
  },
  {
    role: "Analista de Sistemas",
    company: "Sector Energético",
    date: "2024 – Actual",
    desc: "Automatización de procesos, análisis de datos, desarrollo de soluciones internas y soporte a sistemas críticos.",
    tech: ["Python", "SQL", "Procesos", "Data Analysis"],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-neon mb-14">
          Experiencia
        </h2>

        <div className="relative border-l border-white/10 pl-14 space-y-12">
          {experience.map((item, i) => (
            <div key={i} className="group relative">

              {/* Dot */}
              <span
                className="absolute -left-8.75 top-2 w-4 h-4 rounded-full
                          bg-white/10
                          transition-all duration-500
                          group-hover:bg-teal-300
                          shadow-[0_0_0px_#000]
                          group-hover:shadow-[0_0_18px_oklch(85.5%_0.138_181.071)]
                          group-hover:scale-125"
              />



              <div
                className="relative bg-white/5 backdrop-blur-md
             rounded-2xl p-6
             border border-white/10
             transition-all duration-500
             hover:border-white/20
             group"
              >
                {/* Neon side accent */}
                <span className="absolute left-0 top-0 h-full w-1 
                   bg-neon opacity-30
                   transition-all duration-500
                   group-hover:opacity-100" />

                <h3 className="text-xl font-semibold mb-1">
                  {item.role}
                </h3>

                <p className="text-sm text-muted mb-4">
                  {item.company} · {item.date}
                </p>

                <p className="text-muted text-sm mb-5 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full
                   bg-bg/70 border border-white/10 text-muted
                   transition hover:border-neon"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
