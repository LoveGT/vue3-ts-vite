import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'
import enLoacle from './en'
import zhCnLocale from './zh-cn'

const messages = {
	'zh-cn': {
		...zhCnLocale
	},
	'zh-en': {
		...enLoacle
	}
}
export const getLanguage = () => {
	let language = Cookies.get('lang')
	if (language) {
		return language
	}
	// 浏览器使用语言
	language = navigator.language.toLowerCase()
	const locales = Object.keys(messages)
	for (const locale of locales) {
		if (language.indexOf(locale) > -1) {
			return locale
		}
	}
	return 'zh-cn'
}
const i18n = createI18n({
	locale: getLanguage(),
	messages: messages
})

export default i18n
