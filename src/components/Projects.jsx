const projects = [

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
    tech: ["Power BI", "Dax", "Visual Basic", "Macros"],
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
    desc: "Ejercicio de consumo de APIRest a personajes de la serie televisiva Rick & Morty con useEfect y useState",
    tech: ["React", "CSS3", "APIRest"],
    image: "/img-projects/rick&morty.jpg",
    link: "https://rickmorty01app.netlify.app/",
  },
    {
    title: "IA Empresarial",
    desc: "IA en Python para análisis de datos, generación de insights y reportes gráficos.",
    tech: ["Python", "Pandas", "IA", "BigQuery"],
    image: "/images/leads.jpg",
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
