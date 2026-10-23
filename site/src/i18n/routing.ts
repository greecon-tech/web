import { notFound } from "next/navigation";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

/**
 * Resolves the [lang] route parameter. English lives at the site root, so "/en/..." is deliberately not a route and
 * unknown codes are 404s.
 */
export async function resolveLocale(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang) || lang === DEFAULT_LOCALE) notFound();
  return lang;
}
