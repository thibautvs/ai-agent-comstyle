import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
import m from 'messages'
import { removeJwtToken } from 'utils/local-storage'

const Menu = () => {
  const navigate = useNavigate()
  const intl = useIntl()
  function handleLogOut() {
    removeJwtToken()
    navigate('/login')
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{intl.formatMessage(m.home)}</Link>
        </li>
        <li>
          <Link to="about">{intl.formatMessage(m.about)}</Link>
        </li>
      </ul>
      <button type="button" onClick={handleLogOut}>
        {intl.formatMessage(m.logOut)}
      </button>
    </nav>
  )
}

export default Menu
