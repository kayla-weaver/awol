import React, { Suspense} from 'react'; 
import { useTranslation } from 'react-i18next';
import Header from './Header';
import PathControl from './PathControl';
import { BrowserRouter } from 'react-router-dom'; 
import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next'; 
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import LanguageSelector from './LanguageSelector';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en','es'],
    fallbackLng: 'en',
    detection: {
      order: ['htmlTag','cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}> 
        <AppContent />
      </Suspense>
    </BrowserRouter>
  );
}

function AppContent() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <h1>{t('app_title')} 
      <LanguageSelector />
      </h1> 
      <Header />
      <hr />
        <PathControl />
    </React.Fragment>
  );
}

export default App;



