import './App.css';
import AboutUs from './Components/AboutUs';
import ContentHome from './Components/ContentHome';
import Footer from './Components/Footer';
import Formulario from './Components/Formulario';
import HeaderHome from './Components/HeaderHome';
import Maps from './Components/Maps';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (cookieConsent) {
      setCookiesAccepted(true);
    }
  }, []);

  function acceptCookies() {
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // Expira en 365 días
    setCookiesAccepted(true);
  }

  function irInicio() {
    const inicioElement = document.getElementById("inicio");
    if (inicioElement) {
      inicioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
      {!cookiesAccepted && (
        <div className="cookie-banner">
          <p>Este sitio utiliza cookies para mejorar tu experiencia. ¿Aceptas nuestras cookies?</p>
          <button onClick={acceptCookies}>Aceptar</button>
        </div>
      )}
      <div className='row' onClick={irInicio}><i class="fa-solid fa-chevron-up"></i></div>
      <HeaderHome></HeaderHome>
      <ContentHome></ContentHome>
      <Formulario></Formulario>
      <AboutUs></AboutUs>
      <Maps></Maps>
      <Footer></Footer>
    </div>
  );
}

export default App;
