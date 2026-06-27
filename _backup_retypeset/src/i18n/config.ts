// Global Language Map
export const langMap: Record<string, string[]> = {
  'de': ['de-DE'],
  'en': ['en-US'],
}

// Giscus Language Map
// https://giscus.app/
export const giscusLocaleMap: Record<string, string> = {
  'de': 'de',
  'en': 'en',
}

// Twikoo Language Map
// https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
export const twikooLocaleMap: Record<string, string> = {
  'de': 'en', // fallback to English
  'en': 'en',
}

// Waline Language Map
// https://waline.js.org/en/guide/features/i18n.html
export const walineLocaleMap: Record<string, string> = {
  'de': 'en-US', // fallback to English
  'en': 'en-US',
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()
