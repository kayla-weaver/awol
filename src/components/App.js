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
// import CheckoutForm from './CheckoutForm';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';


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

//   const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


function App() {
//   const options = {
//     // passing the client secret obtained from the Stripe Dashboard
//     clientSecret: '{{CLIENT_SECRET}}',
//   };
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}> 
      {/* <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements> */}
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



