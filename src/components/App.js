import React from 'react';
import { useTranslation } from "react-i18next";
import Header from './Header';
import PathControl from './PathControl';
import { createRoot } from 'react-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

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
  });

function App() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <h1>{t('app_title')}</h1> 
      <Header />
      <hr />
      <PathControl />
    </React.Fragment>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  createRoot(rootElement).render(<App />);
});

export default App;
