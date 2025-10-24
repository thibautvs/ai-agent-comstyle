import React from 'react'
import ErrorBoundary from '.'

export default {
  component: ErrorBoundary,
  title: 'Components/ErrorBoundary',
}

const BuggyComponent = () => {
  throw new Error('A bug occured')
}

export const Default = () => (
  <>
    <p>
      The component below throws an error within an{' '}
      <code>&lt;ErrorBoundary&gt;</code>, which prevents an app crash.
    </p>
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  </>
)
