import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './config/i18';

import LoaderDefault from './components/default/LoaderDefault';



ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoaderDefault></LoaderDefault>}
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);