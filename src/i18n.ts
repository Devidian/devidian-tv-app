import { createI18n, I18nOptions } from 'vue-i18n';
import enUS from './locales/en-US.json';
import deDE from './locales/de-DE.json';

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enUS;

export const i18n = createI18n<I18nOptions, MessageSchema, 'en-US' | 'de-DE'>({
	locale: 'de-DE',
	fallbackLocale: 'en-US',
	messages: {
		'en-US': enUS,
		'de-DE': deDE,
	},
});
