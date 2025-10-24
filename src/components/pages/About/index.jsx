import React from 'react'
import Helmet from 'react-helmet'
import { useIntl } from 'react-intl'
import m from 'messages'

const About = () => {
  const intl = useIntl()
  const title = intl.formatMessage(m.about)
  return (
    <section>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {title}
    </section>
  )
}

export default About
