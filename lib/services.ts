export type ServiceCategory = "facial" | "advanced" | "targeted" | "body-spa";

export type ServiceVerificationStatus =
  | "web-listed"
  | "provided-marketing-material"
  | "needs-owner-confirmation";

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  aliases?: string[];
  image: string;
  shortDescription: string;
  verificationStatus: ServiceVerificationStatus;
  featured?: boolean;
}

export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  facial: "Facial Care",
  advanced: "Advanced Treatments",
  targeted: "Targeted Treatments",
  "body-spa": "Body & Spa",
};

const descriptions: Record<ServiceCategory, string> = {
  facial: "A facial-care option listed for selected Executive Facial Care branches. Contact your preferred branch for availability and consultation.",
  advanced: "A device-assisted care option listed by Executive Facial Care. Availability, suitability and details vary by branch and require consultation.",
  targeted: "A targeted care option listed by Executive Facial Care. Contact your preferred branch for current availability and service information.",
  "body-spa": "A body and spa care option listed for selected branches. Contact your preferred branch for current availability and details.",
};

type Seed = Omit<Service, "shortDescription" | "image"> & {
  shortDescription?: string;
};

const seeds: Seed[] = [
  { id: "skin-consultation", slug: "skin-consultation", name: "Skin Consultation", category: "facial", verificationStatus: "web-listed" },
  { id: "basic-facial", slug: "basic-facial", name: "Basic Facial", category: "facial", verificationStatus: "web-listed" },
  { id: "signature-facial", slug: "signature-facial", name: "Signature Facial", category: "facial", verificationStatus: "web-listed" },
  { id: "deep-cleaning-facial", slug: "deep-cleaning-facial", name: "Deep Cleaning Facial", category: "facial", verificationStatus: "web-listed" },
  { id: "whitening-facial", slug: "whitening-facial", name: "Whitening Facial", category: "facial", verificationStatus: "web-listed", featured: true },
  { id: "acne-facial", slug: "acne-facial", name: "Acne Facial", category: "facial", verificationStatus: "provided-marketing-material" },
  { id: "anti-aging-facial", slug: "anti-aging-facial", name: "Anti-Aging Facial", category: "facial", verificationStatus: "web-listed" },
  { id: "charcoal-facial", slug: "charcoal-facial", name: "Charcoal Facial", category: "facial", verificationStatus: "web-listed" },
  { id: "gold-facial", slug: "gold-facial", name: "Gold Facial", category: "facial", verificationStatus: "web-listed" },
  { id: "relaxing-facial", slug: "relaxing-facial", name: "Relaxing Facial", category: "facial", verificationStatus: "web-listed" },
  { id: "hydra-facial", slug: "hydra-facial", name: "Hydra Facial", category: "facial", verificationStatus: "web-listed", featured: true },
  { id: "diamond-peel", slug: "diamond-peel", name: "Diamond Peel", category: "facial", verificationStatus: "web-listed", featured: true },
  { id: "carbon-laser", slug: "carbon-laser", name: "Carbon Laser", category: "advanced", verificationStatus: "provided-marketing-material", featured: true },
  { id: "pico-laser", slug: "pico-laser", name: "Pico Laser", category: "advanced", aliases: ["Pico Glow Laser"], verificationStatus: "web-listed", featured: true },
  { id: "photodynamic-therapy", slug: "photodynamic-therapy", name: "Photodynamic Therapy (PDT)", category: "advanced", aliases: ["Photodynamic Facial", "PDT Light Treatment"], verificationStatus: "web-listed" },
  { id: "ipl", slug: "ipl", name: "IPL", category: "advanced", verificationStatus: "provided-marketing-material" },
  { id: "laser-hair-reduction", slug: "laser-hair-reduction", name: "Laser Hair Reduction", category: "advanced", verificationStatus: "provided-marketing-material" },
  { id: "underarm-whitening", slug: "underarm-whitening", name: "Underarm Whitening", category: "targeted", verificationStatus: "provided-marketing-material" },
  { id: "back-acne-treatment", slug: "back-acne-treatment", name: "Back Acne Treatment", category: "targeted", verificationStatus: "provided-marketing-material" },
  { id: "wart-removal", slug: "wart-removal", name: "Wart Removal", category: "targeted", verificationStatus: "web-listed" },
  { id: "milia-removal", slug: "milia-removal", name: "Milia Removal", category: "targeted", verificationStatus: "provided-marketing-material" },
  { id: "body-scrub", slug: "body-scrub", name: "Body Scrub", category: "body-spa", verificationStatus: "provided-marketing-material" },
  { id: "intensive-body-whitening", slug: "intensive-body-whitening", name: "Intensive Body Whitening", category: "body-spa", verificationStatus: "provided-marketing-material" },
  { id: "body-massage", slug: "body-massage", name: "Body Massage", category: "body-spa", verificationStatus: "provided-marketing-material" },
  { id: "foot-spa", slug: "foot-spa", name: "Foot Spa", category: "body-spa", verificationStatus: "provided-marketing-material", featured: true },
  { id: "paraffin-wax", slug: "paraffin-wax", name: "Paraffin Wax", category: "body-spa", verificationStatus: "provided-marketing-material" },
];

export const services: Service[] = seeds.map((service) => ({
  ...service,
  image: `/services/${service.slug}.png`,
  shortDescription: service.shortDescription || descriptions[service.category],
}));

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
