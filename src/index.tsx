import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './assets/theme';
import { BasicStyle, GlobalStyle } from './assets/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <HelmetProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <BasicStyle />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </div>
);
