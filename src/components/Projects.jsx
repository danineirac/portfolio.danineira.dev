const projects = [
  {
    title: "Automatización de Leads",
    desc: "Flujo completo de gestión de clientes con WhatsApp, tipificación automática y reportes.",
    tech: ["React", "Node", "SQL", "WhatsApp API"],
    link: "#",
  },
  {
    title: "IA Empresarial",
    desc: "IA en Python para análisis de datos, generación de insights y reportes gráficos.",
    tech: ["Python", "Pandas", "IA", "BigQuery"],
    link: "#",
  },
  {
    title: "Portafolio Web",
    desc: "Portafolio personal moderno con React, Tailwind y diseño futurista.",
    tech: ["React", "Tailwind", "Vite"],
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-neon mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group perspective"
            >
              <div
                className="bg-card rounded-2xl p-6 h-full
                           transform transition-all duration-500
                           group-hover:-translate-y-2
                           group-hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]
                           border border-white/10
                           hover:border-neon"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {p.title}
                </h3>

                <p className="text-muted text-sm mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-bg border border-white/10 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  className="text-neon font-semibold text-sm hover:underline"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
