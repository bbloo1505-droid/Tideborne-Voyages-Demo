export type Service = {
  id: string;
  title: string;
  shortLabel: string;
  blurb: string;
  cardImage: string;
};

export const services: Service[] = [
  {
    id: "air-navigation-safety",
    title: "Air navigation safety",
    shortLabel: "ANS safety",
    blurb:
      "Practical support for air navigation safety performance, change-related risk, and evidence that reflects live ANS/ATM operations.",
    cardImage: "/services/1.png",
  },
  {
    id: "atm-assurance",
    title: "ATM assurance",
    shortLabel: "ATM assurance",
    blurb:
      "Assurance planning, evidence structuring, and review support for ATM programmes where release confidence and oversight traceability matter.",
    cardImage: "/services/2.png",
  },
  {
    id: "safety-case-support",
    title: "Safety case support",
    shortLabel: "Safety cases",
    blurb:
      "Structured safety case development and refinement — from hazard analysis and barriers through verification to operational monitoring intent.",
    cardImage: "/services/3.png",
  },
  {
    id: "operational-safety-reviews",
    title: "Operational safety reviews",
    shortLabel: "Ops reviews",
    blurb:
      "Focused reviews of operational risk, controls, and assurance readiness ahead of key programme or deployment decisions.",
    cardImage: "/services/4.png",
  },
  {
    id: "risk-compliance-advisory",
    title: "Risk, compliance & advisory",
    shortLabel: "Risk & compliance",
    blurb:
      "Proportionate advisory on risk ownership, compliance interfaces, and governance narratives suited to high-regulation aviation environments.",
    cardImage: "/services/5.png",
  },
  {
    id: "independent-review-advisory",
    title: "Independent review & advisory",
    shortLabel: "Independent",
    blurb:
      "Independent challenge, peer review, and board-ready assurance summaries designed to strengthen decision quality without slowing delivery.",
    cardImage: "/services/6.png",
  },
];
