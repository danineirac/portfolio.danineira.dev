import { useEffect, useRef } from "react"
import techBall from "../assets/techball.svg"

export default function TechSphere({ className = "", active = false }) {
  const innerRef = useRef(null)

useEffect(() => {
  let rotationZ = 0
  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    mouseX = (e.clientX / innerWidth - 0.5) * 15
    mouseY = (e.clientY / innerHeight - 0.5) * 15
  }

  const animate = () => {
    rotationZ += 0.1 // 🔥 velocidad de giro hacia la derecha

    // interpolación suave tipo Apple
    currentX += (mouseX - currentX) * 0.05
    currentY += (mouseY - currentY) * 0.05

    if (innerRef.current) {
      innerRef.current.style.transform = `
        rotateZ(${rotationZ}deg)
        rotateX(${-currentY}deg)
        rotateY(${currentX}deg)
      `
    }

    requestAnimationFrame(animate)
  }

  window.addEventListener("mousemove", handleMouseMove)
  animate()

  return () => window.removeEventListener("mousemove", handleMouseMove)
}, [])

  return (
    <div
      className={`
        pointer-events-none
        absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        ${className}
      `}
      style={{ width: "700px", perspective: "300px" }}
    >
      <div
        ref={innerRef}
        className={`
          transition-all duration-700 ease-out
          spin-slow pulse-energy
          ${active ? "scale-110 opacity-40" : "scale-100 opacity-25"}
        `}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={techBall}
          alt="Tech Sphere"
          className="w-full mix-blend-screen"
        />
      </div>
    </div>
  )
}