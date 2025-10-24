import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))
const NotFound = lazy(() => import('../../pages/NotFound'))

const ProtectedRoutes = () => {
  return (
    <Suspense fallback={<span />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default ProtectedRoutes
