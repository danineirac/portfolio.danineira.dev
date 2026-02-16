import { useEffect, useState } from "react"

const slides = [
    "/Public/Tech1.jpg",
    "/Public/Tech2.jpg",
    "/Public/Tech3.jpg",
]

export default function HeroBackgroundSlider() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {slides.map((img, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000
            ${current === i ? "opacity-100" : "opacity-0"}
          `}
                >
                    <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            
            {/* Overlay superior oscuro */}
            <div className="absolute inset-0 bg-black/0.3 backdrop-blur-sm" />

            {/* Gradiente inferior hacia el background */}
            <div className="absolute inset-0 bg-linear-to-b 
                        from-black/80 
                        via-black/60 
                        to-[#020d31]" />

        </>
    )
}






