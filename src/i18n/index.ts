import frHome from "./fr/home";
import frAbout from "./fr/about";
import frConsultation from "./fr/consultations";
import frConsulting from "./fr/consulting";
import frContact from "./fr/contact";
import enHome from "./en/home";
import enAbout from "./en/about";
import enConsultation from "./en/consultations";
import enConsulting from "./en/consulting";
import enContact from "./en/contact";

export const dictionaries = {
  fr: {
    home: frHome,
    about: frAbout,
    consultations: frConsultation,
    consulting: frConsulting,
    contact: frContact,
  },
  en: {
    home: enHome,
    about: enAbout,
    consultations: enConsultation,
    consulting: enConsulting,
    contact: enContact,
  },
};

export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}