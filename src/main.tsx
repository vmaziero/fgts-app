import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CalculoFgtsProvider } from './context/CalculoFgtsContext';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/700-italic.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CalculoFgtsProvider>
        <App />
      </CalculoFgtsProvider>
    </BrowserRouter>
  </React.StrictMode>
);