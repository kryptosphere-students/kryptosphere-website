"use client"

import { useRef, useState, useCallback, type MouseEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MetalikCardProps {
  children?: ReactNode
  className?: string
  glareColor?: string
  borderRadius?: number
  maxTilt?: number
}

export function MetalikCard({
  children,
  className,
  glareColor = "rgba(255, 255, 255, 0.35)",
  borderRadius = 16,
  maxTilt = 15,
}: MetalikCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({})
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({})
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      setTransform(
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
      )

      // Glare position
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor} 0%, transparent 60%)`,
        opacity: 1,
      })

      // Metallic shine band
      const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90
      setShineStyle({
        background: `linear-gradient(${angle}deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.08) 70%, transparent 100%)`,
        opacity: 1,
      })
    },
    [maxTilt, glareColor]
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    setGlareStyle({ opacity: 0 })
    setShineStyle({ opacity: 0 })
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "metalik-card-wrapper relative cursor-pointer select-none",
        className
      )}
      style={{
        transform,
        borderRadius: `${borderRadius}px`,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card body */}
      <div
        className="relative overflow-hidden h-full"
        style={{ borderRadius: `${borderRadius}px` }}
      >
        {/* Metallic base gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            borderRadius: `${borderRadius}px`,
            background:
              "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a1a2e 100%)",
          }}
        />

        {/* Animated holographic gradient */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            borderRadius: `${borderRadius}px`,
            background: isHovered
              ? "linear-gradient(135deg, rgba(120,119,198,0.15) 0%, rgba(0,210,211,0.1) 25%, rgba(255,0,128,0.08) 50%, rgba(120,119,198,0.15) 75%, rgba(0,210,211,0.1) 100%)"
              : "none",
            transition: "background 0.4s ease",
          }}
        />

        {/* Shine band overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            ...shineStyle,
            borderRadius: `${borderRadius}px`,
            transition: isHovered ? "opacity 0.15s ease" : "opacity 0.5s ease",
          }}
        />

        {/* Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            ...glareStyle,
            borderRadius: `${borderRadius}px`,
            transition: isHovered ? "opacity 0.15s ease" : "opacity 0.5s ease",
            mixBlendMode: "soft-light",
          }}
        />

        {/* Iridescent border */}
        <div
          className="pointer-events-none absolute inset-0 z-[4]"
          style={{
            borderRadius: `${borderRadius}px`,
            border: isHovered
              ? "1px solid rgba(255,255,255,0.2)"
              : "1px solid rgba(255,255,255,0.08)",
            transition: "border 0.4s ease",
          }}
        />

        {/* Content */}
        <div className="relative z-[5] h-full">{children}</div>
      </div>
    </div>
  )
}
