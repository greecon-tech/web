/** Supported languages. English is the default and lives at the site root; every other language lives under /<code>/. */
export const LOCALES = ["en", "sq"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const NON_DEFAULT_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

export const LOCALE_INFO: Record<
  Locale,
  {
    /** The language's own name, shown in language switchers. */
    label: string;
    /** Value of <html lang> and hreflang. */
    htmlLang: string;
    /** Open Graph locale. */
    ogLocale: string;
    /** BCP 47 tag for Intl formatting (dates). */
    intl: string;
  }
> = {
  en: { label: "English", htmlLang: "en", ogLocale: "en_US", intl: "en-GB" },
  sq: { label: "Shqip", htmlLang: "sq", ogLocale: "sq_AL", intl: "sq-AL" }
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Path for a page in a language: "/energy/" in English, "/sq/energy/" in Albanian. `path` starts and ends with "/". */
export function localePath(locale: Locale, path: string): string {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

/** Splits a pathname such as "/sq/energy/" into its language and the language-neutral path ("/energy/"). */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  for (const locale of NON_DEFAULT_LOCALES) {
    const prefix = `/${locale}/`;
    if (normalized.startsWith(prefix)) return { locale, path: `/${normalized.slice(prefix.length)}` };
  }
  return { locale: DEFAULT_LOCALE, path: normalized };
}
