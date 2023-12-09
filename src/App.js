import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import AuthProvider, { useAuth } from 'auth/AuthProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
      <AuthProvider>
        <Routes />
        </AuthProvider>
      </BrowserRouter>
    </Page>
  );
};

export default App;
