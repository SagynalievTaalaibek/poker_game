import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './cards.css';
import './lib/Card';
import './lib/CardDeck';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);

