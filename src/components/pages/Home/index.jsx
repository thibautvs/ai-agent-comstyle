import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ReactIcon from 'icons/react.svg'
import { useIntl } from 'react-intl'
import m from 'messages'

const IconContainer = styled.div`
  svg {
    width: 250px;
  }
`

const Home = () => {
  const intl = useIntl()
  const title = intl.formatMessage(m.home)
  return (
    <section>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <IconContainer>
        <ReactIcon />
      </IconContainer>
      {title}
    </section>
  )
}

export default Home
