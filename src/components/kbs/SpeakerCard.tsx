"use client"

import { MetalikCard } from "@/components/kbs/MetalikCard"
import { cn } from "@/lib/utils"

interface SpeakerCardProps {
  photo: string
  firstName: string
  lastName: string
  role: string
  company?: string
  linkedinUrl?: string
  xUrl?: string
  className?: string
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function SpeakerCard({
  photo,
  firstName,
  lastName,
  role,
  company,
  linkedinUrl,
  xUrl,
  className,
}: SpeakerCardProps) {
  const hasSocials = linkedinUrl || xUrl

  return (
    <MetalikCard className={cn("w-[300px]", className)}>
      <div className="flex flex-col items-center p-6 gap-5 reveal-on-scroll opacity-0 translate-y-2 transition-all duration-1000 will-change-transform" style={{ contain: 'paint' }}>
        {/* Photo */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 shrink-0">
          <img
            src={photo}
            alt={`${firstName} ${lastName}`}
            loading="lazy"
            decoding="async"
            width="96"
            height="96"
            className="w-full h-full object-cover"
          />
          {/* Subtle shine on photo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>

        {/* Info */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold text-white/90 tracking-tight font-sans text-balance">
            {firstName} {lastName}
          </h3>
          <p className="text-sm text-cyan-300/70 font-medium font-sans">
            {role}
          </p>
          {company && (
            <p className="text-xs text-white/30 font-sans uppercase tracking-wider">
              {company}
            </p>
          )}
        </div>

        {/* Social links */}
        {hasSocials && (
          <div className="flex items-center gap-3">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/8 transition-all duration-200 hover:bg-white/10 hover:border-white/15"
                aria-label={`LinkedIn de ${firstName} ${lastName}`}
              >
                <LinkedinIcon className="w-4 h-4 text-white/40 transition-colors duration-200 group-hover:text-[#0A66C2]" />
              </a>
            )}
            {xUrl && (
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/8 transition-all duration-200 hover:bg-white/10 hover:border-white/15"
                aria-label={`X de ${firstName} ${lastName}`}
              >
                <XIcon className="w-4 h-4 text-white/40 transition-colors duration-200 group-hover:text-white/90" />
              </a>
            )}
          </div>
        )}
      </div>
    </MetalikCard>
  )
}
