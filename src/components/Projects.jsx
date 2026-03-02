const projects = [

  {
    title: "Mujer Origen",
    desc: "Landing Page diseñada para el evento Mujer Origen by Danna Neira, que se estará realizando el 11 de abril de 2026",
    tech: ["React", "Tailwind", "Framer Motion", "CSS"],
    image: "/img-projects/mujerorigen.jpg",
    link: "https://mujer-origen.vercel.app/",
  },
  {
    title: "Biodiversidad",
    desc: "Desarrollo Web realizado en BootCamp Talento Tech, acerca de la Biodiversidad de Boyacá y Cundinamarca, con Consumo de Api de especies y mapa interactivo de Colombia",
    tech: ["Python", "FastApi", "Bootstrap", "HTML5", "Javascript"],
    image: "/img-projects/biodiversidad.jpg",
    link: "https://github.com/JimmyEuscategui/Biodiversidad",
  },
  {
    title: "Portafolio Personal",
    desc: "Portafolio personal moderno con React, Tailwind y diseño futurista.",
    tech: ["React", "Vite", "Tailwind", "CSS"],
    image: "/img-projects/portfolio.jpg",
    link: "https://portfolio-danineira-dev.vercel.app/",
  },
  {
    title: "Observatorio de Cienciometría",
    desc: "Diseño de dashboard para estadisticas de investigación, citaciones por autor, desarrollo tecnológico y estratrgias CTeI.",
    tech: ["Power BI", "Dax", "Visual Basic", "Macros"],
    image: "/img-projects/investigacion.jpg",
    link: "https://investigacion.santototunja.edu.co/observatorio-de-cienciometria-santototunja/",
  },
  {
    title: "Sitio Web DII Santoto Tunja",
    desc: "Diseño de Sitio web para la Dirección de Investigación e Innovación Santoto Tunja.",
    tech: ["Wordpress", "CSS3", "Javascript", "PHP", "HTML5"],
    image: "/img-projects/dii.jpg",
    link: "https://investigacion.santototunja.edu.co/",
  },
  {
    title: "Rick & Morty App",
    desc: "Ejercicio de consumo de APIRest a personajes de la serie animada Rick & Morty con useEfect y useState",
    tech: ["React", "CSS3", "APIRest"],
    image: "/img-projects/rick&morty.jpg",
    link: "https://rickmorty01app.netlify.app/",
  },
    {
    title: "Informes Contables",
    desc: "Automatización realizada para Enercer S.A E.S.P con conexión de base de datos World Office a looker studio por medio de script de Python, Bigquery para visualización de datos, informes y analisis.",
    tech: ["Python", "SQL", "Looker Studio", "BigQuery"],
    image: "/img-projects/u32.jpg",
    link: "null",
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

                <div className="h-48 overflow-hidden rounded-t-2xl my-5">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
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
