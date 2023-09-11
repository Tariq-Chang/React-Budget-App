import i18next from "i18next";
import urJSON from "./locale/ur/translations.json";
import enJSON from "./locale/en/translations.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            translations: enJSON               // 'translations' is our custom namespace
        },
        ur: {
            translations: urJSON
        },
    },
});