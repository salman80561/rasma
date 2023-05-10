import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EcontextProvider from './Store/EcontextProvider';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EcontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EcontextProvider>
);
