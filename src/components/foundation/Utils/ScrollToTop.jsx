import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    // We need a setTimeout as browsers prevent scrolling to top
    // when using back history.
    setTimeout(() => window.scrollTo(0, 0), 1)
  }, [pathname])
  return null
}

export default ScrollToTop
