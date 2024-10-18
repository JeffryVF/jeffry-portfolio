import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
import enGlobalJson from "../data/translations/en/global.json"
import enExperienceJson from "../data/translations/en/experience.json"
import enStudiesJson from "../data/translations/en/studies.json"
import enProjectsJson from "../data/translations/en/projects.json"

// Spanish translations
import esGlobalJson from "../data/translations/es/global.json"
import esExperienceJson from "../data/translations/es/experience.json"
import esStudiesJson from "../data/translations/es/studies.json"
import esProjectsJson from "../data/translations/es/projects.json"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            global: enGlobalJson,
            experience: enExperienceJson,
            studies: enStudiesJson,
            projects: enProjectsJson
        }
    },
    es: {
        translation: {
            global: esGlobalJson,
            experience: esExperienceJson,
            studies: esStudiesJson,
            projects: esProjectsJson
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;