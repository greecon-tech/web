import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { resolveLocale } from "../../../i18n/routing";
import { TechnologyView } from "../../../views/TechnologyView";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata("technology", await resolveLocale(params));
}

export default async function Page({ params }: Props) {
  return <TechnologyView locale={await resolveLocale(params)} />;
}
