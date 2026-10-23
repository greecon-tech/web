import type { Locale } from "../config";
import type { Dictionary } from "../types";
import { en } from "./en";
import { sq } from "./sq";

const dictionaries: Record<Locale, Dictionary> = { en, sq };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
