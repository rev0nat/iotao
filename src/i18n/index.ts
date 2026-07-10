import frHome from "./fr/home";
import enHome from "./en/home";

export const dictionaries = {
  fr: {
    home: frHome,
  },

  en: {
    home: enHome,
  },
};

export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}