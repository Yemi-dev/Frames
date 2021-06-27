import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global'
import { theme } from '../src/styles/theme'
import { MediaQueryProvider } from '../src/providers/MediaQueryProvider';
import { ModalProvider } from '../src/providers/ModalProvider';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <MediaQueryProvider>
          <ModalProvider>
            <Story />
          </ModalProvider>
        </MediaQueryProvider>
      </ThemeProvider>
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
  },
}

