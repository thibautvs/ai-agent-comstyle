const jwtTokenKey = '[appName]JwtToken'
const preferredLanguageKey = '[appName]PreferredLanguage'

const getJwtToken = () => {
  return localStorage.getItem(jwtTokenKey)
}

const setJwtToken = (token) => {
  localStorage.setItem(jwtTokenKey, token)
}

const removeJwtToken = () => {
  localStorage.removeItem(jwtTokenKey)
}

const getPreferredLanguage = () => {
  return localStorage.getItem(preferredLanguageKey)
}

const setPreferredLanguage = (language) => {
  localStorage.setItem(preferredLanguageKey, language)
}

export {
  getJwtToken,
  setJwtToken,
  removeJwtToken,
  getPreferredLanguage,
  setPreferredLanguage,
}
