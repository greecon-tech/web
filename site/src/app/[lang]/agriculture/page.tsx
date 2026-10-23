import type { Metadata } from "next";
import { pageMetadata } from "../../../i18n/metadata";
import { resolveLocale } from "../../../i18n/routing";
import { DetailView } from "../../../views/DetailView";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata("agriculture", await resolveLocale(params));
}

export default async function Page({ params }: Props) {
  return <DetailView locale={await resolveLocale(params)} page="agriculture" />;
}
