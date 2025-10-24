import React from 'react'
import Helmet from 'react-helmet'
import { useNavigate, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
import m from 'messages'
import { setJwtToken } from 'utils/local-storage'
import LanguageSelector from '../../_common/LanguageSelector'

const LogIn = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const intl = useIntl()
  function handleLogIn() {
    setJwtToken('[jwtToken]')
    navigate(state ? `${state.from}` : '/app')
  }
  return (
    <section>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <button type="button" onClick={handleLogIn}>
        {intl.formatMessage(m.logIn)}
      </button>
      <LanguageSelector />
    </section>
  )
}

export default LogIn
