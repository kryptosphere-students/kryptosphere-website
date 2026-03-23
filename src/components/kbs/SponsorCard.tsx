import { useRef, useState, useCallback, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

export type SponsorTier = "gold" | "silver" | "bronze"

interface SponsorCardProps {
  logo: string
  name: string
  tier: SponsorTier
  websiteUrl?: string
  className?: string
}

const tierConfig: Record<
  SponsorTier,
  {
    label: string
    baseGradient: string
    holoGradient: string
    glareColor: string
    borderColor: string
    borderHoverColor: string
    accentColor: string
    labelBg: string
    labelText: string
  }
> = {
  gold: {
    label: "GOLD",
    baseGradient:
      "linear-gradient(135deg, #1a1608 0%, #2a2210 25%, #3d3015 50%, #2a2210 75%, #1a1608 100%)",
    holoGradient:
      "linear-gradient(135deg, rgba(255,215,0,0.12) 0%, rgba(218,165,32,0.08) 25%, rgba(255,193,37,0.1) 50%, rgba(255,215,0,0.12) 75%, rgba(218,165,32,0.08) 100%)",
    glareColor: "rgba(255, 215, 0, 0.3)",
    borderColor: "rgba(255, 215, 0, 0.12)",
    borderHoverColor: "rgba(255, 215, 0, 0.35)",
    accentColor: "rgba(255, 215, 0, 0.7)",
    labelBg: "rgba(255, 215, 0, 0.1)",
    labelText: "#ffd700",
  },
  silver: {
    label: "SILVER",
    baseGradient:
      "linear-gradient(135deg, #141418 0%, #1e1e24 25%, #2a2a32 50%, #1e1e24 75%, #141418 100%)",
    holoGradient:
      "linear-gradient(135deg, rgba(192,192,192,0.1) 0%, rgba(169,169,169,0.07) 25%, rgba(211,211,211,0.09) 50%, rgba(192,192,192,0.1) 75%, rgba(169,169,169,0.07) 100%)",
    glareColor: "rgba(211, 211, 211, 0.28)",
    borderColor: "rgba(192, 192, 192, 0.1)",
    borderHoverColor: "rgba(192, 192, 192, 0.3)",
    accentColor: "rgba(192, 192, 192, 0.6)",
    labelBg: "rgba(192, 192, 192, 0.08)",
    labelText: "#c0c0c0",
  },
  bronze: {
    label: "BRONZE",
    baseGradient:
      "linear-gradient(135deg, #18120e 0%, #241a12 25%, #30221a 50%, #241a12 75%, #18120e 100%)",
    holoGradient:
      "linear-gradient(135deg, rgba(205,127,50,0.1) 0%, rgba(184,115,51,0.07) 25%, rgba(205,127,50,0.09) 50%, rgba(184,115,51,0.1) 75%, rgba(205,127,50,0.07) 100%)",
    glareColor: "rgba(205, 127, 50, 0.25)",
    borderColor: "rgba(205, 127, 50, 0.1)",
    borderHoverColor: "rgba(205, 127, 50, 0.28)",
    accentColor: "rgba(205, 127, 50, 0.6)",
    labelBg: "rgba(205, 127, 50, 0.08)",
    labelText: "#cd7f32",
  },
}

export function SponsorCard({
  logo,
  name,
  tier,
  websiteUrl,
  className,
}: SponsorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({})
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({})
  const [isHovered, setIsHovered] = useState(false)

  const config = tierConfig[tier]
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
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${config.glareColor} 0%, transparent 55%)`,
        opacity: 1,
      })

      const angle =
        Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90
      setShineStyle({
        background: `linear-gradient(${angle}deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.06) 70%, transparent 100%)`,
        opacity: 1,
      })
    },
    [config.glareColor]
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
    ? { href: websiteUrl, target: "_blank", rel: "noopener noreferrer" }
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
          style={{ background: config.baseGradient }}
        />

        {/* Holographic layer */}
        <div
          className="absolute inset-0 z-[1] rounded-2xl"
          style={{
            background: isHovered ? config.holoGradient : "none",
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
              ? `1px solid ${config.borderHoverColor}`
              : `1px solid ${config.borderColor}`,
            transition: "border 0.4s ease",
          }}
        />

        {/* Content - Logo only, centered */}
        <Wrapper
          {...wrapperProps}
          className="relative z-[5] flex items-center justify-center p-6 h-full"
        >
          <div className="relative p-2 h-[120px] flex items-center justify-center reveal-on-scroll opacity-0 translate-y-2 transition-all duration-1000 will-change-transform" style={{ contain: 'paint' }}>
            <img
              src={logo}
              alt={`Logo ${name}`}
              loading="lazy"
              decoding="async"
              className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.06)] w-full h-full"
              width="96"
              height="96"
            />
          </div>
        </Wrapper>
      </div>
    </div>
  )
}
