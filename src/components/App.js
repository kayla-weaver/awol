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
import Footer from './Footer';



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
      <h1><b>{t('app_title')}</b></h1> 
      <h2><i>{t("app_subtitle")}</i></h2> 
      <LanguageSelector />
      <Header />
      <hr />
        <PathControl />
        <Footer />
    </React.Fragment>
  );
}

export default App;



