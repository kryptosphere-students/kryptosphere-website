import { useRef, useState, useCallback, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface PartnerCardProps {
  logo: string
  name: string
  websiteUrl?: string
  className?: string
}

const partnerConfig = {
  baseGradient:
    "linear-gradient(135deg, #182235 0%, #21314a 25%, #2a3d5c 50%, #21314a 75%, #182235 100%)",
  holoGradient:
    "linear-gradient(135deg, rgba(56,189,248,0.14) 0%, rgba(99,102,241,0.12) 25%, rgba(56,189,248,0.13) 50%, rgba(99,102,241,0.14) 75%, rgba(56,189,248,0.12) 100%)",
  glareColor: "rgba(175, 215, 255, 0.30)",
  borderColor: "rgba(56, 189, 248, 0.16)",
  borderHoverColor: "rgba(56, 189, 248, 0.38)",
};

export function PartnerCard({
  logo,
  name,
  websiteUrl,
  className,
}: PartnerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({})
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({})
  const [isHovered, setIsHovered] = useState(false)

  const maxTilt = 12

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
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      )

      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${partnerConfig.glareColor} 0%, transparent 55%)`,
        opacity: 1,
      })

      const angle =
        Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90
      setShineStyle({
        background: `linear-gradient(${angle}deg, transparent 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.05) 70%, transparent 100%)`,
        opacity: 1,
      })
    },
    []
  )

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransform(
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    )
    setGlareStyle({ opacity: 0 })
    setShineStyle({ opacity: 0 })
  }, [])

  const Wrapper = websiteUrl ? "a" : "div"
  const wrapperProps = websiteUrl
    ? { href: websiteUrl, target: "_blank" as const, rel: "noopener noreferrer" }
    : {}

  return (
    <div
      ref={cardRef}
      className={cn("group relative cursor-pointer select-none", className)}
      style={{
        transform,
        borderRadius: "16px",
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
      <div className="relative overflow-hidden rounded-2xl h-full">
        {/* Base gradient */}
        <div
          className="absolute inset-0 z-0 rounded-2xl"
          style={{ background: partnerConfig.baseGradient }}
        />

        {/* Holographic layer */}
        <div
          className="absolute inset-0 z-[1] rounded-2xl"
          style={{
            background: isHovered ? partnerConfig.holoGradient : "none",
            transition: "background 0.4s ease",
          }}
        />

        {/* Shine band */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] rounded-2xl"
          style={{
            ...shineStyle,
            transition: isHovered ? "opacity 0.15s ease" : "opacity 0.5s ease",
          }}
        />

        {/* Glare */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] rounded-2xl"
          style={{
            ...glareStyle,
            transition: isHovered ? "opacity 0.15s ease" : "opacity 0.5s ease",
            mixBlendMode: "soft-light",
          }}
        />

        {/* Border */}
        <div
          className="pointer-events-none absolute inset-0 z-[4] rounded-2xl"
          style={{
            border: isHovered
              ? `1px solid ${partnerConfig.borderHoverColor}`
              : `1px solid ${partnerConfig.borderColor}`,
            transition: "border 0.4s ease",
          }}
        />

        {/* Content - Logo + Name */}
        <Wrapper
          {...wrapperProps}
          className="relative z-[5] flex flex-col items-center justify-center gap-4 p-8 h-full"
        >
          <div className="relative w-full h-[150px] flex items-center justify-center reveal-on-scroll opacity-0 translate-y-2 transition-all duration-1000 will-change-transform" style={{ contain: 'paint' }}>
            <img
              src={logo}
              alt={`Logo ${name}`}
              loading="lazy"
              decoding="async"
              className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.04)] w-full h-full"
            />
          </div>
          <span className="text-sm font-medium text-white/40 group-hover:text-white/70 transition-colors duration-300 font-sans tracking-wide">
            {name}
          </span>
        </Wrapper>
      </div>
    </div>
  )
}
