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
        logo: "/kbs/sponsors/iExec.png",
    },
    {
        name: "50 Partners",
        tier: "gold",
        websiteUrl: "https://www.50partners.fr/",
        logo: "/kbs/partners/50partnerWeb3.png",
    }
]

export default sponsorsData