import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { TechnologyView } from "../../../views/TechnologyView";

export const metadata: Metadata = pageMetadata("technology", "en");

export default function Page() {
  return <TechnologyView locale={"en"} />;
}
