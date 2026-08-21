export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  image: string;
};

export type Branch = {
  slug: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
};

export const services: Service[] = [
  {
    slug: "whitening-facial",
    name: "Whitening Facial",
    shortDescription: "A demo service card for brightening-focused facial care.",
    category: "Facial Care",
    image: "/demo/whitening-facial.png",
  },
  {
    slug: "carbon-laser",
    name: "Carbon Laser",
    shortDescription: "A demo treatment card based on the supplied campaign materials.",
    category: "Laser Care",
    image: "/demo/carbon-laser.png",
  },
  {
    slug: "pico-laser",
    name: "Pico Laser",
    shortDescription: "Treatment details, suitability and pricing should be owner-approved.",
    category: "Laser Care",
    image: "/demo/pico-laser.png",
  },
  {
    slug: "hydra-facial",
    name: "Hydra Facial",
    shortDescription: "A demo listing ready for official service copy and duration.",
    category: "Facial Care",
    image: "/demo/hydra-facial.png",
  },
  {
    slug: "diamond-peel",
    name: "Diamond Peel",
    shortDescription: "A clean service card that can later connect to online booking.",
    category: "Facial Care",
    image: "/demo/diamond-peel.png",
  },
  {
    slug: "body-care",
    name: "Body Care",
    shortDescription: "A placeholder category for massage, scrub and body treatments.",
    category: "Body Care",
    image: "/demo/body-care.png",
  },
];

export const branches: Branch[] = [
  {
    slug: "calamba",
    name: "Calamba City",
    area: "Laguna",
    address: "Branch address to be confirmed by The Executive Facial Care.",
    phone: "Official branch contact to be confirmed",
    hours: "Official operating hours to be confirmed",
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    area: "Laguna",
    address: "Branch address to be confirmed by The Executive Facial Care.",
    phone: "Official branch contact to be confirmed",
    hours: "Official operating hours to be confirmed",
  },
  {
    slug: "more-branches",
    name: "More Branches",
    area: "Philippines",
    address: "Complete branch directory will be added after owner confirmation.",
    phone: "—",
    hours: "—",
  },
];

export const testimonials = [
  {
    name: "Client feedback",
    location: "Demo content",
    quote:
      "This area is designed for verified customer feedback supplied and approved by the company.",
  },
  {
    name: "Client story",
    location: "Demo content",
    quote:
      "Approved testimonials can highlight service quality without making unsupported medical claims.",
  },
  {
    name: "Customer experience",
    location: "Demo content",
    quote:
      "Reviews can later be filtered by branch and linked to a post-appointment feedback flow.",
  },
];
