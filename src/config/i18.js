/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
	fallbackLng: 'pl',
	debug: false,
	ns: [
		"common",
	],
	defaultNS: "common",
	interpolation: {
		escapeValue: false,
		formatSeparator: ",",
		format: (value, format) => {
			if (format === "uppercase") return value.toUpperCase();
			return value;
		},
	}
});




export default i18n;
