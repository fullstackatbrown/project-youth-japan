import { cosmic } from "./cosmic";

export type LibraryDocument = {
  id: string;
  title: string;
  slug: string;
  resourceType: string;
  summitType: string;
  year: number;
  country: string;
  summary: string;
  fileUrl: string | null;
  externalLink: string | null;
};

type RawLibraryObject = {
  id: string;
  title: string;
  slug: string;
  metadata: {
    resource_type?: string;
    summit_type?: string;
    year?: number;
    country?: string;
    summary?: string;
    file?: { url?: string } | null;
    external_link?: string | null;
  };
};

export async function getLibraryDocuments(): Promise<LibraryDocument[]> {
  try {
    const response = await cosmic.objects
      .find({ type: "library-resources" })
      .props("id,title,slug,metadata")
      .depth(1);

    const objects: RawLibraryObject[] = response.objects ?? [];

    return objects.map((obj) => ({
      id: obj.id,
      title: obj.title,
      slug: obj.slug,
      resourceType: obj.metadata.resource_type ?? "",
      summitType: obj.metadata.summit_type ?? "",
      year: obj.metadata.year ?? 0,
      country: obj.metadata.country ?? "",
      summary: obj.metadata.summary ?? "",
      fileUrl: obj.metadata.file?.url ?? null,
      externalLink: obj.metadata.external_link ?? null,
    }));
  } catch (error) {
    console.error("Failed to fetch library documents from Cosmic:", error);
    return [];
  }
}
