import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resource } from '@/lang/resource'

i18n.use(initReactI18next).init({
	resources: resource,
	// 초기 설정 언어
	lng: resource.ko.value,
	// fallbackLng: {
	// 	en: [resource.en.value],
	// 	default: [resource.ko.value],
	// },
	debug: false,
	defaultNS: Object.keys(resource.en)[0] || Object.keys(resource.ko)[0],
	ns: Object.keys(resource.en)[0] || Object.keys(resource.ko)[0],
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
})

// 언어 변경
export function i18nChangeLanguage(lang) {
	i18n.changeLanguage(lang)
}

// 현재 지역 정보 가져오기
export function getLocale() {
	if (navigator) {
		if (navigator.language) {
			return navigator.language
		} else if (navigator.browserLanguage) {
			return navigator.browserLanguage
		} else if (navigator.systemLanguage) {
			return navigator.systemLanguage
		} else if (navigator.userLanguage) {
			return navigator.userLanguage
		}
	}
}

export default i18n
