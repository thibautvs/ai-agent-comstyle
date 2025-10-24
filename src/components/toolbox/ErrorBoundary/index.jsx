import React from 'react'
import * as Sentry from '@sentry/react'

const FallbackComponent = () => <article>An error has occured</article>

const ErrorBoundary = ({ children }) => (
  <Sentry.ErrorBoundary fallback={FallbackComponent}>
    {children}
  </Sentry.ErrorBoundary>
)

export default ErrorBoundary
