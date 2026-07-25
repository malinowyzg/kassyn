import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Upewnij się, że masz plik stylów lub usuń tę linię, jeśli go nie potrzebujesz

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Nie znaleziono elementu z id='root' w index.html");
}