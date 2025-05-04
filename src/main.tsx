import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CalculoFgtsProvider } from './context/CalculoFgtsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CalculoFgtsProvider>
        <App />
      </CalculoFgtsProvider>
    </BrowserRouter>
  </React.StrictMode>
);