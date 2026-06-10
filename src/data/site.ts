/** Central Tideborne Voyages brand strings, navigation, and page data. */

export const brand = {
  siteName: "Tideborne Voyages",
  legalName: "Tideborne Voyages",
  tagline: "Explore the world. Leave nothing but wake.",
  defaultTitle: "Tideborne Voyages | Boutique Expedition Cruises",
  defaultDescription:
    "Boutique expedition cruises to the world's most remote destinations: Antarctica, Iceland, the Galápagos, Norway and beyond, led by experts and inspired by nature.",
  phone: "1-800-487-2648",
  phoneHref: "tel:1-800-487-2648",
  contactEmail: "hello@tidebornevoyages.com",
  siteOrigin: "https://tidebornevoyages.example.com",
  address: ["50 Oceanic Way, Suite 400", "Seattle, WA 98101"],
  logos: {
    light: "/assets/tideborne/logos/tideborne-logo.svg",
    dark: "/assets/tideborne/logos/tideborne-logo-dark.svg",
    mark: "/assets/tideborne/logos/tideborne-mark.svg",
  },
} as const;

export const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/expedition-cruises", label: "Expedition Cruises" },
  { href: "/our-ships", label: "Our Ships" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About Us" },
] as const;

export type DestinationFilter = "polar" | "islands" | "fjords" | "wildlife";

export interface Destination {
  name: string;
  title: string;
  cardImage: string;
  largeImage: string;
  bestTime: string;
  style: string;
  wildlife: string;
  filters: DestinationFilter[];
}

export const destinations: Destination[] = [
  {
    name: "Antarctica",
    title: "The Last Great Wilderness",
    cardImage: "/assets/tideborne/destinations/antarctica-card-clean.jpg",
    largeImage: "/assets/tideborne/destinations/antarctica-large-clean.jpg",
    bestTime: "Nov – Mar",
    style: "Zodiac Cruising, Guided Hikes, Wildlife Viewing",
    wildlife: "Penguins, Seals, Whales",
    filters: ["polar", "wildlife"],
  },
  {
    name: "Iceland",
    title: "Fire, Ice & Timeless Landscapes",
    cardImage: "/assets/tideborne/destinations/iceland-card-clean.jpg",
    largeImage: "/assets/tideborne/destinations/iceland-large-clean.jpg",
    bestTime: "May – Sep",
    style: "Shore Excursions, Scenic Cruising, Hot Springs",
    wildlife: "Puffins, Arctic Fox, Whales",
    filters: ["islands"],
  },
  {
    name: "Galápagos",
    title: "Wildlife Like Nowhere Else",
    cardImage: "/assets/tideborne/destinations/galapagos-card-clean.jpg",
    largeImage: "/assets/tideborne/destinations/galapagos-large-clean.jpg",
    bestTime: "Year-Round",
    style: "Zodiac Landings, Snorkelling, Naturalist-Led Tours",
    wildlife: "Giant Tortoises, Marine Iguanas, Blue-Footed Boobies",
    filters: ["islands", "wildlife"],
  },
  {
    name: "Norway",
    title: "Fjords & Timeless Villages",
    cardImage: "/assets/tideborne/destinations/norway-card-clean.jpg",
    largeImage: "/assets/tideborne/destinations/norway-large-clean.jpg",
    bestTime: "May – Sep",
    style: "Scenic Cruising, Cultural Visits, Kayaking",
    wildlife: "Eagles, Seals, Reindeer",
    filters: ["fjords"],
  },
  {
    name: "Arctic Svalbard",
    title: "Into the High Arctic",
    cardImage: "/assets/tideborne/destinations/svalbard-large-clean.jpg",
    largeImage: "/assets/tideborne/destinations/svalbard-large-clean.jpg",
    bestTime: "Jun – Aug",
    style: "Zodiac Cruising, Hiking, Glacier Viewing",
    wildlife: "Polar Bears, Walrus, Arctic Birds",
    filters: ["polar", "wildlife"],
  },
];

export interface Itinerary {
  name: string;
  subtitle: string;
  destination: string;
  image: string;
  days: number;
  dates: string;
  price: string;
  description: string;
  season: "Spring" | "Summer" | "Autumn" | "Winter";
  style: "Polar" | "Islands" | "Fjords" | "Wildlife";
}

export const itineraries: Itinerary[] = [
  {
    name: "Antarctica Explorer",
    subtitle: "The Last Great Wilderness",
    destination: "Antarctica",
    image: "/assets/tideborne/itineraries/antarctica-clean.jpg",
    days: 13,
    dates: "Nov 12 – Nov 24, 2025",
    price: "$12,995",
    description:
      "Cross the Antarctic Circle and explore towering icebergs, penguin colonies, and vast polar landscapes.",
    season: "Autumn",
    style: "Polar",
  },
  {
    name: "Iceland Circumnavigation",
    subtitle: "Fire, Ice & Natural Wonders",
    destination: "Iceland",
    image: "/assets/tideborne/itineraries/iceland-clean.jpg",
    days: 11,
    dates: "Jul 06 – Jul 16, 2025",
    price: "$8,995",
    description:
      "Journey around the Land of Fire and Ice, visiting volcanic landscapes, fjords, and remote coastal villages.",
    season: "Summer",
    style: "Islands",
  },
  {
    name: "Galápagos Adventure",
    subtitle: "Wildlife Like Nowhere Else",
    destination: "Galápagos",
    image: "/assets/tideborne/itineraries/galapagos-clean.jpg",
    days: 15,
    dates: "Sep 03 – Sep 17, 2025",
    price: "$13,995",
    description:
      "Discover unique wildlife and fragile ecosystems on a once-in-a-lifetime Galápagos expedition.",
    season: "Autumn",
    style: "Wildlife",
  },
  {
    name: "Norway Fjords & Culture",
    subtitle: "Scenic Norway",
    destination: "Norway",
    image: "/assets/tideborne/itineraries/norway-clean.jpg",
    days: 9,
    dates: "May 18 – May 26, 2025",
    price: "$6,995",
    description:
      "Sail deep into Norway's fjords and experience timeless villages, waterfalls, and towering peaks.",
    season: "Spring",
    style: "Fjords",
  },
  {
    name: "Svalbard Expedition",
    subtitle: "Into the Arctic Wild",
    destination: "Svalbard",
    image: "/assets/tideborne/itineraries/svalbard-clean.jpg",
    days: 12,
    dates: "Jun 10 – Jun 21, 2025",
    price: "$10,995",
    description:
      "Explore the rugged beauty of the High Arctic, home to polar bears, glaciers, and endless daylight.",
    season: "Summer",
    style: "Polar",
  },
  {
    name: "Raja Ampat Discovery",
    subtitle: "Pristine Reefs & Remote Islands",
    destination: "Indonesia",
    image: "/assets/tideborne/itineraries/raja-ampat-clean.jpg",
    days: 8,
    dates: "Aug 14 – Aug 21, 2025",
    price: "$5,995",
    description:
      "Snorkel vibrant coral reefs and explore hidden lagoons in one of the world's most biodiverse regions.",
    season: "Summer",
    style: "Islands",
  },
  {
    name: "Hebrides & Highlands",
    subtitle: "Wild Coasts & Ancient Lands",
    destination: "Scotland",
    image: "/assets/tideborne/itineraries/hebrides-clean.jpg",
    days: 10,
    dates: "May 25 – Jun 03, 2025",
    price: "$7,995",
    description:
      "Discover Scotland's wild isles, ancient castles, and rich culture on a journey through windswept landscapes.",
    season: "Spring",
    style: "Wildlife",
  },
  {
    name: "Greenland Explorer",
    subtitle: "Icebergs & Inuit Culture",
    destination: "Greenland",
    image: "/assets/tideborne/itineraries/greenland-clean.jpg",
    days: 11,
    dates: "Jul 29 – Aug 08, 2025",
    price: "$9,995",
    description:
      "Sail among colossal icebergs and connect with Inuit communities in remote Greenland.",
    season: "Summer",
    style: "Polar",
  },
];

export interface Ship {
  name: string;
  tagline: string;
  image: string;
  guests: number;
}

export const fleet: Ship[] = [
  {
    name: "Tideborne Pursuit",
    tagline: "Agile. Adventurous. Unstoppable.",
    image: "/assets/tideborne/ships/pursuit-clean.jpg",
    guests: 98,
  },
  {
    name: "Tideborne Horizon",
    tagline: "Expansive Views. Timeless Journeys.",
    image: "/assets/tideborne/ships/horizon-clean.jpg",
    guests: 126,
  },
  {
    name: "Tideborne Venture",
    tagline: "Compact. Capable. Connected.",
    image: "/assets/tideborne/ships/venture-clean.jpg",
    guests: 84,
  },
];

/**
 * Team members are rendered as styled monogram cards. The asset pack
 * does not include clean portrait photography for them.
 */
export const guides = [
  {
    name: "Dr. Elias Morgan",
    role: "Marine Biologist & Expedition Leader",
    initials: "EM",
  },
  {
    name: "Sofia Alvarez",
    role: "Naturalist & Galápagos Specialist",
    initials: "SA",
  },
  {
    name: "Liam O'Connell",
    role: "Polar Historian & Expedition Guide",
    initials: "LO",
  },
  {
    name: "Maya Chen",
    role: "Wildlife Photographer & Guide",
    initials: "MC",
  },
] as const;

export const specialists = [
  {
    name: "Emily Carter",
    role: "Expedition Specialist",
    focus: "Arctic & Antarctica Expert",
    initials: "EC",
  },
  {
    name: "Lucas Meyer",
    role: "Expedition Specialist",
    focus: "Iceland & Europe Expert",
    initials: "LM",
  },
  {
    name: "Sofia Alvarez",
    role: "Expedition Specialist",
    focus: "Galápagos & South America Expert",
    initials: "SA",
  },
] as const;
