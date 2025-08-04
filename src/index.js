import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './AppRouter';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }
  
  #root > div:not([data-admin-layout]) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: visible;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>
); 