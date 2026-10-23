import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { DetailView } from "../../../views/DetailView";

export const metadata: Metadata = pageMetadata("energy", "en");

export default function Page() {
  return <DetailView locale={"en"} page="energy" />;
}
