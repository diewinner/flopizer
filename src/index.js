import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/main.module.scss'
import './assets/styles/mainSec.module.scss'
import './assets/styles/components/subMain/tabs.module.scss'
import './assets/styles/components/subMain/headTitle.module.scss'
import './assets/styles/components/subMain/contentTitle.module.scss'
import './assets/styles/components/subMain/contentFooter.module.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



