/** @type { import('@storybook/react').Preview } */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../src/components/foundation/Styles/GlobalStyle'
import theme from '../src/components/foundation/Styles/theme'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
}

export default preview
