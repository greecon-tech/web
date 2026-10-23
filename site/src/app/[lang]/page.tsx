import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import { resolveLocale } from "../../i18n/routing";
import { HomeView } from "../../views/HomeView";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata("home", await resolveLocale(params));
}

export default async function Page({ params }: Props) {
  return <HomeView locale={await resolveLocale(params)} />;
}
