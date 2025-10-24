import React, { useContext } from 'react'
import { IntlContext } from '../../../foundation/Intl/IntlProvider'
import { supportedLanguages } from '../../../foundation/Intl/config'

const LanguageSelector = () => {
  const { locale, selectLanguage } = useContext(IntlContext)
  return (
    <select value={locale} onChange={selectLanguage}>
      {Object.keys(supportedLanguages).map((languageCode) => (
        <option key={languageCode} value={languageCode}>
          {languageCode.toUpperCase()}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector
