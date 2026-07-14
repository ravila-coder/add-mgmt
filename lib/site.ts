/** Central content model for the landing — single source of truth for copy and links. */

export const links = {
  website: "https://www.addemcapital.mx",
  publications: "https://www.addemcapital.mx/historias",
  investorReport: "https://addemv5.vercel.app",
  pipeline: "https://pipeline-addem.vercel.app/",
} as const;

/** Public figures from addemcapital.mx — as of September 30, 2025. */
export const kpis = [
  { label: "Assets Under Management", value: 80.6, prefix: "$", suffix: "M", decimals: 1 },
  { label: "Invested Capital", value: 52.3, prefix: "$", suffix: "M", decimals: 1 },
  { label: "Companies Financed", value: 60, prefix: "", suffix: "", decimals: 0 },
  { label: "Countries", value: 2, prefix: "", suffix: "", decimals: 0 },
] as const;

export const kpiFootnote = "Figures as of September 30, 2025.";
