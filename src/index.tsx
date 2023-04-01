import React from 'react';
import ReactDOM from 'react-dom/client';
import RickAndMortyApp from './RickAndMortyApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RickAndMortyApp />
  </React.StrictMode>
);

reportWebVitals();
