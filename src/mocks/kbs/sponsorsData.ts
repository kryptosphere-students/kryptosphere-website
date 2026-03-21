import type { SponsorTier } from "../../components/kbs/SponsorCard"
const sponsorsData: { name: string; tier: SponsorTier; websiteUrl: string; logo: string }[] = [
    {
        name: "Team1 Avalanche",
        tier: "gold",
        websiteUrl: "https://www.team1.network/",
        logo: "/kbs/sponsors/Team1_Text_Main.svg",
    },
    {
        name: "XRPL",
        tier: "gold",
        websiteUrl: "https://xrpl.org/",
        logo: "/kbs/sponsors/XRPL_Master_WHT.svg",
    },
    {
        name: "IExec",
        tier: "gold",
        websiteUrl: "https://iex.ec/",
        logo: "https://cdn.prod.website-files.com/6646148828eddb19c172bf2a/68b59948f3faf1bcad649ae9_Logo-iExec-YW.svg",
    }
]

export default sponsorsData