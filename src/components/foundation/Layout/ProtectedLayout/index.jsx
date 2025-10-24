import React from 'react'
import { ErrorBoundary } from 'toolbox'
import { Navigate } from 'react-router-dom'
import { getJwtToken } from 'utils/local-storage'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import ProtectedRoutes from '../../Routes/ProtectedRoutes'

const Protected = ({ children }) => {
  const jwtToken = getJwtToken()
  const { pathname, search } = window.location
  const from = `${pathname}${search}`
  return jwtToken ? children : <Navigate to="/login" state={{ from }} replace />
}

const ProtectedLayout = () => (
  <Protected>
    <section>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Menu />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProtectedRoutes />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </section>
  </Protected>
)

export default ProtectedLayout
