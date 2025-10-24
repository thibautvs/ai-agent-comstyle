import React, { useState } from 'react'
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { getPreferredLanguage, setPreferredLanguage } from 'utils/local-storage'
import { messages as allMessages } from './config'

const defaultLocale = (
  getPreferredLanguage() ||
  (navigator && navigator.language) ||
  'en'
).substring(0, 2)

const defaultMessages = allMessages[defaultLocale]

const IntlContext = React.createContext()

const IntlProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale)
  const [messages, setMessages] = useState(defaultMessages)
  function selectLanguage(e) {
    const newLocale = e.target.value
    const newMessages = allMessages[newLocale]
    setLocale(newLocale)
    setMessages(newMessages)
    setPreferredLanguage(newLocale)
  }
  return (
    <IntlContext.Provider value={{ locale, selectLanguage }}>
      <ReactIntlProvider key={locale} locale={locale} messages={messages}>
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  )
}

export { IntlContext }
export default IntlProvider
