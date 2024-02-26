import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './components/App';


i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en','es'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag','cookie', 'localStorage', 'path', 'subdomain'],
      cashes: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })
const loadingMarkup= (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);


