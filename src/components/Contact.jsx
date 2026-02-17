import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_PUBLIC_KEY
  )
  .then((result) => {
      console.log("SUCCESS:", result.text);
      setStatus("Mensaje enviado correctamente 🚀");
      form.current.reset();
    })
  .catch((error) => {
      console.log("ERROR DETALLADO:", error);
      setStatus("Error al enviar el mensaje ❌");
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#020d31] to-black px-6 py-20">
      
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-10 shadow-[0_0_40px_rgba(0,240,255,0.1)]">

        <h2 className="text-4xl font-bold text-center text-[#00f0ff] mb-10">
          Contáctame
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full p-4 bg-black/40 text-white border border-blue-500/40 rounded-xl focus:outline-none focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff] transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full p-4 bg-black/40 text-white border border-blue-500/40 rounded-xl focus:outline-none focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff] transition-all duration-300"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Tu teléfono"
            required
            className="w-full p-4 bg-black/40 text-white border border-blue-500/40 rounded-xl focus:outline-none focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff] transition-all duration-300"
          />

          <textarea
            name="message"
            placeholder="Tu mensaje"
            required
            rows="5"
            className="w-full p-4 bg-black/40 text-white border border-blue-500/40 rounded-xl focus:outline-none focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff] transition-all duration-300"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-black bg-[#00f0ff] hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_#00f0ff] hover:shadow-[0_0_30px_#00f0ff]"
          >
            Enviar Mensaje
          </button>

        </form>
      </div>

    </section>
  );

}