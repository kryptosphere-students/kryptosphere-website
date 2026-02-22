import * as React from "react";
import { Link } from "react-router-dom";

type KbsNavButtonProps = {
  langPrefix: string;
  setIsOpen?: (open: boolean) => void;
  className?: string;

  // Ajustables
  widthClassName?: string;
  label?: string;
  seconds?: number;
  gapPx?: number;
};

export function KbsButton({
  langPrefix,
  setIsOpen,
  className = "",
  widthClassName = "w-[100px] sm:w-[130px] md:w-[150px]",
  label = "KRYPTOSPHERE Blockchain Summit",
  seconds = 10,
  gapPx = 24,
}: KbsNavButtonProps) {
  const to = `${langPrefix}/kryptosphere-blockchain-summit`;

  return (
    <Link
      to={to}
      onClick={() => setIsOpen?.(false)}
      className={[
        "kbs-btn group relative inline-flex items-center justify-center",
        "md:ml-2 h-8",
        widthClassName,
        "px-3 rounded-full",
        "text-xs sm:text-sm font-semibold tracking-wide text-white",
        "border border-white/10",
        "bg-gradient-to-r from-sky-900/60 via-sky-800/60 to-sky-700/60",
        "shadow-[0_8px_22px_rgba(0,0,0,0.32)]",
        "backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(0,0,0,0.42)]",
        "hover:border-sky-400/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        "overflow-hidden",
        className,
      ].join(" ")}
      aria-label={label}
      title={label}
    >
      {/* glow */}
      <span
        className="
          pointer-events-none absolute inset-0 opacity-0
          bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.22),transparent_55%)]
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* shine */}
      <span
        className="
          pointer-events-none absolute inset-y-0 left-[-45%] w-[45%]
          bg-white/10 blur-[0.5px]
          skew-x-[-20deg]
          transition-transform duration-700 ease-out
          group-hover:translate-x-[240%]
        "
      />

      {/* marquee (toujours actif) */}
      <span
        className="
          relative w-full overflow-hidden whitespace-nowrap
          [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]
        "
      >
        <span
          className="kbs-track inline-flex whitespace-nowrap"
          style={
            {
              ["--kbs-gap" as any]: `${gapPx}px`,
              ["--kbs-dur" as any]: `${seconds}s`,
            } as React.CSSProperties
          }
        >
          <span className="kbs-item">{label}</span>
          <span className="kbs-item" aria-hidden="true">
            {label}
          </span>
        </span>
      </span>

      {/* styles self-contained */}
      <style>{`
        .kbs-track{
          gap: var(--kbs-gap);
          will-change: transform;
          animation: kbsMarquee var(--kbs-dur) linear infinite;
          transform: translate3d(0,0,0);
        }

        /* IMPORTANT : boucle sans sursaut, même avec un gap */
        @keyframes kbsMarquee{
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(calc(-50% - (var(--kbs-gap) / 2)),0,0); }
        }

        @media (prefers-reduced-motion: reduce){
          .kbs-track{ animation: none !important; transform: none !important; }
        }
      `}</style>
    </Link>
  );
}
