export function SeroEmbed({ content }: { content?: { warning: string; btn: string } }) {
  const url = "https://se.ro/events/kryptosphere-blockchain-summit-2026-cannes-france-1pqusn";
  const CROP = 64;
  return (
    <div className="w-full">
      <div className="my-3 flex flex-col items-center gap-3">
        <div className="text-lg font-bold text-red-400">
          {content?.warning || "Une fois votre billet EthCC[9] obtenu, pour vous authentifier rendez-vous sur se.ro !"}
        </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl font-bold border border-white/15 px-4 py-2 text-white/90 hover:bg-white/10 transition mx-auto"
          >
            {content?.btn || "Voir sur se.ro"}
          </a>
      </div>
      <div className="relative h-[90vh] overflow-hidden rounded-2xl bg-[rgba(17,17,17,1)] w-full max-w-[700px] mx-auto">
        <iframe
        src={url}
        title="KBS 2026 — se.ro"
        className="h-full w-full mx-auto border-0"
        loading="lazy"
        />
        <div
        className="absolute right-4 top-4 z-10 border border-gray-700 rounded-xl bg-[#0d1117]/90 backdrop-blur flex items-center justify-center pointer-events-auto"
        style={{ width: 140, height: 44 }}>
            <a href={url} target="_blank" rel="noreferrer" className="w-full text-lime-500 font-bold text-md hover:text-lime-400 transition">
                Sign-In
            </a>
        </div>
        <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-auto
                   bg-gradient-to-t from-[#0d1117] via-[#0d1117]/95 to-transparent"
        style={{ height: `${150}px` }}
      />
      </div>
      
    </div>
  );
}