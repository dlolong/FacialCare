export type BranchVerificationStatus =
  | "web-listed"
  | "needs-owner-confirmation"
  | "owner-confirmed";

export interface Branch {
  id: string;
  slug: string;
  name: string;
  city: string;
  province: string;
  region: string;
  address?: string | null;
  phone?: string | null;
  hours?: string | null;
  verificationStatus: BranchVerificationStatus;
  isPublic: boolean;
  featured?: boolean;
}

export const branches: Branch[] = [
  { id: "calamba", slug: "calamba", name: "Calamba", city: "Calamba", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true, featured: true },
  { id: "santa-rosa", slug: "santa-rosa", name: "Santa Rosa / Balibago", city: "Santa Rosa", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true, featured: true },
  { id: "binan", slug: "binan", name: "Biñan", city: "Biñan", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "san-pedro", slug: "san-pedro", name: "San Pedro", city: "San Pedro", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "los-banos", slug: "los-banos", name: "Los Baños", city: "Los Baños", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "cabuyao", slug: "cabuyao", name: "Cabuyao", city: "Cabuyao", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "san-pablo", slug: "san-pablo", name: "San Pablo", city: "San Pablo City", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "santa-cruz", slug: "santa-cruz-laguna", name: "Santa Cruz", city: "Santa Cruz", province: "Laguna", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "tanauan", slug: "tanauan", name: "Tanauan", city: "Tanauan City", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "batangas-city", slug: "batangas-city", name: "Batangas City", city: "Batangas City", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "lipa", slug: "lipa", name: "Lipa", city: "Lipa City", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "rosario-batangas", slug: "rosario-batangas", name: "Rosario", city: "Rosario", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "lemery", slug: "lemery", name: "Lemery", city: "Lemery", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "taal", slug: "taal", name: "Taal", city: "Taal", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "balayan", slug: "balayan", name: "Balayan", city: "Balayan", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "san-pascual", slug: "san-pascual", name: "San Pascual", city: "San Pascual", province: "Batangas", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "naic", slug: "naic", name: "Naic", city: "Naic", province: "Cavite", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "gma", slug: "general-mariano-alvarez", name: "General Mariano Alvarez", city: "General Mariano Alvarez", province: "Cavite", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "trece-martires", slug: "trece-martires", name: "Trece Martires", city: "Trece Martires", province: "Cavite", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "dasmarinas", slug: "dasmarinas", name: "Dasmariñas", city: "Dasmariñas", province: "Cavite", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "bacoor", slug: "bacoor", name: "Bacoor", city: "Bacoor", province: "Cavite", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "candelaria", slug: "candelaria", name: "Candelaria", city: "Candelaria", province: "Quezon", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "antipolo", slug: "antipolo", name: "Antipolo", city: "Antipolo", province: "Rizal", region: "CALABARZON", verificationStatus: "web-listed", isPublic: true },
  { id: "sucat-paranaque", slug: "sucat-paranaque", name: "Sucat / Parañaque", city: "Parañaque", province: "Metro Manila", region: "NCR", verificationStatus: "web-listed", isPublic: true, featured: true },
  { id: "marikina", slug: "marikina", name: "Marikina", city: "Marikina", province: "Metro Manila", region: "NCR", verificationStatus: "web-listed", isPublic: true },
  { id: "malabon", slug: "malabon", name: "Malabon", city: "Malabon", province: "Metro Manila", region: "NCR", verificationStatus: "web-listed", isPublic: true },
  { id: "taguig-ususan", slug: "taguig-ususan", name: "Taguig / Ususan", city: "Taguig", province: "Metro Manila", region: "NCR", verificationStatus: "web-listed", isPublic: true },
  { id: "calapan", slug: "calapan", name: "Calapan", city: "Calapan City", province: "Oriental Mindoro", region: "MIMAROPA", verificationStatus: "web-listed", isPublic: true },
  { id: "pinamalayan", slug: "pinamalayan", name: "Pinamalayan", city: "Pinamalayan", province: "Oriental Mindoro", region: "MIMAROPA", verificationStatus: "web-listed", isPublic: true, featured: true },
  { id: "roxas-oriental-mindoro", slug: "roxas-oriental-mindoro", name: "Roxas", city: "Roxas", province: "Oriental Mindoro", region: "MIMAROPA", verificationStatus: "web-listed", isPublic: true },
  { id: "san-jose-occidental-mindoro", slug: "san-jose-occidental-mindoro", name: "San Jose", city: "San Jose", province: "Occidental Mindoro", region: "MIMAROPA", verificationStatus: "web-listed", isPublic: true },
  { id: "cabanatuan", slug: "cabanatuan", name: "Cabanatuan", city: "Cabanatuan City", province: "Nueva Ecija", region: "Central Luzon", verificationStatus: "web-listed", isPublic: true },
  { id: "tayug", slug: "tayug", name: "Tayug", city: "Tayug", province: "Pangasinan", region: "Ilocos Region", verificationStatus: "web-listed", isPublic: true },
  { id: "tacloban", slug: "tacloban", name: "Tacloban", city: "Tacloban City", province: "Leyte", region: "Eastern Visayas", verificationStatus: "web-listed", isPublic: true, featured: true },
  { id: "ormoc", slug: "ormoc", name: "Ormoc", city: "Ormoc City", province: "Leyte", region: "Eastern Visayas", verificationStatus: "web-listed", isPublic: true, featured: true },
];

export const publicBranches = branches
  .filter((branch) => branch.isPublic)
  .sort((a, b) => a.name.localeCompare(b.name));

export function getBranchBySlug(slug: string) {
  return publicBranches.find((branch) => branch.slug === slug);
}
