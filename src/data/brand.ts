/** Central AeroSure Advisory brand strings and asset paths. Swap logo URLs if you replace SVGs with PNGs. */
export const brand = {
  siteName: "AeroSure Advisory",
  legalName: "AeroSure Advisory",
  tagline: "Aviation safety assurance built for operational reality.",
  defaultTitle: "AeroSure Advisory | Aviation safety assurance",
  defaultDescription:
    "AeroSure Advisory helps aviation organisations strengthen safety, assurance, and operational decision-making through practical advisory support, independent review, and systems thinking grounded in operational reality.",
  contactEmail: "hello@aerosureadvisory.example.com",
  /** Used in sitemap and robots when no env override is present */
  siteOrigin: "https://aerosureadvisory.example.com",
  logos: {
    primary: "/branding/aerosure-logo-primary.svg",
    white: "/branding/aerosure-logo-white.svg",
    icon: "/branding/aerosure-icon.svg",
  },
} as const;
