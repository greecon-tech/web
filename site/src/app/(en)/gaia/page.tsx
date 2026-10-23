import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { GaiaView } from "../../../views/GaiaView";

export const metadata: Metadata = pageMetadata("gaia", "en");

export default function Page() {
  return <GaiaView locale={"en"} />;
}
