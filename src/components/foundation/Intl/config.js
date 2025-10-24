import enMessages from './translations/en'
import frMessages from './translations/fr'
import nlMessages from './translations/nl'

const supportedLanguages = {
  en: 'English',
  fr: 'Français',
  nl: 'Nederlands',
}

const messages = {
  en: enMessages,
  fr: frMessages,
  nl: nlMessages,
}

export { supportedLanguages, messages }
