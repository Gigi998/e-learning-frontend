import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Providers } from './context/providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
