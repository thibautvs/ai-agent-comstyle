import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const LogIn = lazy(() => import('../../pages/Auth/LogIn'))
const NotFound = lazy(() => import('../../pages/NotFound'))

const PublicRoutes = () => (
  <Suspense fallback={<span />}>
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
)

export default PublicRoutes
