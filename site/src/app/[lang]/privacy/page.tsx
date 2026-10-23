import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { resolveLocale } from "../../../i18n/routing";
import { LegalView } from "../../../views/LegalView";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata("privacy", await resolveLocale(params));
}

export default async function Page({ params }: Props) {
  return <LegalView locale={await resolveLocale(params)} page="privacy" />;
}
