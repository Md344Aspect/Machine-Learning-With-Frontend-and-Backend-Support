// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';  // global styles, add any if u like just import them
import App from './app';

// rendering
ReactDOM.render(
  <React.StrictMode>
    <app />
  </React.StrictMode>,
  document.getElementById('root')
);
