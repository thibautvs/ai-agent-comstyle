/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import CONFIG from 'config/environment'
import App from './components/foundation/App'

Sentry.init({ dsn: CONFIG.sentryDSN })

const root = createRoot(document.getElementById('root'))

const render = (Component) => {
  root.render(<Component />)
}

render(App)
