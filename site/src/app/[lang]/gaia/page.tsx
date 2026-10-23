import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { resolveLocale } from "../../../i18n/routing";
import { GaiaView } from "../../../views/GaiaView";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata("gaia", await resolveLocale(params));
}

export default async function Page({ params }: Props) {
  return <GaiaView locale={await resolveLocale(params)} />;
}
