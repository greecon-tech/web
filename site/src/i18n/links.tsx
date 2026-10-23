import Link from "next/link";
import { localePath, type Locale } from "./config";
import { PAGES } from "../lib/seo";
import type { LinkFn } from "./types";

/** A link to another page of the site, in the given language. Used inside the dictionaries' rich text. */
export function makeLink(locale: Locale): LinkFn {
  return (page, label) => <Link href={localePath(locale, PAGES[page].path)}>{label}</Link>;
}
