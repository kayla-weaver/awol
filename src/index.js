import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'; 
import App from './components/App';
import './App.css'


ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
