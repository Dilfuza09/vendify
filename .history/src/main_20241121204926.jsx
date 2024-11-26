import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true, // Для поддержки React.startTransition
        v7_relativeSplatPath: true // Для нового поведения Splat-маршрутов
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
