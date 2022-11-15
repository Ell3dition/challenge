import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './components/main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);
