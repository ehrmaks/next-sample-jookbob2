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
	defaultNS: Object.keys(resource.ko)[0],
	ns: Object.keys(resource.ko)[0],
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
	let lang

	if (navigator) {
		if (navigator.language) {
			lang = navigator.language
		} else if (navigator.browserLanguage) {
			lang = navigator.browserLanguage
		} else if (navigator.systemLanguage) {
			lang = navigator.systemLanguage
		} else if (navigator.userLanguage) {
			lang = navigator.userLanguage
		}
	}

	return getResourceKey(lang)
}

// 지역에 따른 Resource에 정의한 키 값 반환
function getResourceKey(lang) {
	const array = []
	Object.keys(resource).forEach(r => {
		if (lang.includes(r)) array.push(r)
	})

	// 지원된다면 첫번째 언어값 반환 지원 되지 않는 언어라면 영어를 반환
	return array.length > 0 ? array[0] : resource.en.value
}

export default i18n
