import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { LegalView } from "../../../views/LegalView";

export const metadata: Metadata = pageMetadata("privacy", "en");

export default function Page() {
  return <LegalView locale={"en"} page="privacy" />;
}
