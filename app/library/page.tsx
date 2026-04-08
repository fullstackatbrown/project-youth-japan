import { getLibraryDocuments } from "@/lib/cosmic/library";
import LibraryClient from "./LibraryClient";

export const revalidate = 3600;

export default async function LibraryPage() {
  const documents = await getLibraryDocuments();
  return <LibraryClient documents={documents} />;
}
