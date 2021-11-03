/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { TRANSLATIONS_PL } from "../locales/pl/common.js";
import { TRANSLATIONS_EN } from "../locales/en/common.js";


i18n.use(initReactI18next).init({
	fallbackLng: 'pl',
	debug: true,
	interpolation: {
		escapeValue: false,
		formatSeparator: ",",
		format: (value, format) => {
			if (format === "uppercase") return value.toUpperCase();
			return value;
		},
	},
	resources: {
		  en: {
			translation: TRANSLATIONS_EN
		  },
		  pl: {
			translation: TRANSLATIONS_PL
		  }
		}
	}		
);





export default i18n;
