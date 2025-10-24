import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import client from './Apollo/apollo-client'
import IntlProvider from './Intl/IntlProvider'
import theme from './Styles/theme'
import GlobalStyle from './Styles/GlobalStyle'
import ScrollToTop from './Utils/ScrollToTop'
import ProtectedLayout from './Layout/ProtectedLayout'
import PublicLayout from './Layout/PublicLayout'
import 'normalize.css'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <IntlProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Helmet titleTemplate="[appName] | %s" />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Navigate to="/app" replace />} />
            <Route path="/app/*" element={<ProtectedLayout />} />
            <Route path="/*" element={<PublicLayout />} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
